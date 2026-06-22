// PRIVATE — full Codex graph for the operator console. Generated; do not deploy.
window.CODEX_FULL = [
  {
    "schema_version": "codex-entry/v1",
    "id": "forgehold",
    "type": "place",
    "title": "Forgehold Citadel",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-05T23:41:31Z",
    "updated": "2026-06-22T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Volcanic citadel of the Flamebound; second playable slice (High City -> Ember Road -> Forgehold).",
    "lineage": {
      "origin": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
      "accepted": true,
      "accepted_at": "2026-06-05T23:41:31Z",
      "last_accepted_change": "AKALYNTH_FORGEHOLD_NEXT_PACKET_V1 missing-shipment proof merged akalynth PR #342 @ 1173ea7"
    },
    "world": {
      "description": "An industrial fortress carved into a living volcano - heart of the Emberwilds, home of the Flamebound, Soulsteel production, and the Heartforge. Civic virtue: Strength.",
      "design_refs": [
        "codex/design/forgehold.md",
        "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/docs/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1.md",
        "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/docs/AKALYNTH_EMBER_ROAD_ROUTE_SPEC_V1.md",
        "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/docs/AKALYNTH_HEARTFORGE_TRIAL_CHAMBER_DUNGEON_V1.md",
        "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/docs/AKALYNTH_OATHLESS_FORGE_BOSS_V1.md",
        "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/docs/AKALYNTH_SOULSTEEL_STABILIZATION_V1.md"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
        "registry": "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/registry/akalynthForgeholdRouteSliceRegistry.ts"
      }
    },
    "related": [
      {
        "rel": "connects_to",
        "target": "high-city",
        "note": "route origin: High City -> Ember Road -> Forgehold Outer Gate"
      },
      {
        "rel": "connects_to",
        "target": "ember-road",
        "note": "regional travel route"
      },
      {
        "rel": "located_in",
        "target": "emberwilds",
        "note": "volcanic region"
      },
      {
        "rel": "home_of",
        "target": "flamebound",
        "note": "faction"
      },
      {
        "rel": "produces",
        "target": "soulsteel",
        "note": "material + crafting system"
      },
      {
        "rel": "contains",
        "target": "heartforge",
        "note": "the great forge"
      },
      {
        "rel": "contains",
        "target": "heartforge-trial-chamber",
        "note": "dungeon (unreleased — builder-only)"
      },
      {
        "rel": "guards",
        "target": "oathless-forge",
        "note": "boss (unreleased — builder-only)"
      }
    ],
    "assets": [
      {
        "kind": "banner",
        "path": "repos/akalynth-site/assets/akalynth/visuals/banners/03-forgehold.banner-1600x700.webp"
      },
      {
        "kind": "card",
        "path": "repos/akalynth-site/assets/akalynth/visuals/cards/03-forgehold.card-800x1000.webp"
      },
      {
        "kind": "wallpaper",
        "path": "repos/akalynth-site/assets/akalynth/visuals/wallpapers/03-forgehold.wallpaper-1080x1920.webp"
      },
      {
        "kind": "og",
        "path": "repos/akalynth-site/assets/akalynth/visuals/og/03-forgehold.og-1200x630.webp"
      },
      {
        "kind": "thumb",
        "path": "repos/akalynth-site/assets/akalynth/visuals/thumbs/03-forgehold.thumb-480x720.webp"
      },
      {
        "kind": "hero",
        "path": "repos/akalynth-site/assets/akalynth/visuals/hero/03-forgehold.hero-cover-1920x1080.webp"
      },
      {
        "kind": "icon",
        "path": "repos/akalynth-site/assets/akalynth/visuals/icons/03-forgehold.icon-candidate-1024.webp"
      }
    ],
    "packets": [
      {
        "kind": "website_update",
        "ref": "codex/design/forgehold.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "prototype_data",
        "ref": "codex/prompts/CLAUDE_CODE_AKALYNTH_FORGEHOLD_ROUTE_PROTOTYPE_DATA.prompt.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "asset",
        "ref": "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/prompts/AKALYNTH_FORGEHOLD_ROUTE_SLICE_POSTER_V1.prompt.md",
        "status": "accepted",
        "note": "reused existing akalynth-site webp assets"
      },
      {
        "kind": "mechanic",
        "ref": "codex/design/forgehold-missing-shipment-v1.md",
        "status": "accepted",
        "assignee": "codex-agent"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/MANIFEST.md",
        "sha256": "4d9eed25b50dba215da5061a72ddd5aec778ae917d588202289adebe6fd3c823"
      },
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/MANIFEST.csv",
        "sha256": "760039525c074727c89532572ef7fe41c9478f9f4f3f9f87ec3578cddd28ab52"
      },
      {
        "kind": "checksum",
        "ref": "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/CHECKSUMS_SHA256.txt"
      },
      {
        "kind": "receipt",
        "ref": "repos/akalynth/docs/engineering-loop/AKALYNTH_ENGINEERING_LOOP_FORGEHOLD_MISSING_SHIPMENT_V1/receipt.json"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Forgehold Citadel",
      "category": "Cities",
      "summary": "Heart of the Emberwilds - an industrial fortress carved into a living volcano.",
      "body": "Forgehold Citadel is carved into a living volcano at the heart of the Emberwilds. Home of the Flamebound, it is where Soulsteel is forged and the Heartforge burns. Its civic virtue is Strength.",
      "assets": [
        "assets/akalynth/visuals/cards/03-forgehold.card-800x1000.webp"
      ],
      "related": [
        "high-city",
        "ember-road",
        "emberwilds",
        "flamebound",
        "soulsteel",
        "heartforge"
      ],
      "source_ref": "forgehold"
    },
    "tags": [
      "city",
      "emberwilds",
      "flamebound",
      "route-slice",
      "strength"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "campaign-act-i",
    "type": "quest",
    "title": "Act I — The Four Proofs",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-06T03:30:00Z",
    "updated": "2026-06-20T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "Act I campaign spine — The Four Proofs — binding the four playable slices into one coherent act (Archive/Material/Dream/Field proofs).",
    "lineage": {
      "origin": "AKALYNTH_CAMPAIGN_ACT_I_V1",
      "accepted": true,
      "accepted_at": "2026-06-06T03:47:00Z",
      "last_accepted_change": "AKALYNTH_CAMPAIGN_ACT_I_V1 (campaign spine, origin paths, chapter flow, major choices, final convergence, release gates)"
    },
    "world": {
      "description": "The Act I campaign spine. Does not add a new playable slice; it connects the four existing slices into one Act via The Four Proofs: High City / First Archive (Archive Proof — Truth), Forgehold Route / Ember Road (Material Proof — Power), Moonspire / Dream Gate (Dream Proof — Possibility), Cinderwatch / Ashline Frontier (Field Proof — Survival).",
      "design_refs": [
        "codex/design/campaign-act-i.md",
        "repos/akalynth/drop/AKALYNTH_CAMPAIGN_ACT_I_V1/docs/AKALYNTH_CAMPAIGN_ACT_I_V1.md",
        "repos/akalynth/drop/AKALYNTH_CAMPAIGN_ACT_I_V1/docs/AKALYNTH_THE_FOUR_PROOFS_CAMPAIGN_SPINE_V1.md",
        "repos/akalynth/drop/AKALYNTH_CAMPAIGN_ACT_I_V1/docs/AKALYNTH_ACT_I_CHAPTER_FLOW_V1.md",
        "repos/akalynth/drop/AKALYNTH_CAMPAIGN_ACT_I_V1/docs/AKALYNTH_ACT_I_MAJOR_CHOICES_V1.md",
        "repos/akalynth/drop/AKALYNTH_CAMPAIGN_ACT_I_V1/docs/AKALYNTH_ACT_I_RELEASE_GATES_V1.md"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_CAMPAIGN_ACT_I_V1",
        "registry": "repos/akalynth/drop/AKALYNTH_CAMPAIGN_ACT_I_V1/registry/akalynthCampaignActIRegistry.ts"
      }
    },
    "related": [
      {
        "rel": "references",
        "target": "high-city",
        "note": "Archive Proof (Truth)"
      },
      {
        "rel": "references",
        "target": "forgehold",
        "note": "Material Proof (Power)"
      },
      {
        "rel": "references",
        "target": "moonspire",
        "note": "Dream Proof (Possibility)"
      },
      {
        "rel": "references",
        "target": "cindervale",
        "note": "Field Proof (Survival)"
      }
    ],
    "packets": [
      {
        "kind": "website_update",
        "ref": "codex/design/campaign-act-i.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "prototype_data",
        "ref": "codex/prompts/CLAUDE_CODE_AKALYNTH_CAMPAIGN_ACT_I_PROTOTYPE_DATA.prompt.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "asset",
        "ref": "repos/akalynth/drop/AKALYNTH_CAMPAIGN_ACT_I_V1/prompts/AKALYNTH_CAMPAIGN_ACT_I_POSTER_V1.prompt.md",
        "status": "accepted",
        "note": "reused existing akalynth-site webp assets"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_CAMPAIGN_ACT_I_V1/MANIFEST.md",
        "sha256": "4e8a3ea95b516b26eaf97952baafd873c4d2a3c3b97920e18c44c212d1b38c19"
      },
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_CAMPAIGN_ACT_I_V1/MANIFEST.csv",
        "sha256": "6e9b23b2b91dac234fcf1d9b6cc1bd0843b47ef7199a50b24c2c42234a67d9d0"
      },
      {
        "kind": "checksum",
        "ref": "repos/akalynth/drop/AKALYNTH_CAMPAIGN_ACT_I_V1/CHECKSUMS_SHA256.txt"
      }
    ],
    "public_projection": null,
    "tags": [
      "campaign",
      "act-i",
      "four-proofs",
      "spine"
    ],
    "assets": [
      {
        "kind": "banner",
        "path": "repos/akalynth-site/assets/akalynth/visuals/banners/06-trinity-convergence.banner-1600x700.webp"
      },
      {
        "kind": "card",
        "path": "repos/akalynth-site/assets/akalynth/visuals/cards/06-trinity-convergence.card-800x1000.webp"
      },
      {
        "kind": "hero",
        "path": "repos/akalynth-site/assets/akalynth/visuals/hero/06-trinity-convergence.hero-cover-1920x1080.webp"
      },
      {
        "kind": "icon",
        "path": "repos/akalynth-site/assets/akalynth/visuals/icons/06-trinity-convergence.icon-candidate-1024.webp"
      },
      {
        "kind": "og",
        "path": "repos/akalynth-site/assets/akalynth/visuals/og/06-trinity-convergence.og-1200x630.webp"
      },
      {
        "kind": "thumb",
        "path": "repos/akalynth-site/assets/akalynth/visuals/thumbs/06-trinity-convergence.thumb-480x720.webp"
      },
      {
        "kind": "wallpaper",
        "path": "repos/akalynth-site/assets/akalynth/visuals/wallpapers/06-trinity-convergence.wallpaper-1080x1920.webp"
      }
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "artifacts-codex",
    "type": "lore",
    "title": "Artifacts Codex",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Relics of Power.",
    "lineage": {
      "origin": "AKALYNTH_ARTIFACTS_CODEX_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_ARTIFACTS_CODEX_V1"
    },
    "world": {
      "description": "Relics of Power.",
      "design_refs": [
        "repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_ARTIFACTS_CODEX_V1.md"
      ]
    },
    "related": [
      {
        "rel": "references",
        "target": "heroes-codex"
      },
      {
        "rel": "references",
        "target": "chronicle-of-ages"
      }
    ],
    "assets": [
      {
        "kind": "plate",
        "path": "repos/akalynth-site/assets/codex/artifacts-codex.png"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Artifacts Codex",
      "category": "Codices",
      "summary": "Relics of Power.",
      "body": "Heroes change history, villains corrupt it, artifacts preserve it. Volume I gathers the eight Relics of Power, beginning with the First Codex — the oldest written record, said to update itself whenever the world changes.",
      "assets": [
        "assets/codex/artifacts-codex.png"
      ],
      "related": [
        "heroes-codex",
        "chronicle-of-ages"
      ],
      "source_ref": "artifacts-codex"
    },
    "tags": [
      "codex",
      "archive"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "asset-library",
    "type": "asset",
    "title": "Asset Library V1",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-05T21:39:00Z",
    "updated": "2026-06-13T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "Canonical visual + text asset library: world art (19 images across world-bible, city/region atlas, creature codex, collection posters) plus the 10 codex source markdown docs the rest of the Codex graph was seeded from.",
    "lineage": {
      "origin": "AKALYNTH_ASSET_LIBRARY_V1",
      "accepted": true,
      "accepted_at": "2026-06-05T21:39:00Z",
      "last_accepted_change": "AKALYNTH_ASSET_LIBRARY_V1 (world/city/creature art + Cities/Creatures/Heroes/Factions/Artifacts/Dungeon/Chronicle/Origins/Villains codex source markdown)"
    },
    "world": {
      "description": "The Asset Library bundle: the source-of-truth collection of Akalynth visual and text assets created during the build session. Its markdown docs (Cities Summary, Creatures Summary, Heroes/Factions/Artifacts/Dungeon Codices, Chronicle of Ages, Origins, Villains) are the lore source the Codex's place/creature/faction/codex objects were seeded from; its images are the world-bible plates, city/region atlas, creature codex art, and collection posters.",
      "design_refs": [
        "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_ASSET_LIBRARY_INDEX.md",
        "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_CITIES_SUMMARY_V1.md",
        "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_CREATURES_SUMMARY_V1.md",
        "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_HEROES_CODEX_V1.md",
        "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_FACTIONS_CODEX_V1.md",
        "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_ARTIFACTS_CODEX_V1.md",
        "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_DUNGEON_CODEX_V1.md",
        "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_CHRONICLE_OF_AGES_V1.md",
        "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_ORIGINS_CODEX_V1.md",
        "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_VILLAINS_CODEX_V1.md"
      ],
      "implementation": {
        "stage": "shipped",
        "slice": "AKALYNTH_ASSET_LIBRARY_V1"
      }
    },
    "related": [
      {
        "rel": "references",
        "target": "heroes-codex",
        "note": "seeded from AKALYNTH_HEROES_CODEX_V1.md"
      },
      {
        "rel": "references",
        "target": "factions-codex",
        "note": "seeded from AKALYNTH_FACTIONS_CODEX_V1.md"
      },
      {
        "rel": "references",
        "target": "artifacts-codex",
        "note": "seeded from AKALYNTH_ARTIFACTS_CODEX_V1.md"
      },
      {
        "rel": "references",
        "target": "dungeon-codex",
        "note": "seeded from AKALYNTH_DUNGEON_CODEX_V1.md"
      },
      {
        "rel": "references",
        "target": "chronicle-of-ages",
        "note": "seeded from AKALYNTH_CHRONICLE_OF_AGES_V1.md"
      },
      {
        "rel": "references",
        "target": "emberwilds-atlas",
        "note": "city/region atlas art"
      }
    ],
    "assets": [
      {
        "kind": "poster",
        "path": "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/images/04_collection_posters/AKALYNTH_HEROES_CODEX_POSTER_V1.png"
      },
      {
        "kind": "poster",
        "path": "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/images/04_collection_posters/AKALYNTH_FACTIONS_CODEX_POSTER_V1.png"
      },
      {
        "kind": "plate",
        "path": "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/images/02_city_region_atlas/EMBERWILDS_ATLAS_V1.png"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/manifests/MANIFEST.md",
        "sha256": "290b5282bccc794b6d67b3dc6da62b29ca32c3f96f5e4fabdfc9146183b9e900"
      },
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/manifests/MANIFEST.csv",
        "sha256": "45f87e44ec4c41bdfa919d9e660c0c4a4337869d33295fe3b6bdc8fa6383b778"
      },
      {
        "kind": "checksum",
        "ref": "repos/akalynth/drop/AKALYNTH_ASSET_LIBRARY_V1/manifests/SHA256SUMS.txt",
        "sha256": "aa7f48dc2db97acc8e98f276915d1797cc98004670fc575f004c0717b1e55681"
      }
    ],
    "public_projection": null,
    "tags": [
      "asset",
      "library",
      "art",
      "lore-source",
      "shipped"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "chill-zone-gather",
    "type": "mechanic",
    "title": "Chill-Zone Gather",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-20T00:00:00Z",
    "updated": "2026-06-20T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "MVP no-combat micro-loop: move, gather a server-placed node, deliver to a station for a non-tradeable acknowledgment, emitting one delivery.recorded receipt per cycle. Smallest honest Recover loop, verifiable with existing movement + receipt tooling before any new system is added.",
    "lineage": {
      "origin": "gameplay-loop-designer session — MVP loop proposal (no source drop)",
      "accepted": true,
      "accepted_at": "2026-06-20T00:00:00Z",
      "last_accepted_change": "design review + server-spec step-1 mechanic packet accepted by codex-build-delegation 2026-06-20"
    },
    "world": {
      "description": "A no-combat chill-zone onboarding loop. The client sends only move/gather/deliver intents; the server owns the gather clock, inventory, and reward grant. One delivery.recorded receipt per completed cycle, with gather provenance folded in. Deliberately excludes combat, party mechanics, and tradeable economy so the Systems Bible pillars stay untouched. Placeholder intent/snapshot/receipt shapes must be reconciled with real game-server contracts (movement, inventory, receipt schema, Tem heat, zone snapshot) before implementation.",
      "design_refs": [
        "codex/design/chill-zone-gather.md",
        "codex/design/chill-zone-gather-step1-server-spec.md"
      ],
      "implementation": {
        "stage": "concept"
      }
    },
    "related": [
      {
        "rel": "references",
        "target": "game-loop-bible",
        "note": "Pre-Hour-1 instance of the primary Recover → Return beat, stripped to its smallest honest form."
      },
      {
        "rel": "references",
        "target": "systems-bible",
        "note": "Non-economic, combat-free — touches none of the six System Pillars' balance surfaces."
      }
    ],
    "packets": [
      {
        "kind": "review",
        "ref": "codex/design/chill-zone-gather.md",
        "status": "accepted"
      },
      {
        "kind": "mechanic",
        "ref": "codex/design/chill-zone-gather-step1-server-spec.md",
        "status": "accepted"
      }
    ],
    "public_projection": null,
    "tags": [
      "gameplay-loop",
      "mvp",
      "onboarding",
      "no-combat",
      "server-authority",
      "receipts",
      "proposal"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "chronicle-of-ages",
    "type": "lore",
    "title": "Chronicle of Ages",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Events That Changed The World.",
    "lineage": {
      "origin": "AKALYNTH_CHRONICLE_OF_AGES_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_CHRONICLE_OF_AGES_V1"
    },
    "world": {
      "description": "Events That Changed The World.",
      "design_refs": [
        "repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_CHRONICLE_OF_AGES_V1.md"
      ]
    },
    "related": [
      {
        "rel": "references",
        "target": "high-city"
      },
      {
        "rel": "references",
        "target": "heroes-codex"
      }
    ],
    "assets": [
      {
        "kind": "plate",
        "path": "repos/akalynth-site/assets/codex/chronicle-of-ages.png"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Chronicle of Ages",
      "category": "Codices",
      "summary": "Events That Changed The World.",
      "body": "Cities rise, heroes die, kingdoms vanish; what remains are the moments that changed everything. Volume I opens with the First Binding — the dawn of remembered civilization.",
      "assets": [
        "assets/codex/chronicle-of-ages.png"
      ],
      "related": [
        "high-city",
        "heroes-codex"
      ],
      "source_ref": "chronicle-of-ages"
    },
    "tags": [
      "codex",
      "archive"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "cindervale",
    "type": "place",
    "title": "Cindervale",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-22T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Frontier of Ash — a harsh stronghold at the edge of the Emberwilds; home object of the Cinderwatch Frontier playable slice.",
    "lineage": {
      "origin": "AKALYNTH_CITIES_SUMMARY_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1 (playable slice: Ashwarden frontier gameplay, patrol contracts, creature tracking, caravan escort, Glassfang Matriarch boss)"
    },
    "world": {
      "description": "Frontier of Ash — a harsh stronghold at the edge of the Emberwilds. Civic domain: Survival. Anchors the Cinderwatch Frontier slice: patrol contracts, creature tracking, caravan/refugee escort, fortification, and the Glassfang Brood threat.",
      "design_refs": [
        "codex/design/cindervale.md",
        "repos/akalynth/drop/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1/docs/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1.md",
        "repos/akalynth/drop/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1/docs/AKALYNTH_ASHWARDEN_FRONTIER_GAMEPLAY_V1.md",
        "repos/akalynth/drop/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1/docs/AKALYNTH_CARAVAN_ESCORT_SYSTEM_V1.md",
        "repos/akalynth/drop/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1/docs/AKALYNTH_GLASSFANG_MATRIARCH_BOSS_V1.md",
        "repos/akalynth/drop/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1/docs/AKALYNTH_CINDERWATCH_FRONTIER_PRODUCTION_CHECKLIST_V1.md"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1",
        "registry": "repos/akalynth/drop/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1/registry/akalynthCinderwatchFrontierSliceRegistry.ts"
      }
    },
    "related": [
      {
        "rel": "connects_to",
        "target": "forgehold"
      },
      {
        "rel": "connects_to",
        "target": "high-city"
      }
    ],
    "assets": [
      {
        "kind": "card",
        "path": "repos/akalynth-site/assets/akalynth/visuals/cards/09-cinderwatch-frontier.card-800x1000.webp"
      },
      {
        "kind": "banner",
        "path": "repos/akalynth-site/assets/akalynth/visuals/banners/09-cinderwatch-frontier.banner-1600x700.webp"
      },
      {
        "kind": "og",
        "path": "repos/akalynth-site/assets/akalynth/visuals/og/09-cinderwatch-frontier.og-1200x630.webp"
      },
      {
        "kind": "thumb",
        "path": "repos/akalynth-site/assets/akalynth/visuals/thumbs/09-cinderwatch-frontier.thumb-480x720.webp"
      },
      {
        "kind": "wallpaper",
        "path": "repos/akalynth-site/assets/akalynth/visuals/wallpapers/09-cinderwatch-frontier.wallpaper-1080x1920.webp"
      },
      {
        "kind": "hero",
        "path": "repos/akalynth-site/assets/akalynth/visuals/hero/09-cinderwatch-frontier.hero-cover-1920x1080.webp"
      },
      {
        "kind": "icon",
        "path": "repos/akalynth-site/assets/akalynth/visuals/icons/09-cinderwatch-frontier.icon-candidate-1024.webp"
      }
    ],
    "packets": [
      {
        "kind": "website_update",
        "ref": "codex/design/cindervale.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "prototype_data",
        "ref": "codex/prompts/CLAUDE_CODE_AKALYNTH_CINDERWATCH_FRONTIER_PROTOTYPE_DATA.prompt.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "asset",
        "ref": "repos/akalynth/drop/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1/prompts/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_POSTER_V1.prompt.md",
        "status": "accepted",
        "note": "reused existing akalynth-site webp assets"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1/MANIFEST.md",
        "sha256": "7830221ccde1271051737a9ff5bf74307c2791e3a0f2e477bb95d71c2c1d856b"
      },
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1/MANIFEST.csv",
        "sha256": "2036f85f7a1af131dc87e94606e1c311b5582e7131884bff7512c7cde7bc2c8c"
      },
      {
        "kind": "checksum",
        "ref": "repos/akalynth/drop/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1/CHECKSUMS_SHA256.txt"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Cindervale",
      "category": "Cities",
      "summary": "Frontier of Ash — a harsh stronghold at the edge of the Emberwilds.",
      "body": "Cindervale protects trade routes and stands against volcanic threats. Known for the Watch Bastions, the Frontier Markets, the Ashwardens, the Expedition Guilds, and the Ember Gates.",
      "assets": [
        "assets/akalynth/visuals/cards/09-cinderwatch-frontier.card-800x1000.webp"
      ],
      "related": [
        "forgehold",
        "high-city"
      ],
      "source_ref": "cindervale"
    },
    "tags": [
      "city",
      "survival"
    ],
    "_source_kind": "source"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "dungeon-codex",
    "type": "lore",
    "title": "Dungeon Codex",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Places Where History Still Breathes.",
    "lineage": {
      "origin": "AKALYNTH_DUNGEON_CODEX_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_DUNGEON_CODEX_V1"
    },
    "world": {
      "description": "Places Where History Still Breathes.",
      "design_refs": [
        "repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_DUNGEON_CODEX_V1.md"
      ]
    },
    "related": [
      {
        "rel": "references",
        "target": "high-city"
      }
    ],
    "assets": [
      {
        "kind": "plate",
        "path": "repos/akalynth-site/assets/codex/dungeon-codex.png"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Dungeon Codex",
      "category": "Codices",
      "summary": "Places Where History Still Breathes.",
      "body": "A dungeon is a wound in history that has not yet closed. Volume I begins with the First Archive — the vault beneath High City that preserves the earliest laws, treaties, maps, and forbidden memory records.",
      "assets": [
        "assets/codex/dungeon-codex.png"
      ],
      "related": [
        "high-city"
      ],
      "source_ref": "dungeon-codex"
    },
    "tags": [
      "codex",
      "archive"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "emberwilds-atlas",
    "type": "lore",
    "title": "Emberwilds Atlas",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "The volcanic frontier, mapped.",
    "lineage": {
      "origin": "AKALYNTH world atlas",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH world atlas"
    },
    "world": {
      "description": "The volcanic frontier, mapped.",
      "design_refs": [
        "repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH world atlas.md"
      ]
    },
    "related": [
      {
        "rel": "references",
        "target": "forgehold"
      },
      {
        "rel": "references",
        "target": "cindervale"
      }
    ],
    "assets": [
      {
        "kind": "plate",
        "path": "repos/akalynth-site/assets/codex/emberwilds-atlas.png"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Emberwilds Atlas",
      "category": "Codices",
      "summary": "The volcanic frontier, mapped.",
      "body": "A regional atlas of the Emberwilds — the living-volcano frontier anchored by Forgehold Citadel and watched from the ash-edge by Cindervale.",
      "assets": [
        "assets/codex/emberwilds-atlas.png"
      ],
      "related": [
        "forgehold",
        "cindervale"
      ],
      "source_ref": "emberwilds-atlas"
    },
    "tags": [
      "codex",
      "archive"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "factions-codex",
    "type": "lore",
    "title": "Factions Codex",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Powers That Shape the World.",
    "lineage": {
      "origin": "AKALYNTH_FACTIONS_CODEX_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_FACTIONS_CODEX_V1"
    },
    "world": {
      "description": "Powers That Shape the World.",
      "design_refs": [
        "repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_FACTIONS_CODEX_V1.md"
      ]
    },
    "related": [
      {
        "rel": "references",
        "target": "high-city"
      }
    ],
    "assets": [
      {
        "kind": "plate",
        "path": "repos/akalynth-site/assets/codex/factions-codex.png"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Factions Codex",
      "category": "Codices",
      "summary": "Powers That Shape the World.",
      "body": "The institutions whose laws and beliefs shape Akalynth. Volume I opens with the Codexborn — keepers of order and guardians of recorded truth, founded by the First Archivist after the Great Accord.",
      "assets": [
        "assets/codex/factions-codex.png"
      ],
      "related": [
        "high-city"
      ],
      "source_ref": "factions-codex"
    },
    "tags": [
      "codex",
      "archive"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "forgehold-ashglass-evidence",
    "type": "mechanic",
    "title": "Forgehold Act II Ashglass Evidence",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-21T18:00:00Z",
    "updated": "2026-06-21T18:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "Act II Ember Road evidence ordering: milepost seal, caravan plate, ashglass shard — server-owned receipts before shipment contradiction investigation.",
    "lineage": {
      "origin": "AKALYNTH_FORGEHOLD_ASHGLASS_EVIDENCE_V1 packet — post Council DAO v1",
      "accepted": true,
      "last_accepted_change": "AKALYNTH_FORGEHOLD_ASHGLASS_EVIDENCE_V1 merged akalynth PR #336 @ 0890f36"
    },
    "world": {
      "description": "Forgehold route slice Act II. Three recoverable evidence objects on Ember Road; gates Act III missing-shipment investigation. Distinct from post-gate Heartforge Ashglass lab evidence.",
      "design_refs": [
        "codex/design/forgehold-ashglass-evidence-v1.md",
        "codex/design/forgehold.md",
        "codex/schema/forgehold-evidence-object.schema.json"
      ],
      "implementation": {
        "stage": "implemented",
        "slice": "AKALYNTH_FORGEHOLD_ASHGLASS_EVIDENCE_V1",
        "registry": "repos/akalynth/apps/server/src/skills/handlers.ts"
      }
    },
    "related": [
      {
        "rel": "part_of",
        "target": "forgehold",
        "note": "Act II of Forgehold route slice"
      },
      {
        "rel": "references",
        "target": "ember-road",
        "note": "Recovery corridor"
      }
    ],
    "packets": [
      {
        "kind": "mechanic",
        "ref": "codex/design/forgehold-ashglass-evidence-v1.md",
        "status": "closed",
        "assignee": "codex-agent"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "codex/schema/forgehold-evidence-object.schema.json"
      }
    ],
    "public_projection": null,
    "tags": [
      "forgehold",
      "evidence",
      "ashglass",
      "ember-road",
      "act-ii",
      "server-authority",
      "receipts",
      "packet"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "game-loop-bible",
    "type": "system",
    "title": "Game Loop Bible",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-05T20:28:13Z",
    "updated": "2026-06-20T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "The gameplay-loop layer: what the player does minute-to-minute, per session, and across hour 1 / 10 / 50 / 200 / year 3 — plus the systems matrix tying it together.",
    "lineage": {
      "origin": "AKALYNTH_GAME_LOOP_BIBLE_V1",
      "accepted": true,
      "accepted_at": "2026-06-05T20:28:13Z",
      "last_accepted_change": "AKALYNTH_GAME_LOOP_BIBLE_V1 (core loops, activity catalog, player time horizons, retention design, systems matrix)"
    },
    "world": {
      "description": "The first gameplay-loop layer for Akalynth. Defines what the player does minute-to-minute, in a session, and at hour 1, 10, 50, 200, and year 3; and how Origins, Professions, Factions, Dungeons, Artifacts, Cities, and World Events connect into core loops, an activity catalog, and a retention design.",
      "design_refs": [
        "codex/design/game-loop-bible.md",
        "repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/docs/AKALYNTH_GAME_LOOP_BIBLE_V1.md",
        "repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/docs/AKALYNTH_CORE_LOOPS_V1.md",
        "repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/docs/AKALYNTH_ACTIVITY_CATALOG_V1.md",
        "repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/docs/AKALYNTH_PLAYER_TIME_HORIZONS_V1.md",
        "repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/docs/AKALYNTH_RETENTION_DESIGN_V1.md",
        "repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/docs/AKALYNTH_SYSTEMS_MATRIX_V1.md"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_GAME_LOOP_BIBLE_V1",
        "registry": "repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/registry/akalynthGameLoopRegistry.ts"
      }
    },
    "related": [
      {
        "rel": "references",
        "target": "play-build-govern-surface"
      },
      {
        "rel": "references",
        "target": "systems-bible"
      },
      {
        "rel": "references",
        "target": "world-events-engine"
      }
    ],
    "packets": [
      {
        "kind": "website_update",
        "ref": "codex/design/game-loop-bible.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "asset",
        "ref": "repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/prompts/AKALYNTH_GAME_LOOP_BIBLE_POSTER_V1.prompt.md",
        "status": "blocked",
        "note": "no matching site asset; requires image generation (OPENAI_API_KEY not set)"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/MANIFEST.md",
        "sha256": "54ad85f424bcd068e8bff1b786fb0f17a0787aff4c53b0702d9aefdf521ce6bd"
      },
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/MANIFEST.csv",
        "sha256": "2277477ed5c331a1efd5cde2bf33f37008d1b66a464ab398b65a3e52816c15a0"
      },
      {
        "kind": "checksum",
        "ref": "repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/CHECKSUMS_SHA256.txt"
      }
    ],
    "public_projection": null,
    "tags": [
      "system",
      "game-loop",
      "retention",
      "bible"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "gameplay-lane",
    "type": "system",
    "title": "Gameplay Lane — Origins, Professions, Equipment, Map, Campaign, Raids",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-05T21:37:00Z",
    "updated": "2026-06-20T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "Player-facing gameplay lane: who you are (Origins), what you do (Professions), how you express your path (Equipment), where you travel (World Map V2), the Campaign Book, and Raid Bosses.",
    "lineage": {
      "origin": "AKALYNTH_GAMEPLAY_LANE_V1",
      "accepted": true,
      "accepted_at": "2026-06-05T21:37:00Z",
      "last_accepted_change": "AKALYNTH_GAMEPLAY_LANE_V1 (Origins, Professions, Equipment, World Map V2, Campaign Book, Raid Bosses, progression matrix)"
    },
    "world": {
      "description": "The next gameplay-facing lane. Answers the player-facing questions: Who am I when I enter Akalynth? What do I do inside this world? What gear expresses my path? Where do I travel? Defines Origins, Professions, Equipment, the World Map V2, the Campaign Book, and Raid Bosses with a player progression matrix.",
      "design_refs": [
        "codex/design/gameplay-lane.md",
        "repos/akalynth/drop/AKALYNTH_GAMEPLAY_LANE_V1/docs/AKALYNTH_PLAYER_PROGRESSION_MATRIX_V1.md",
        "repos/akalynth/drop/AKALYNTH_GAMEPLAY_LANE_V1/docs/AKALYNTH_ORIGINS_CODEX_V1.md",
        "repos/akalynth/drop/AKALYNTH_GAMEPLAY_LANE_V1/docs/AKALYNTH_PROFESSIONS_CODEX_V1.md",
        "repos/akalynth/drop/AKALYNTH_GAMEPLAY_LANE_V1/docs/AKALYNTH_EQUIPMENT_CODEX_V1.md",
        "repos/akalynth/drop/AKALYNTH_GAMEPLAY_LANE_V1/docs/AKALYNTH_WORLD_MAP_V2.md",
        "repos/akalynth/drop/AKALYNTH_GAMEPLAY_LANE_V1/docs/AKALYNTH_CAMPAIGN_BOOK_V1.md",
        "repos/akalynth/drop/AKALYNTH_GAMEPLAY_LANE_V1/docs/AKALYNTH_RAID_BOSSES_CODEX_V1.md"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_GAMEPLAY_LANE_V1"
      }
    },
    "related": [
      {
        "rel": "references",
        "target": "play-build-govern-surface"
      },
      {
        "rel": "references",
        "target": "game-loop-bible"
      },
      {
        "rel": "references",
        "target": "systems-bible"
      }
    ],
    "packets": [
      {
        "kind": "website_update",
        "ref": "codex/design/gameplay-lane.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "asset",
        "ref": "repos/akalynth/drop/AKALYNTH_GAMEPLAY_LANE_V1/prompts/image_briefs",
        "status": "blocked",
        "note": "no matching site asset; requires image generation (OPENAI_API_KEY not set)"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_GAMEPLAY_LANE_V1/MANIFEST.md",
        "sha256": "61ea01bb7b93decf404756728b990bb6488dcbb922d38ffea91a0236fa28a95d"
      },
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_GAMEPLAY_LANE_V1/MANIFEST.csv",
        "sha256": "5ab151a46921e3947590e5248a81f47d76b9315f23acec14f62ae5bf440e45d3"
      }
    ],
    "public_projection": null,
    "tags": [
      "system",
      "gameplay",
      "origins",
      "professions",
      "equipment",
      "map"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "heartforge-trial-chamber",
    "type": "place",
    "title": "Heartforge Trial Chamber",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "candidate",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "Heartforge Trial Chamber — builder-only (unreleased).",
    "lineage": {
      "origin": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1"
    },
    "world": {
      "description": "The trial dungeon beneath the Heartforge — Soulsteel-stabilization trials guarding the route's final tempering. Designed, not yet released.",
      "design_refs": [
        "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/docs/AKALYNTH_HEARTFORGE_TRIAL_CHAMBER_DUNGEON_V1.md"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1"
      }
    },
    "related": [
      {
        "rel": "references",
        "target": "forgehold"
      },
      {
        "rel": "references",
        "target": "heartforge"
      },
      {
        "rel": "references",
        "target": "oathless-forge"
      }
    ],
    "public_projection": null,
    "tags": [
      "unreleased",
      "forgehold-slice",
      "place"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "heroes-codex",
    "type": "lore",
    "title": "Heroes Codex",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "The First Legends.",
    "lineage": {
      "origin": "AKALYNTH_HEROES_CODEX_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_HEROES_CODEX_V1"
    },
    "world": {
      "description": "The First Legends.",
      "design_refs": [
        "repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_HEROES_CODEX_V1.md"
      ]
    },
    "related": [
      {
        "rel": "references",
        "target": "factions-codex"
      },
      {
        "rel": "references",
        "target": "chronicle-of-ages"
      }
    ],
    "assets": [
      {
        "kind": "plate",
        "path": "repos/akalynth-site/assets/codex/heroes-codex.png"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Heroes Codex",
      "category": "Codices",
      "summary": "The First Legends.",
      "body": "Civilizations are forged by those who dared leave their mark upon eternity. Volume I begins with the First Archivist — the One Who Refused Forgetting — whose recording of the Great Accord kept civilization from falling into ignorance.",
      "assets": [
        "assets/codex/heroes-codex.png"
      ],
      "related": [
        "factions-codex",
        "chronicle-of-ages"
      ],
      "source_ref": "heroes-codex"
    },
    "tags": [
      "codex",
      "archive"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "high-city",
    "type": "place",
    "title": "High City",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-23T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Crown of Convergence — capital of Akalynth and birthplace of the Great Accord; home object of the First Playable vertical slice.",
    "lineage": {
      "origin": "AKALYNTH_CITIES_SUMMARY_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_FIRST_PLAYABLE_SLICE_V1 (first 1-3h vertical slice: Origins, Factions, High City Outskirts, First Archive Lower Vault dungeon, Unindexed Truth boss, Witness Moth Bloom)"
    },
    "world": {
      "description": "Crown of Convergence — capital of Akalynth and birthplace of the Great Accord. Civic domain: Order. Anchors the First Playable Slice: origin openings, the First Archive Lower Vault dungeon, and the Unindexed Truth confrontation.",
      "design_refs": [
        "codex/design/high-city.md",
        "repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/docs/AKALYNTH_FIRST_PLAYABLE_SLICE_V1.md",
        "repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/docs/AKALYNTH_FIRST_ARCHIVE_LOWER_VAULT_DUNGEON_V1.md",
        "repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/docs/AKALYNTH_UNINDEXED_TRUTH_BOSS_V1.md",
        "repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/docs/AKALYNTH_ORIGIN_OPENINGS_V1.md",
        "repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/docs/AKALYNTH_FIRST_PLAYABLE_SLICE_PRODUCTION_CHECKLIST_V1.md"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_FIRST_PLAYABLE_SLICE_V1",
        "registry": "repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/registry/akalynthFirstPlayableSliceRegistry.ts"
      }
    },
    "related": [
      {
        "rel": "connects_to",
        "target": "forgehold"
      },
      {
        "rel": "connects_to",
        "target": "veridium-port"
      },
      {
        "rel": "connects_to",
        "target": "moonspire"
      },
      {
        "rel": "connects_to",
        "target": "cindervale"
      },
      {
        "rel": "references",
        "target": "play-build-govern-surface"
      }
    ],
    "assets": [
      {
        "kind": "card",
        "path": "repos/akalynth-site/assets/akalynth/visuals/cards/01-high-city-dawn.card-800x1000.webp"
      },
      {
        "kind": "banner",
        "path": "repos/akalynth-site/assets/akalynth/visuals/banners/01-high-city-dawn.banner-1600x700.webp"
      },
      {
        "kind": "hero",
        "path": "repos/akalynth-site/assets/akalynth/visuals/hero/01-high-city-dawn.hero-cover-1920x1080.webp"
      },
      {
        "kind": "og",
        "path": "repos/akalynth-site/assets/akalynth/visuals/og/01-high-city-dawn.og-1200x630.webp"
      },
      {
        "kind": "thumb",
        "path": "repos/akalynth-site/assets/akalynth/visuals/thumbs/01-high-city-dawn.thumb-480x720.webp"
      },
      {
        "kind": "wallpaper",
        "path": "repos/akalynth-site/assets/akalynth/visuals/wallpapers/01-high-city-dawn.wallpaper-1080x1920.webp"
      }
    ],
    "packets": [
      {
        "kind": "website_update",
        "ref": "codex/design/high-city.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "prototype_data",
        "ref": "codex/prompts/CLAUDE_CODE_AKALYNTH_PLAYABLE_SLICE_PROTOTYPE_DATA.prompt.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "asset",
        "ref": "repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/prompts/AKALYNTH_FIRST_PLAYABLE_SLICE_POSTER_V1.prompt.md",
        "status": "accepted",
        "note": "reused existing akalynth-site webp assets"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/MANIFEST.md",
        "sha256": "064c0c407fdf66c2e869b396e9f32c3f7c40df14b7f67cbd972ca75f9c58995e"
      },
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/MANIFEST.csv",
        "sha256": "13578133f242b9575e12d091d505262aff66267f8db9d4be50f602779502e342"
      },
      {
        "kind": "checksum",
        "ref": "repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/CHECKSUMS_SHA256.txt"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "High City",
      "category": "Cities",
      "summary": "Crown of Convergence — capital of Akalynth and birthplace of the Great Accord.",
      "body": "High City rises atop converging ley currents as the political, cultural, and intellectual heart of Akalynth. Known for the Trinity Nexus, the Great Archive Vaults, the Sky Spires, the Accord Chambers, and the Conclave Citadel.",
      "assets": [
        "assets/akalynth/visuals/cards/01-high-city-dawn.card-800x1000.webp"
      ],
      "related": [
        "forgehold",
        "veridium-port",
        "moonspire",
        "cindervale"
      ],
      "source_ref": "high-city"
    },
    "tags": [
      "city",
      "order"
    ],
    "_source_kind": "source"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "live-lane-presentation-screenshot-proof",
    "type": "mechanic",
    "title": "Live Lane Presentation Screenshot Proof",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-21T05:10:00Z",
    "updated": "2026-06-21T05:10:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "Beta and staging Playwright screenshot proof for connected Rookguard presentation after First30 transcript closure.",
    "lineage": {
      "origin": "AKALYNTH_LIVE_BETA_STAGING_SCREENSHOT_PROOF_V1 packet — post Rookguard First30",
      "accepted": true,
      "last_accepted_change": "AKALYNTH_LIVE_BETA_STAGING_SCREENSHOT_PROOF_V1 merged akalynth PR #338 @ 25cd609 and akalynth-codex PR #1 @ da17636"
    },
    "world": {
      "description": "Release-lane visual proof that beta and staging /play/ clients connect to Rookguard with presentation UI visible.",
      "design_refs": [
        "codex/design/live-lane-presentation-screenshot-proof-v1.md",
        "codex/schema/live-lane-screenshot-register.schema.json",
        "codex/design/rookguard-first30-presentation-v1.md"
      ],
      "implementation": {
        "stage": "implemented",
        "slice": "AKALYNTH_LIVE_BETA_STAGING_SCREENSHOT_PROOF_V1",
        "registry": "akalynth-ops/tools/screenshots/live-lane-presentation-screenshots.mjs"
      }
    },
    "related": [
      {
        "rel": "follows",
        "target": "rookguard-first30-presentation",
        "note": "Visual release-lane proof after presentation transcript"
      }
    ],
    "packets": [
      {
        "kind": "screenshot-proof",
        "ref": "codex/design/live-lane-presentation-screenshot-proof-v1.md",
        "status": "closed",
        "assignee": "codex-agent"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "codex/schema/live-lane-screenshot-register.schema.json"
      },
      {
        "kind": "sample",
        "ref": "codex/samples/live-lane-presentation-screenshot-register.sample.json"
      },
      {
        "kind": "ops-closure",
        "ref": "akalynth-ops/evidence/live-lane-presentation-screenshot-proof/closure.json"
      }
    ],
    "public_projection": null,
    "tags": [
      "rookguard",
      "beta",
      "staging",
      "screenshot",
      "presentation",
      "release-lane",
      "packet"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "moonspire",
    "type": "place",
    "title": "Moonspire",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-22T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "City of Dreams — spiritual capital built around a great Dream Sanctum; home object of the Moonspire Dream Gate playable slice.",
    "lineage": {
      "origin": "AKALYNTH_CITIES_SUMMARY_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1 (playable slice: Dream Gates, Dreamwalker gameplay, symbolic puzzles, Liminal Web dungeon, Unchosen Self boss)"
    },
    "world": {
      "description": "City of Dreams — spiritual capital built around a great Dream Sanctum. Civic domain: Wisdom. Anchors the Moonspire Dream Gate slice: dream-state traversal, symbolic puzzles, and the Unchosen Self confrontation.",
      "design_refs": [
        "codex/design/moonspire.md",
        "repos/akalynth/drop/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1/docs/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1.md",
        "repos/akalynth/drop/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1/docs/AKALYNTH_DREAM_GATE_SYSTEM_V1.md",
        "repos/akalynth/drop/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1/docs/AKALYNTH_DREAMWALKER_GAMEPLAY_V1.md",
        "repos/akalynth/drop/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1/docs/AKALYNTH_SYMBOLIC_PUZZLES_V1.md",
        "repos/akalynth/drop/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1/docs/AKALYNTH_UNCHOSEN_SELF_BOSS_V1.md",
        "repos/akalynth/drop/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1/docs/AKALYNTH_MOONSPIRE_DREAM_GATE_PRODUCTION_CHECKLIST_V1.md"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1",
        "registry": "repos/akalynth/drop/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1/registry/akalynthMoonspireDreamGateSliceRegistry.ts"
      }
    },
    "related": [
      {
        "rel": "connects_to",
        "target": "high-city"
      },
      {
        "rel": "connects_to",
        "target": "dreamweaver"
      }
    ],
    "packets": [
      {
        "kind": "website_update",
        "ref": "codex/design/moonspire.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "prototype_data",
        "ref": "codex/prompts/CLAUDE_CODE_AKALYNTH_MOONSPIRE_DREAM_GATE_PROTOTYPE_DATA.prompt.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "asset",
        "ref": "repos/akalynth/drop/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1/prompts/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_POSTER_V1.prompt.md",
        "status": "accepted",
        "note": "reused existing akalynth-site webp assets"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1/MANIFEST.md",
        "sha256": "18f45249176e86559f47bd94a80ad2a8d9018736bee18ac54d55c29d547c78c8"
      },
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1/MANIFEST.csv",
        "sha256": "a076dee4a874abfc2fe6e0c1eb59faa63f90fe203ab59886e78ddfc4b3e7a6ca"
      },
      {
        "kind": "checksum",
        "ref": "repos/akalynth/drop/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1/CHECKSUMS_SHA256.txt"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Moonspire",
      "category": "Cities",
      "summary": "City of Dreams — spiritual capital built around a great Dream Sanctum.",
      "body": "Pilgrims come to Moonspire seeking visions, memory exploration, and dream rites. Known for the Dream Sanctums, the Reflection Pools, the Memory Gardens, the Moon Archives, and the Silent Observatory.",
      "assets": [],
      "related": [
        "high-city",
        "dreamweaver"
      ],
      "source_ref": "moonspire"
    },
    "tags": [
      "city",
      "wisdom"
    ],
    "assets": [
      {
        "kind": "banner",
        "path": "repos/akalynth-site/assets/akalynth/visuals/banners/04-liminal-web.banner-1600x700.webp"
      },
      {
        "kind": "card",
        "path": "repos/akalynth-site/assets/akalynth/visuals/cards/04-liminal-web.card-800x1000.webp"
      },
      {
        "kind": "og",
        "path": "repos/akalynth-site/assets/akalynth/visuals/og/04-liminal-web.og-1200x630.webp"
      },
      {
        "kind": "thumb",
        "path": "repos/akalynth-site/assets/akalynth/visuals/thumbs/04-liminal-web.thumb-480x720.webp"
      },
      {
        "kind": "wallpaper",
        "path": "repos/akalynth-site/assets/akalynth/visuals/wallpapers/04-liminal-web.wallpaper-1080x1920.webp"
      },
      {
        "kind": "hero",
        "path": "repos/akalynth-site/assets/akalynth/visuals/hero/04-liminal-web.hero-cover-1920x1080.webp"
      },
      {
        "kind": "icon",
        "path": "repos/akalynth-site/assets/akalynth/visuals/icons/04-liminal-web.icon-candidate-1024.webp"
      }
    ],
    "_source_kind": "source"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "origins-codex",
    "type": "lore",
    "title": "Origins Codex",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-20T00:00:00Z",
    "updated": "2026-06-20T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Volume I — six origins, six starting cities, six first choices.",
    "lineage": {
      "origin": "AKALYNTH_GAMEPLAY_LANE_V1",
      "accepted": true,
      "accepted_at": "2026-06-20T00:00:00Z",
      "last_accepted_change": "Origins Codex published with gameplay-lane ship (Flamekeeper, Archivist, Wayfarer, and allied origin openings)"
    },
    "world": {
      "description": "Who you are when you enter Akalynth: six origin stories tied to start cities, factions, and recommended professions from the Gameplay Lane.",
      "design_refs": [
        "codex/design/gameplay-lane.md",
        "codex/entries/gameplay-lane.json"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_GAMEPLAY_LANE_V1"
      }
    },
    "related": [
      {
        "rel": "references",
        "target": "heroes-codex"
      },
      {
        "rel": "references",
        "target": "factions-codex"
      },
      {
        "rel": "references",
        "target": "high-city"
      },
      {
        "rel": "references",
        "target": "forgehold"
      }
    ],
    "assets": [],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Origins Codex",
      "category": "Civilization Codices",
      "summary": "Volume I — Before the First Binding.",
      "body": "Six origins define how you enter Akalynth: where you start, which faction notices you first, and which profession path feels natural. Rookguard vocations are the tutorial mark; Origins Codex is the long road — Flamekeeper at Forgehold, Archivist at High City, and the rest of the lane.",
      "assets": [],
      "related": [
        "heroes-codex",
        "factions-codex",
        "rookguard",
        "forgehold"
      ],
      "source_ref": "origins-codex"
    },
    "tags": [
      "codex",
      "origins",
      "gameplay-lane"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "play-build-govern-surface",
    "type": "system",
    "title": "Play, Build, Govern Surface",
    "authority": "Akalynth",
    "author": "codex@akalynth",
    "created": "2026-06-22T00:00:00Z",
    "updated": "2026-06-23T01:45:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "Product surface that turns Akalynth's MMO positioning into the ladder Play -> Modify -> Build -> Script -> Operate -> Govern.",
    "lineage": {
      "origin": "goal-objective:1c560753-7476-45d5-9b6e-02b0e10561f7",
      "accepted": true,
      "accepted_at": "2026-06-23T00:30:00Z",
      "last_accepted_change": "AKALYNTH_PLAY_BUILD_GOVERN_SURFACE_V1 engineering-loop closure PR-5 on akalynth main"
    },
    "world": {
      "description": "A builder/operator-facing product surface for Akalynth as a persistent top-down MMO with creator tools and proof-backed operations. It keeps Gameeky as a shape reference only, translating approachable progression into Play, Modify, Build, Script, Operate, and Govern surfaces for Rookguard, High City, creator tooling, local preview, operator review, and receipt-backed promotion.",
      "design_refs": [
        "codex/design/play-build-govern-surface.md",
        "codex/design/game-loop-bible.md",
        "codex/design/gameplay-lane.md",
        "codex/design/rookguard-first30-presentation-v1.md",
        "codex/design/high-city.md",
        "codex/schema/builder-draft-manifest.schema.json",
        "codex/schema/local-preview-session.schema.json",
        "codex/schema/promotion-review-packet.schema.json",
        "codex/schema/builder-promotion-permit.schema.json",
        "repos/akalynth/docs/PLAY_BUILD_GOVERN_SURFACE_RUNBOOK.md",
        "repos/akalynth/docs/engineering-loop/AKALYNTH_ENGINEERING_LOOP_PLAY_BUILD_GOVERN_SURFACE_V1/receipt.json"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_PLAY_BUILD_GOVERN_SURFACE_V1"
      }
    },
    "related": [
      {
        "rel": "references",
        "target": "game-loop-bible"
      },
      {
        "rel": "references",
        "target": "gameplay-lane"
      },
      {
        "rel": "references",
        "target": "systems-bible"
      },
      {
        "rel": "references",
        "target": "rookguard"
      },
      {
        "rel": "references",
        "target": "high-city"
      },
      {
        "rel": "references",
        "target": "council-dao"
      },
      {
        "rel": "references",
        "target": "asset-library"
      }
    ],
    "packets": [
      {
        "kind": "map",
        "ref": "codex/design/play-build-govern-surface.md#rookguard-builder-kit",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "quest",
        "ref": "codex/design/play-build-govern-surface.md#high-city-first-quest-kit",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "mechanic",
        "ref": "codex/design/play-build-govern-surface.md#local-preview-contract",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "review",
        "ref": "codex/design/play-build-govern-surface.md#promotion-review-contract",
        "status": "accepted",
        "assignee": "operator-review"
      },
      {
        "kind": "asset",
        "ref": "codex/design/play-build-govern-surface.md#asset-production-backlog",
        "status": "accepted",
        "assignee": "asset-pipeline"
      }
    ],
    "evidence": [
      {
        "kind": "verification",
        "ref": "codex/evidence/play-build-govern-surface/goal-objective.md"
      },
      {
        "kind": "verification",
        "ref": "akalynth-ops/scripts/verify-play-build-govern-surface-v1.sh"
      },
      {
        "kind": "receipt",
        "ref": "akalynth-ops/evidence/play-build-govern-surface-v1/closure.json"
      },
      {
        "kind": "manifest",
        "ref": "codex/schema/builder-draft-manifest.schema.json"
      },
      {
        "kind": "sample",
        "ref": "codex/samples/rookguard-builder-draft-manifest.sample.json"
      },
      {
        "kind": "sample",
        "ref": "codex/samples/rookguard-promotion-review-packet.sample.json"
      },
      {
        "kind": "verification",
        "ref": "akalynth-ops/bin/builder-promotion-gate.sh"
      },
      {
        "kind": "receipt",
        "ref": "repos/akalynth/docs/engineering-loop/AKALYNTH_ENGINEERING_LOOP_PLAY_BUILD_GOVERN_SURFACE_V1/receipt.json"
      },
      {
        "kind": "verification",
        "ref": "repos/akalynth/apps/server/tools/verify-play-build-govern-surface-v1.ts"
      }
    ],
    "public_projection": {
      "published": false,
      "title": "Play, Build, Govern",
      "category": "Systems",
      "summary": "Akalynth as a persistent MMO world with creator tools and proof-backed operations.",
      "body": "Players explore the world. Builders create maps, quests, homes, NPCs, and events. Operators promote changes through explicit review, receipts, and replayable evidence.",
      "assets": [],
      "related": [
        "rookguard",
        "high-city",
        "game-loop-bible"
      ],
      "source_ref": "play-build-govern-surface"
    },
    "tags": [
      "positioning",
      "creator-tools",
      "gameplay-loop",
      "builder",
      "operator",
      "receipts",
      "governance"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "rookguard",
    "type": "place",
    "title": "Rookguard",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-20T00:00:00Z",
    "updated": "2026-06-22T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Threshold keep where every journey begins — the Rookguard Codex Path and gate to High City.",
    "lineage": {
      "origin": "AKALYNTH_ROOKGUARD_CITY_EXPANSION_V1",
      "accepted": true,
      "accepted_at": "2026-06-20T00:00:00Z",
      "last_accepted_change": "Rookguard Codex Path live on beta (move, chat, Tem, training slime, vocation, gate receipts)"
    },
    "world": {
      "description": "The threshold keep at the edge of High City. Newcomers prove movement, chat, Tem, combat training, and Heroes Codex vocation before the gate opens to Azura.",
      "design_refs": [
        "repos/akalynth/docs/ROOKGUARD_FIRST_30_MINUTES_V1.md",
        "repos/akalynth/docs/ROOKGUARD_CITY_EXPANSION_V1.md",
        "repos/akalynth/packages/shared/maps/rookguard.json"
      ],
      "implementation": {
        "stage": "live",
        "slice": "rookguard_city_codex_path_v1"
      }
    },
    "related": [
      {
        "rel": "connects_to",
        "target": "high-city"
      },
      {
        "rel": "references",
        "target": "heroes-codex"
      },
      {
        "rel": "references",
        "target": "play-build-govern-surface"
      }
    ],
    "assets": [
      {
        "kind": "banner",
        "path": "repos/akalynth-site/assets/akalynth/visuals/banners/02-rookguard-gate.banner-1600x700.webp"
      },
      {
        "kind": "card",
        "path": "repos/akalynth-site/assets/akalynth/visuals/cards/02-rookguard-gate.card-800x1000.webp"
      },
      {
        "kind": "wallpaper",
        "path": "repos/akalynth-site/assets/akalynth/visuals/wallpapers/02-rookguard-gate.wallpaper-1080x1920.webp"
      },
      {
        "kind": "og",
        "path": "repos/akalynth-site/assets/akalynth/visuals/og/02-rookguard-gate.og-1200x630.webp"
      },
      {
        "kind": "thumb",
        "path": "repos/akalynth-site/assets/akalynth/visuals/thumbs/02-rookguard-gate.thumb-480x720.webp"
      },
      {
        "kind": "hero",
        "path": "repos/akalynth-site/assets/akalynth/visuals/hero/02-rookguard-gate.hero-cover-1920x1080.webp"
      },
      {
        "kind": "icon",
        "path": "repos/akalynth-site/assets/akalynth/visuals/icons/02-rookguard-gate.icon-candidate-1024.webp"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Rookguard",
      "category": "World Foundation",
      "summary": "Threshold keep — where the Codex Path begins.",
      "body": "Rookguard is the bounded onboarding keep: move rune, chat signal, Tem challenge, training slime, Heroes Codex vocation, and the gate to High City. Every step is receipt-backed; vocation is identity proof, not power.",
      "assets": [],
      "related": [
        "high-city",
        "heroes-codex",
        "forgehold"
      ],
      "source_ref": "rookguard"
    },
    "tags": [
      "city",
      "onboarding",
      "codex-path"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "rookguard-first30-presentation",
    "type": "mechanic",
    "title": "Rookguard First30 Presentation",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-21T19:00:00Z",
    "updated": "2026-06-21T19:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "Presentation transcript linking sim 0-30 gameplan, timeline frames, and live Codex Path WebSocket proof.",
    "lineage": {
      "origin": "AKALYNTH_ROOKGUARD_FIRST30_PRESENTATION_V1 packet — post Forgehold Act II",
      "accepted": true,
      "last_accepted_change": "AKALYNTH_ROOKGUARD_FIRST30_PRESENTATION_V1 merged akalynth PR #337 @ 54a5cab"
    },
    "world": {
      "description": "Rookguard onboarding presentation proof. Six five-minute windows with lane split (live vs sim/debug). No launch claim.",
      "design_refs": [
        "codex/design/rookguard-first30-presentation-v1.md",
        "codex/schema/rookguard-presentation-transcript.schema.json",
        "repos/akalynth/docs/ROOKGUARD_FIRST_30_MINUTES_V1.md"
      ],
      "implementation": {
        "stage": "implemented",
        "slice": "AKALYNTH_ROOKGUARD_FIRST30_PRESENTATION_V1",
        "registry": "apps/server/src/simulation/simLifeSnapshot.ts"
      }
    },
    "related": [
      {
        "rel": "part_of",
        "target": "rookguard",
        "note": "Onboarding presentation layer"
      }
    ],
    "packets": [
      {
        "kind": "presentation",
        "ref": "codex/design/rookguard-first30-presentation-v1.md",
        "status": "closed",
        "assignee": "codex-agent"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "codex/schema/rookguard-presentation-transcript.schema.json"
      },
      {
        "kind": "sample",
        "ref": "codex/samples/rookguard-first30-presentation-transcript.sample.json"
      }
    ],
    "public_projection": null,
    "tags": [
      "rookguard",
      "onboarding",
      "presentation",
      "sim",
      "transcript",
      "packet"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "soulsteel",
    "type": "material",
    "title": "Soulsteel",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "The signature alloy of Forgehold.",
    "lineage": {
      "origin": "AKALYNTH_SOULSTEEL_STABILIZATION_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_SOULSTEEL_STABILIZATION_V1"
    },
    "world": {
      "description": "A material forged and stabilized at the Heartforge of Forgehold; the core of the Forgehold crafting systems."
    },
    "related": [
      {
        "rel": "references",
        "target": "forgehold"
      },
      {
        "rel": "references",
        "target": "flamebound"
      },
      {
        "rel": "references",
        "target": "heartforge"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Soulsteel",
      "category": "Materials",
      "summary": "The signature alloy of Forgehold.",
      "body": "A material forged and stabilized at the Heartforge of Forgehold; the core of the Forgehold crafting systems.",
      "assets": [],
      "related": [
        "forgehold",
        "flamebound",
        "heartforge"
      ],
      "source_ref": "soulsteel"
    },
    "tags": [
      "emberwilds",
      "material"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "systems-bible",
    "type": "system",
    "title": "Systems Bible",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-05T20:36:24Z",
    "updated": "2026-06-20T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "The systems layer — turns the Game Loop Bible into implementable mechanics: progression, combat, economy, crafting, reputation/authority, social organizations, death/failure, and world state.",
    "lineage": {
      "origin": "AKALYNTH_SYSTEMS_BIBLE_V1",
      "accepted": true,
      "accepted_at": "2026-06-05T20:36:24Z",
      "last_accepted_change": "AKALYNTH_SYSTEMS_BIBLE_V1 (combat, progression, economy/crafting, reputation/authority, social orgs, death/failure, world state)"
    },
    "world": {
      "description": "The systems layer for Akalynth. Turns the Game Loop Bible into implementable mechanics: progression, combat, economy and crafting, reputation and authority, social organizations, death and failure states, and world state and events, with a systems decision matrix.",
      "design_refs": [
        "codex/design/systems-bible.md",
        "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/docs/AKALYNTH_SYSTEMS_BIBLE_V1.md",
        "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/docs/AKALYNTH_COMBAT_SYSTEM_V1.md",
        "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/docs/AKALYNTH_PROGRESSION_SYSTEM_V1.md",
        "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/docs/AKALYNTH_ECONOMY_AND_CRAFTING_SYSTEM_V1.md",
        "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/docs/AKALYNTH_REPUTATION_AND_AUTHORITY_SYSTEM_V1.md",
        "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/docs/AKALYNTH_WORLD_STATE_AND_EVENTS_SYSTEM_V1.md",
        "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/docs/AKALYNTH_SYSTEMS_DECISION_MATRIX_V1.md"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_SYSTEMS_BIBLE_V1",
        "registry": "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/registry/akalynthSystemsRegistry.ts"
      }
    },
    "related": [
      {
        "rel": "references",
        "target": "game-loop-bible"
      },
      {
        "rel": "references",
        "target": "world-events-engine"
      }
    ],
    "packets": [
      {
        "kind": "website_update",
        "ref": "codex/design/systems-bible.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "asset",
        "ref": "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/prompts/AKALYNTH_SYSTEMS_BIBLE_POSTER_V1.prompt.md",
        "status": "blocked",
        "note": "no matching site asset; requires image generation (OPENAI_API_KEY not set)"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/MANIFEST.md",
        "sha256": "45bde5955b92df8342587f00df6f5d5831937d9f95f0a0aa9faf93190510d872"
      },
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/MANIFEST.csv",
        "sha256": "08520c2a9d36e722b19d40740fbbd3a7017b5a10745377dfb7c157eb5ec46650"
      },
      {
        "kind": "checksum",
        "ref": "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/CHECKSUMS_SHA256.txt"
      }
    ],
    "public_projection": null,
    "tags": [
      "system",
      "combat",
      "economy",
      "progression",
      "bible"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "chronoshell-turtle",
    "type": "creature",
    "title": "The Chronoshell Turtle",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Keeper of Ages · Shell of Millennia",
    "lineage": {
      "origin": "codex.html creature codex",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "codex.html creature codex"
    },
    "world": {
      "description": "Keeper of Ages · Shell of Millennia · Threat: Unknown."
    },
    "related": [],
    "assets": [
      {
        "kind": "plate",
        "path": "repos/akalynth-site/assets/codex/chronoshell-turtle.png"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "The Chronoshell Turtle",
      "category": "Creatures",
      "summary": "Keeper of Ages · Shell of Millennia · Threat: Unknown",
      "body": "An ancient turtle whose shell is said to hold millennia; time moves differently in its wake.",
      "assets": [
        "assets/codex/chronoshell-turtle.png"
      ],
      "related": [],
      "source_ref": "chronoshell-turtle"
    },
    "tags": [
      "creature",
      "threat-unknown"
    ],
    "_source_kind": "source"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "dreamweaver",
    "type": "creature",
    "title": "The Dreamweaver",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Architect of Dreams · Weaver of Possibilities",
    "lineage": {
      "origin": "codex.html creature codex",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "codex.html creature codex"
    },
    "world": {
      "description": "Architect of Dreams · Weaver of Possibilities · Threat: High (Indirect)."
    },
    "related": [
      {
        "rel": "references",
        "target": "moonspire"
      }
    ],
    "assets": [
      {
        "kind": "plate",
        "path": "repos/akalynth-site/assets/codex/dreamweaver.png"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "The Dreamweaver",
      "category": "Creatures",
      "summary": "Architect of Dreams · Weaver of Possibilities · Threat: High (Indirect)",
      "body": "An architect of dreams that weaves possibility itself; its threat is subtle and indirect.",
      "assets": [
        "assets/codex/dreamweaver.png"
      ],
      "related": [
        "moonspire"
      ],
      "source_ref": "dreamweaver"
    },
    "tags": [
      "creature",
      "threat-high-indirect-"
    ],
    "_source_kind": "source"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "echo-stalker",
    "type": "creature",
    "title": "The Echo Stalker",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Shadow Hunter of Forgotten Sounds",
    "lineage": {
      "origin": "codex.html creature codex",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "codex.html creature codex"
    },
    "world": {
      "description": "Shadow Hunter of Forgotten Sounds · Threat: Extreme."
    },
    "related": [],
    "assets": [
      {
        "kind": "plate",
        "path": "repos/akalynth-site/assets/codex/echo-stalker.png"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "The Echo Stalker",
      "category": "Creatures",
      "summary": "Shadow Hunter of Forgotten Sounds · Threat: Extreme",
      "body": "A shadow that hunts by forgotten sounds; it stalks the spaces between what was heard and what was meant.",
      "assets": [
        "assets/codex/echo-stalker.png"
      ],
      "related": [],
      "source_ref": "echo-stalker"
    },
    "tags": [
      "creature",
      "threat-extreme"
    ],
    "_source_kind": "source"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "ember-road",
    "type": "route",
    "title": "The Ember Road",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "High City to the Forgehold Outer Gate.",
    "lineage": {
      "origin": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1"
    },
    "world": {
      "description": "The first route expansion of Akalynth: regional travel from High City through the Emberwilds to the Forgehold Outer Gate."
    },
    "related": [
      {
        "rel": "references",
        "target": "high-city"
      },
      {
        "rel": "references",
        "target": "forgehold"
      },
      {
        "rel": "references",
        "target": "emberwilds"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "The Ember Road",
      "category": "Places",
      "summary": "High City to the Forgehold Outer Gate.",
      "body": "The first route expansion of Akalynth: regional travel from High City through the Emberwilds to the Forgehold Outer Gate.",
      "assets": [],
      "related": [
        "high-city",
        "forgehold",
        "emberwilds"
      ],
      "source_ref": "ember-road"
    },
    "tags": [
      "emberwilds",
      "route"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "emberwilds",
    "type": "region",
    "title": "The Emberwilds",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "The living-volcano frontier.",
    "lineage": {
      "origin": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1"
    },
    "world": {
      "description": "A volcanic frontier region anchored by Forgehold Citadel and watched from the ash-edge by Cindervale. Crossed by the Ember Road."
    },
    "related": [
      {
        "rel": "references",
        "target": "forgehold"
      },
      {
        "rel": "references",
        "target": "cindervale"
      },
      {
        "rel": "references",
        "target": "ember-road"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "The Emberwilds",
      "category": "Places",
      "summary": "The living-volcano frontier.",
      "body": "A volcanic frontier region anchored by Forgehold Citadel and watched from the ash-edge by Cindervale. Crossed by the Ember Road.",
      "assets": [],
      "related": [
        "forgehold",
        "cindervale",
        "ember-road"
      ],
      "source_ref": "emberwilds"
    },
    "tags": [
      "emberwilds",
      "region"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "flamebound",
    "type": "faction",
    "title": "The Flamebound",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Forge-sworn of the Emberwilds.",
    "lineage": {
      "origin": "AKALYNTH_FACTIONS_CODEX_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_FACTIONS_CODEX_V1"
    },
    "world": {
      "description": "The faction of Forgehold — forge-sworn keepers of Soulsteel and the Heartforge. Their domain is Strength; their origin role is the Flamekeeper."
    },
    "related": [
      {
        "rel": "references",
        "target": "forgehold"
      },
      {
        "rel": "references",
        "target": "soulsteel"
      },
      {
        "rel": "references",
        "target": "heartforge"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "The Flamebound",
      "category": "Factions",
      "summary": "Forge-sworn of the Emberwilds.",
      "body": "The faction of Forgehold — forge-sworn keepers of Soulsteel and the Heartforge. Their domain is Strength; their origin role is the Flamekeeper.",
      "assets": [],
      "related": [
        "forgehold",
        "soulsteel",
        "heartforge"
      ],
      "source_ref": "flamebound"
    },
    "tags": [
      "emberwilds",
      "faction"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "heartforge",
    "type": "place",
    "title": "The Heartforge",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "The great forge at the heart of Forgehold.",
    "lineage": {
      "origin": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1"
    },
    "world": {
      "description": "The Heartforge burns at the centre of Forgehold Citadel — where Soulsteel is made. (Its Trial Chamber is a separate, unreleased dungeon.)"
    },
    "related": [
      {
        "rel": "references",
        "target": "forgehold"
      },
      {
        "rel": "references",
        "target": "soulsteel"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "The Heartforge",
      "category": "Places",
      "summary": "The great forge at the heart of Forgehold.",
      "body": "The Heartforge burns at the centre of Forgehold Citadel — where Soulsteel is made. (Its Trial Chamber is a separate, unreleased dungeon.)",
      "assets": [],
      "related": [
        "forgehold",
        "soulsteel"
      ],
      "source_ref": "heartforge"
    },
    "tags": [
      "emberwilds",
      "place"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "memory-serpent",
    "type": "creature",
    "title": "The Memory Serpent",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Guardian of Forgotten Truths · Warden of the Deep Mind",
    "lineage": {
      "origin": "codex.html creature codex",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "codex.html creature codex"
    },
    "world": {
      "description": "Guardian of Forgotten Truths · Warden of the Deep Mind · Threat: Extreme."
    },
    "related": [],
    "assets": [
      {
        "kind": "plate",
        "path": "repos/akalynth-site/assets/codex/memory-serpent.png"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "The Memory Serpent",
      "category": "Creatures",
      "summary": "Guardian of Forgotten Truths · Warden of the Deep Mind · Threat: Extreme",
      "body": "A serpent that guards forgotten truths in the deep mind — warden of what the world tried to forget.",
      "assets": [
        "assets/codex/memory-serpent.png"
      ],
      "related": [],
      "source_ref": "memory-serpent"
    },
    "tags": [
      "creature",
      "threat-extreme"
    ],
    "_source_kind": "source"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "oathless-forge",
    "type": "boss",
    "title": "The Oathless Forge",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "draft",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "The Oathless Forge — builder-only (unreleased).",
    "lineage": {
      "origin": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1"
    },
    "world": {
      "description": "The boss encounter at the heart of the Heartforge Trial Chamber. Mechanics designed; unreleased.",
      "design_refs": [
        "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/docs/AKALYNTH_OATHLESS_FORGE_BOSS_V1.md"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1"
      }
    },
    "related": [
      {
        "rel": "references",
        "target": "heartforge-trial-chamber"
      },
      {
        "rel": "references",
        "target": "forgehold"
      }
    ],
    "public_projection": null,
    "tags": [
      "unreleased",
      "forgehold-slice",
      "boss"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "void-whale",
    "type": "creature",
    "title": "The Void Whale",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Skybound Leviathan · Herald of the Gap",
    "lineage": {
      "origin": "codex.html creature codex",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "codex.html creature codex"
    },
    "world": {
      "description": "Skybound Leviathan · Herald of the Gap · Threat: Catastrophic."
    },
    "related": [],
    "assets": [
      {
        "kind": "plate",
        "path": "repos/akalynth-site/assets/codex/void-whale.png"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "The Void Whale",
      "category": "Creatures",
      "summary": "Skybound Leviathan · Herald of the Gap · Threat: Catastrophic",
      "body": "Not a creature of the stars but of absence — a vast leviathan that drifts where the world thins.",
      "assets": [
        "assets/codex/void-whale.png"
      ],
      "related": [],
      "source_ref": "void-whale"
    },
    "tags": [
      "creature",
      "threat-catastrophic"
    ],
    "_source_kind": "source"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "witness-moth",
    "type": "creature",
    "title": "The Witness Moth",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Keeper of Seen Truths · Recorder of All That Is",
    "lineage": {
      "origin": "codex.html creature codex",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "codex.html creature codex"
    },
    "world": {
      "description": "Keeper of Seen Truths · Recorder of All That Is · Threat: High."
    },
    "related": [
      {
        "rel": "references",
        "target": "high-city"
      }
    ],
    "assets": [
      {
        "kind": "plate",
        "path": "repos/akalynth-site/assets/codex/witness-moth.png"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "The Witness Moth",
      "category": "Creatures",
      "summary": "Keeper of Seen Truths · Recorder of All That Is · Threat: High",
      "body": "A luminous moth said to record everything it witnesses — memory, evidence, and omen made flesh.",
      "assets": [
        "assets/codex/witness-moth.png"
      ],
      "related": [
        "high-city"
      ],
      "source_ref": "witness-moth"
    },
    "tags": [
      "creature",
      "threat-high"
    ],
    "_source_kind": "source"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "veridium-port",
    "type": "place",
    "title": "Veridium Port",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-12T00:00:00Z",
    "updated": "2026-06-12T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": true
    },
    "summary": "Gateway of the Western Sea — the largest harbor in Akalynth.",
    "lineage": {
      "origin": "AKALYNTH_CITIES_SUMMARY_V1",
      "accepted": true,
      "accepted_at": "2026-06-12T00:00:00Z",
      "last_accepted_change": "AKALYNTH_CITIES_SUMMARY_V1"
    },
    "world": {
      "description": "Gateway of the Western Sea — the largest harbor in Akalynth. Civic domain: Prosperity."
    },
    "related": [
      {
        "rel": "connects_to",
        "target": "high-city"
      }
    ],
    "public_projection": {
      "published": true,
      "reviewed_by": "guardian@vaultmesh.org",
      "title": "Veridium Port",
      "category": "Cities",
      "summary": "Gateway of the Western Sea — the largest harbor in Akalynth.",
      "body": "Veridium Port connects the great civilizations through trade, exploration, and information. Known for the Grand Harbor, the Merchant Guilds, the Sea Archives, the Explorer Houses, and the Crystal Lighthouse.",
      "assets": [],
      "related": [
        "high-city"
      ],
      "source_ref": "veridium-port"
    },
    "tags": [
      "city",
      "prosperity"
    ],
    "_source_kind": "source"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "council-dao",
    "type": "system",
    "title": "Witness Council DAO (local ops)",
    "authority": "Akalynth ops / VaultMesh",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-21T12:00:00Z",
    "updated": "2026-06-21T23:45:00Z",
    "status": "accepted",
    "visibility": {
      "builder": false,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "Local ops governance shell: proposals, vote receipts, member reputation registry, treasury ledger, human-ack deploy permits, audit chaining, and execution permits that terminate at controlled lane workflows. v1 check; v2 treasury/reputation; deploy-permit v1 gates beta/staging deploy with explicit operator ack.",
    "lineage": {
      "origin": "AKALYNTH_COUNCIL_DAO_V1 packet seed — post chill-zone showcase closure",
      "accepted": true,
      "accepted_at": "2026-06-21T18:00:00Z",
      "last_accepted_change": "AKALYNTH_COUNCIL_PUBLISH_PLAY_PERMIT_V1 merged akalynth PR #341 @ 1c50c2c, codex PR #5 @ fe0f5e5"
    },
    "world": {
      "description": "Operator-layer Witness Council. Not the in-fiction Accord Council (see systems-bible). This object models how Akalynth ops proposals become receipt-backed permits before any lane action. v1 action classes are read-only lane check only.",
      "design_refs": [
        "codex/design/council-dao-v1.md",
        "codex/design/council-dao-v2.md",
        "codex/design/council-dao-deploy-permit-v1.md",
        "codex/schema/council-proposal.schema.json",
        "codex/schema/council-vote-receipt.schema.json",
        "codex/schema/council-execution-permit.schema.json",
        "codex/schema/council-member-reputation.schema.json",
        "codex/schema/council-treasury-ledger-entry.schema.json",
        "codex/schema/council-human-ack.schema.json"
      ],
      "implementation": {
        "stage": "shipped",
        "slice": "AKALYNTH_COUNCIL_PUBLISH_PLAY_PERMIT_V1",
        "registry": "akalynth-ops/council/"
      }
    },
    "related": [
      {
        "rel": "references",
        "target": "witness-moth",
        "note": "Lore-adjacent witness/evidence motif; ops council is operator machinery, not the creature."
      },
      {
        "rel": "references",
        "target": "systems-bible",
        "note": "In-fiction Accord Council and governance pillars are separate from this ops shell."
      }
    ],
    "packets": [
      {
        "kind": "review",
        "ref": "codex/design/council-dao-v1.md",
        "status": "accepted",
        "assignee": "codex-agent"
      },
      {
        "kind": "review",
        "ref": "codex/design/council-dao-v2.md",
        "status": "accepted",
        "assignee": "codex-agent"
      },
      {
        "kind": "review",
        "ref": "codex/design/council-dao-deploy-permit-v1.md",
        "status": "accepted",
        "assignee": "codex-agent"
      },
      {
        "kind": "review",
        "ref": "codex/design/council-publish-play-permit-v1.md",
        "status": "accepted",
        "assignee": "codex-agent"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "codex/schema/council-proposal.schema.json"
      },
      {
        "kind": "manifest",
        "ref": "codex/schema/council-vote-receipt.schema.json"
      },
      {
        "kind": "manifest",
        "ref": "codex/schema/council-execution-permit.schema.json"
      },
      {
        "kind": "receipt",
        "ref": "repos/akalynth/docs/engineering-loop/AKALYNTH_ENGINEERING_LOOP_COUNCIL_DAO_V1/receipt.json"
      },
      {
        "kind": "verification",
        "ref": "akalynth-ops/scripts/verify-council-dao-v1.sh"
      },
      {
        "kind": "manifest",
        "ref": "codex/schema/council-member-reputation.schema.json"
      },
      {
        "kind": "manifest",
        "ref": "codex/schema/council-treasury-ledger-entry.schema.json"
      },
      {
        "kind": "verification",
        "ref": "akalynth-ops/scripts/verify-council-dao-v2.sh"
      },
      {
        "kind": "receipt",
        "ref": "repos/akalynth/docs/engineering-loop/AKALYNTH_ENGINEERING_LOOP_COUNCIL_DAO_V2/receipt.json"
      },
      {
        "kind": "manifest",
        "ref": "codex/schema/council-human-ack.schema.json"
      },
      {
        "kind": "verification",
        "ref": "akalynth-ops/scripts/verify-council-dao-deploy-permit-v1.sh"
      },
      {
        "kind": "receipt",
        "ref": "repos/akalynth/docs/engineering-loop/AKALYNTH_ENGINEERING_LOOP_COUNCIL_DAO_DEPLOY_PERMIT_V1/receipt.json"
      },
      {
        "kind": "verification",
        "ref": "akalynth-ops/scripts/verify-council-publish-play-permit-v1.sh"
      },
      {
        "kind": "receipt",
        "ref": "repos/akalynth/docs/engineering-loop/AKALYNTH_ENGINEERING_LOOP_COUNCIL_PUBLISH_PLAY_PERMIT_V1/receipt.json"
      }
    ],
    "public_projection": null,
    "tags": [
      "ops",
      "governance",
      "council",
      "receipts",
      "execution-gate",
      "witness",
      "packet",
      "no-auto-mutation",
      "treasury",
      "reputation",
      "deploy-permit",
      "publish-play-permit",
      "human-ack"
    ],
    "_source_kind": "asserted"
  },
  {
    "schema_version": "codex-entry/v1",
    "id": "world-events-engine",
    "type": "system",
    "title": "World Events Engine",
    "authority": "Akalynth",
    "author": "guardian@vaultmesh.org",
    "created": "2026-06-05T21:06:47Z",
    "updated": "2026-06-22T00:00:00Z",
    "status": "accepted",
    "visibility": {
      "builder": true,
      "operator": true,
      "agent": true,
      "public": false
    },
    "summary": "The live-world event layer — turns the Chronicle, Game Loop, and Systems Bible into a repeatable event engine: lifecycle, types, canon cards, contribution scoring, rewards, and failure/aftermath.",
    "lineage": {
      "origin": "AKALYNTH_WORLD_EVENTS_ENGINE_V1",
      "accepted": true,
      "accepted_at": "2026-06-05T21:06:47Z",
      "last_accepted_change": "AKALYNTH_WORLD_EVENTS_ENGINE_V1 (event lifecycle, event types, canon event cards, contribution scoring, rewards, failure/aftermath, Witness Moth Bloom prototype)"
    },
    "world": {
      "description": "The live-world event layer for Akalynth. Turns the Chronicle, Game Loop, and Systems Bible into a repeatable event engine: event lifecycle, event types catalog, canon event cards, contribution scoring, reward structure, and failure/aftermath, with the Witness Moth Bloom as the prototype event.",
      "design_refs": [
        "codex/design/world-events-engine.md",
        "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/docs/AKALYNTH_WORLD_EVENTS_ENGINE_V1.md",
        "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/docs/AKALYNTH_EVENT_LIFECYCLE_V1.md",
        "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/docs/AKALYNTH_EVENT_TYPES_CATALOG_V1.md",
        "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/docs/AKALYNTH_CANON_EVENT_CARDS_V1.md",
        "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/docs/AKALYNTH_EVENT_CONTRIBUTION_SCORING_V1.md",
        "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/docs/AKALYNTH_EVENT_REWARD_STRUCTURE_V1.md",
        "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/docs/AKALYNTH_WORLD_EVENTS_INTEGRATION_MATRIX_V1.md"
      ],
      "implementation": {
        "stage": "spec",
        "slice": "AKALYNTH_WORLD_EVENTS_ENGINE_V1",
        "registry": "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/registry/akalynthWorldEventsRegistry.ts"
      }
    },
    "related": [
      {
        "rel": "references",
        "target": "game-loop-bible"
      },
      {
        "rel": "references",
        "target": "systems-bible"
      },
      {
        "rel": "references",
        "target": "witness-moth",
        "note": "prototype event: Witness Moth Bloom"
      },
      {
        "rel": "references",
        "target": "chronicle-of-ages"
      }
    ],
    "packets": [
      {
        "kind": "website_update",
        "ref": "codex/design/world-events-engine.md",
        "status": "accepted",
        "assignee": "codex-build-delegation"
      },
      {
        "kind": "asset",
        "ref": "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/prompts/AKALYNTH_WORLD_EVENTS_ENGINE_POSTER_V1.prompt.md",
        "status": "accepted",
        "note": "reused existing akalynth-site webp assets"
      }
    ],
    "evidence": [
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/MANIFEST.md",
        "sha256": "14e83c6f3df8498ebd6e17ea5ff251f29d3d2f5a721e63ef0293f2b043bc7f57"
      },
      {
        "kind": "manifest",
        "ref": "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/MANIFEST.csv",
        "sha256": "ead6b5846f49c6e5b1d47106ef41a2468440189994c090d11f772936ecf448fd"
      },
      {
        "kind": "checksum",
        "ref": "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/CHECKSUMS_SHA256.txt"
      }
    ],
    "public_projection": null,
    "tags": [
      "system",
      "world-events",
      "live-ops",
      "engine"
    ],
    "assets": [
      {
        "kind": "banner",
        "path": "repos/akalynth-site/assets/akalynth/visuals/banners/05-witness-moth.banner-1600x700.webp"
      },
      {
        "kind": "card",
        "path": "repos/akalynth-site/assets/akalynth/visuals/cards/05-witness-moth.card-800x1000.webp"
      },
      {
        "kind": "icon",
        "path": "repos/akalynth-site/assets/akalynth/visuals/icons/05-witness-moth.icon-candidate-1024.webp"
      },
      {
        "kind": "og",
        "path": "repos/akalynth-site/assets/akalynth/visuals/og/05-witness-moth.og-1200x630.webp"
      },
      {
        "kind": "thumb",
        "path": "repos/akalynth-site/assets/akalynth/visuals/thumbs/05-witness-moth.thumb-480x720.webp"
      },
      {
        "kind": "wallpaper",
        "path": "repos/akalynth-site/assets/akalynth/visuals/wallpapers/05-witness-moth.wallpaper-1080x1920.webp"
      },
      {
        "kind": "hero",
        "path": "repos/akalynth-site/assets/akalynth/visuals/hero/05-witness-moth.hero-cover-1920x1080.webp"
      }
    ],
    "_source_kind": "asserted"
  }
];
window.CODEX_STATS = {"objects":38,"by_status":{"accepted":36,"candidate":1,"draft":1},"by_category":{"Cities":5,"quest":1,"Codices":6,"asset":1,"mechanic":4,"system":5,"place":1,"Civilization Codices":1,"Systems":1,"World Foundation":1,"Materials":1,"Creatures":6,"Places":3,"Factions":1,"boss":1},"by_source_kind":{"asserted":28,"source":10},"open_packets":0,"public":24};
