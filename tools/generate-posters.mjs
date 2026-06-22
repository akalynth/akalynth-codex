#!/usr/bin/env node
// Akalynth Codex — poster generator (asset packets).
// Reads codex/assets/poster-specs.json; for each spec, uses the FULL authoritative
// image brief (the .prompt.md) as the generation prompt. Produces codex/assets/out/<id>.png.
//
// CREDENTIAL-GATED: with no OPENAI_API_KEY this runs a DRY RUN (lists work, exits 0).
// With a key, it calls the OpenAI Images API (default model gpt-image-1) and writes PNGs.
//
// Usage:
//   node codex/tools/generate-posters.mjs            # dry-run if no key; generate if key set
//   node codex/tools/generate-posters.mjs --dry-run  # force dry-run even with a key
//   node codex/tools/generate-posters.mjs --force     # regenerate even if output exists
//   node codex/tools/generate-posters.mjs --only forgehold   # one object only
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveOpsRoot } from './resolve-ops-root.mjs';

const codexRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const opsRoot = resolveOpsRoot(codexRoot);
const specPath = join(codexRoot, 'assets', 'poster-specs.json');
const outDir = join(codexRoot, 'assets', 'out');

const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const ONLY = (args[args.indexOf('--only') + 1] && !args[args.indexOf('--only') + 1].startsWith('--')) ? args[args.indexOf('--only') + 1] : null;
const KEY = process.env.OPENAI_API_KEY || '';
const DRY = args.includes('--dry-run') || !KEY;
const MODEL = process.env.AKALYNTH_IMAGE_MODEL || 'gpt-image-1';

const doc = JSON.parse(readFileSync(specPath, 'utf8'));
let specs = doc.specs;
if (ONLY) specs = specs.filter((s) => s.object === ONLY || s.poster_id === ONLY);

console.log('Akalynth Codex — poster generator');
console.log(`  mode      : ${DRY ? 'DRY RUN' : 'GENERATE'}${KEY ? '' : '  (no OPENAI_API_KEY → dry run forced)'}`);
console.log(`  model     : ${MODEL}`);
console.log(`  posters   : ${specs.length}${ONLY ? ` (filtered: ${ONLY})` : ''}`);
mkdirSync(outDir, { recursive: true });

async function genOne(s) {
  const briefPath = join(opsRoot, s.brief);
  if (!existsSync(briefPath)) return { ...s, result: 'brief-missing' };
  const prompt = readFileSync(briefPath, 'utf8').trim();
  const out = join(opsRoot, s.out);
  const haveOut = existsSync(out) && statSync(out).size > 0;
  if (haveOut && !FORCE) return { ...s, result: 'skip-exists', bytes: statSync(out).size };
  if (DRY) return { ...s, result: 'would-generate', prompt_chars: prompt.length };
  try {
    const resp = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: MODEL, prompt, size: s.size || '1024x1536', n: 1 }),
    });
    if (!resp.ok) return { ...s, result: 'api-error', status: resp.status, detail: (await resp.text()).slice(0, 300) };
    const json = await resp.json();
    const b64 = json?.data?.[0]?.b64_json;
    if (!b64) return { ...s, result: 'no-image-data' };
    writeFileSync(out, Buffer.from(b64, 'base64'));
    return { ...s, result: 'generated', bytes: statSync(out).size };
  } catch (e) {
    return { ...s, result: 'exception', detail: String(e).slice(0, 200) };
  }
}

const results = [];
for (const s of specs) {        // sequential — respect image API rate limits
  const r = await genOne(s);
  results.push(r);
  const tag = { 'would-generate': '○', 'generated': '✓', 'skip-exists': '=', 'brief-missing': '✗', 'api-error': '✗', 'no-image-data': '✗', 'exception': '✗' }[r.result] || '?';
  console.log(`  ${tag} ${r.poster_id.padEnd(46)} ${r.result}${r.prompt_chars ? ` (${r.prompt_chars} char prompt)` : ''}${r.detail ? ' — ' + r.detail : ''}`);
}

const by = (k) => results.filter((r) => r.result === k).length;
console.log(`\n  summary   : would-generate ${by('would-generate')} · generated ${by('generated')} · skip-exists ${by('skip-exists')} · errors ${results.length - by('would-generate') - by('generated') - by('skip-exists')}`);
if (DRY) {
  console.log('  next      : bin/akalynth-codex-grok.sh generate   # grok-cli image_gen (no OPENAI_API_KEY)');
  console.log('           or export OPENAI_API_KEY and re-run this script for OpenAI Images API.');
}
// non-zero only on real generation errors (not dry-run)
const hardErrors = results.filter((r) => ['api-error', 'no-image-data', 'exception', 'brief-missing'].includes(r.result)).length;
process.exit(!DRY && hardErrors ? 1 : 0);
