// PRIVATE — agent work-queue + source-truth index. Generated; do not deploy.
window.CODEX_AGENT = {
  "objects": [
    {
      "id": "campaign-act-i",
      "title": "Act I — The Four Proofs",
      "type": "quest",
      "category": "quest",
      "status": "accepted",
      "accepted": true,
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
          "target": "moonspire"
        },
        {
          "rel": "references",
          "target": "cindervale"
        }
      ],
      "packet_count": 3
    },
    {
      "id": "artifacts-codex",
      "title": "Artifacts Codex",
      "type": "lore",
      "category": "Codices",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 0
    },
    {
      "id": "asset-library",
      "title": "Asset Library V1",
      "type": "asset",
      "category": "asset",
      "status": "accepted",
      "accepted": true,
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
          "target": "artifacts-codex"
        },
        {
          "rel": "references",
          "target": "dungeon-codex"
        },
        {
          "rel": "references",
          "target": "chronicle-of-ages"
        },
        {
          "rel": "references",
          "target": "emberwilds-atlas"
        }
      ],
      "packet_count": 0
    },
    {
      "id": "chill-zone-gather",
      "title": "Chill-Zone Gather",
      "type": "mechanic",
      "category": "mechanic",
      "status": "accepted",
      "accepted": true,
      "related": [
        {
          "rel": "references",
          "target": "game-loop-bible"
        },
        {
          "rel": "references",
          "target": "systems-bible"
        }
      ],
      "packet_count": 2
    },
    {
      "id": "chronicle-of-ages",
      "title": "Chronicle of Ages",
      "type": "lore",
      "category": "Codices",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 0
    },
    {
      "id": "cindervale",
      "title": "Cindervale",
      "type": "place",
      "category": "Cities",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 3
    },
    {
      "id": "dungeon-codex",
      "title": "Dungeon Codex",
      "type": "lore",
      "category": "Codices",
      "status": "accepted",
      "accepted": true,
      "related": [
        {
          "rel": "references",
          "target": "high-city"
        }
      ],
      "packet_count": 0
    },
    {
      "id": "emberwilds-atlas",
      "title": "Emberwilds Atlas",
      "type": "lore",
      "category": "Codices",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 0
    },
    {
      "id": "factions-codex",
      "title": "Factions Codex",
      "type": "lore",
      "category": "Codices",
      "status": "accepted",
      "accepted": true,
      "related": [
        {
          "rel": "references",
          "target": "high-city"
        }
      ],
      "packet_count": 0
    },
    {
      "id": "forgehold-ashglass-evidence",
      "title": "Forgehold Act II Ashglass Evidence",
      "type": "mechanic",
      "category": "mechanic",
      "status": "accepted",
      "accepted": true,
      "related": [
        {
          "rel": "part_of",
          "target": "forgehold"
        },
        {
          "rel": "references",
          "target": "ember-road"
        }
      ],
      "packet_count": 1
    },
    {
      "id": "forgehold",
      "title": "Forgehold Citadel",
      "type": "place",
      "category": "Cities",
      "status": "accepted",
      "accepted": true,
      "related": [
        {
          "rel": "connects_to",
          "target": "high-city"
        },
        {
          "rel": "connects_to",
          "target": "ember-road"
        },
        {
          "rel": "located_in",
          "target": "emberwilds"
        },
        {
          "rel": "home_of",
          "target": "flamebound"
        },
        {
          "rel": "produces",
          "target": "soulsteel"
        },
        {
          "rel": "contains",
          "target": "heartforge"
        },
        {
          "rel": "contains",
          "target": "heartforge-trial-chamber"
        },
        {
          "rel": "guards",
          "target": "oathless-forge"
        }
      ],
      "packet_count": 4
    },
    {
      "id": "game-loop-bible",
      "title": "Game Loop Bible",
      "type": "system",
      "category": "system",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 2
    },
    {
      "id": "gameplay-lane",
      "title": "Gameplay Lane — Origins, Professions, Equipment, Map, Campaign, Raids",
      "type": "system",
      "category": "system",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 2
    },
    {
      "id": "heartforge-trial-chamber",
      "title": "Heartforge Trial Chamber",
      "type": "place",
      "category": "place",
      "status": "candidate",
      "accepted": false,
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
      "packet_count": 0
    },
    {
      "id": "heroes-codex",
      "title": "Heroes Codex",
      "type": "lore",
      "category": "Codices",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 0
    },
    {
      "id": "high-city",
      "title": "High City",
      "type": "place",
      "category": "Cities",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 3
    },
    {
      "id": "live-lane-presentation-screenshot-proof",
      "title": "Live Lane Presentation Screenshot Proof",
      "type": "mechanic",
      "category": "mechanic",
      "status": "accepted",
      "accepted": true,
      "related": [
        {
          "rel": "follows",
          "target": "rookguard-first30-presentation"
        }
      ],
      "packet_count": 1
    },
    {
      "id": "moonspire",
      "title": "Moonspire",
      "type": "place",
      "category": "Cities",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 3
    },
    {
      "id": "origins-codex",
      "title": "Origins Codex",
      "type": "lore",
      "category": "Civilization Codices",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 0
    },
    {
      "id": "play-build-govern-surface",
      "title": "Play, Build, Govern Surface",
      "type": "system",
      "category": "Systems",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 5
    },
    {
      "id": "rookguard",
      "title": "Rookguard",
      "type": "place",
      "category": "World Foundation",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 0
    },
    {
      "id": "rookguard-first30-presentation",
      "title": "Rookguard First30 Presentation",
      "type": "mechanic",
      "category": "mechanic",
      "status": "accepted",
      "accepted": true,
      "related": [
        {
          "rel": "part_of",
          "target": "rookguard"
        }
      ],
      "packet_count": 1
    },
    {
      "id": "soulsteel",
      "title": "Soulsteel",
      "type": "material",
      "category": "Materials",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 0
    },
    {
      "id": "systems-bible",
      "title": "Systems Bible",
      "type": "system",
      "category": "system",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 2
    },
    {
      "id": "chronoshell-turtle",
      "title": "The Chronoshell Turtle",
      "type": "creature",
      "category": "Creatures",
      "status": "accepted",
      "accepted": true,
      "related": [],
      "packet_count": 0
    },
    {
      "id": "dreamweaver",
      "title": "The Dreamweaver",
      "type": "creature",
      "category": "Creatures",
      "status": "accepted",
      "accepted": true,
      "related": [
        {
          "rel": "references",
          "target": "moonspire"
        }
      ],
      "packet_count": 0
    },
    {
      "id": "echo-stalker",
      "title": "The Echo Stalker",
      "type": "creature",
      "category": "Creatures",
      "status": "accepted",
      "accepted": true,
      "related": [],
      "packet_count": 0
    },
    {
      "id": "ember-road",
      "title": "The Ember Road",
      "type": "route",
      "category": "Places",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 0
    },
    {
      "id": "emberwilds",
      "title": "The Emberwilds",
      "type": "region",
      "category": "Places",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 0
    },
    {
      "id": "flamebound",
      "title": "The Flamebound",
      "type": "faction",
      "category": "Factions",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 0
    },
    {
      "id": "heartforge",
      "title": "The Heartforge",
      "type": "place",
      "category": "Places",
      "status": "accepted",
      "accepted": true,
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
      "packet_count": 0
    },
    {
      "id": "memory-serpent",
      "title": "The Memory Serpent",
      "type": "creature",
      "category": "Creatures",
      "status": "accepted",
      "accepted": true,
      "related": [],
      "packet_count": 0
    },
    {
      "id": "oathless-forge",
      "title": "The Oathless Forge",
      "type": "boss",
      "category": "boss",
      "status": "draft",
      "accepted": false,
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
      "packet_count": 0
    },
    {
      "id": "void-whale",
      "title": "The Void Whale",
      "type": "creature",
      "category": "Creatures",
      "status": "accepted",
      "accepted": true,
      "related": [],
      "packet_count": 0
    },
    {
      "id": "witness-moth",
      "title": "The Witness Moth",
      "type": "creature",
      "category": "Creatures",
      "status": "accepted",
      "accepted": true,
      "related": [
        {
          "rel": "references",
          "target": "high-city"
        }
      ],
      "packet_count": 0
    },
    {
      "id": "veridium-port",
      "title": "Veridium Port",
      "type": "place",
      "category": "Cities",
      "status": "accepted",
      "accepted": true,
      "related": [
        {
          "rel": "connects_to",
          "target": "high-city"
        }
      ],
      "packet_count": 0
    },
    {
      "id": "council-dao",
      "title": "Witness Council DAO (local ops)",
      "type": "system",
      "category": "system",
      "status": "accepted",
      "accepted": true,
      "related": [
        {
          "rel": "references",
          "target": "witness-moth"
        },
        {
          "rel": "references",
          "target": "systems-bible"
        }
      ],
      "packet_count": 4
    },
    {
      "id": "world-events-engine",
      "title": "World Events Engine",
      "type": "system",
      "category": "system",
      "status": "accepted",
      "accepted": true,
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
          "target": "witness-moth"
        },
        {
          "rel": "references",
          "target": "chronicle-of-ages"
        }
      ],
      "packet_count": 2
    }
  ],
  "packets": [
    {
      "object_id": "campaign-act-i",
      "object_title": "Act I — The Four Proofs",
      "object_status": "accepted",
      "kind": "website_update",
      "ref": "codex/design/campaign-act-i.md",
      "ref_name": "campaign-act-i.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "campaign-act-i",
      "object_title": "Act I — The Four Proofs",
      "object_status": "accepted",
      "kind": "prototype_data",
      "ref": "codex/prompts/CLAUDE_CODE_AKALYNTH_CAMPAIGN_ACT_I_PROTOTYPE_DATA.prompt.md",
      "ref_name": "CLAUDE_CODE_AKALYNTH_CAMPAIGN_ACT_I_PROTOTYPE_DATA.prompt.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "campaign-act-i",
      "object_title": "Act I — The Four Proofs",
      "object_status": "accepted",
      "kind": "asset",
      "ref": "repos/akalynth/drop/AKALYNTH_CAMPAIGN_ACT_I_V1/prompts/AKALYNTH_CAMPAIGN_ACT_I_POSTER_V1.prompt.md",
      "ref_name": "AKALYNTH_CAMPAIGN_ACT_I_POSTER_V1.prompt.md",
      "status": "accepted",
      "assignee": null,
      "ready": false
    },
    {
      "object_id": "chill-zone-gather",
      "object_title": "Chill-Zone Gather",
      "object_status": "accepted",
      "kind": "review",
      "ref": "codex/design/chill-zone-gather.md",
      "ref_name": "chill-zone-gather.md",
      "status": "accepted",
      "assignee": null,
      "ready": false
    },
    {
      "object_id": "chill-zone-gather",
      "object_title": "Chill-Zone Gather",
      "object_status": "accepted",
      "kind": "mechanic",
      "ref": "codex/design/chill-zone-gather-step1-server-spec.md",
      "ref_name": "chill-zone-gather-step1-server-spec.md",
      "status": "accepted",
      "assignee": null,
      "ready": false
    },
    {
      "object_id": "cindervale",
      "object_title": "Cindervale",
      "object_status": "accepted",
      "kind": "website_update",
      "ref": "codex/design/cindervale.md",
      "ref_name": "cindervale.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "cindervale",
      "object_title": "Cindervale",
      "object_status": "accepted",
      "kind": "prototype_data",
      "ref": "codex/prompts/CLAUDE_CODE_AKALYNTH_CINDERWATCH_FRONTIER_PROTOTYPE_DATA.prompt.md",
      "ref_name": "CLAUDE_CODE_AKALYNTH_CINDERWATCH_FRONTIER_PROTOTYPE_DATA.prompt.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "cindervale",
      "object_title": "Cindervale",
      "object_status": "accepted",
      "kind": "asset",
      "ref": "repos/akalynth/drop/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_V1/prompts/AKALYNTH_CINDERWATCH_FRONTIER_SLICE_POSTER_V1.prompt.md",
      "ref_name": "AKALYNTH_CINDERWATCH_FRONTIER_SLICE_POSTER_V1.prompt.md",
      "status": "accepted",
      "assignee": null,
      "ready": false
    },
    {
      "object_id": "council-dao",
      "object_title": "Witness Council DAO (local ops)",
      "object_status": "accepted",
      "kind": "review",
      "ref": "codex/design/council-dao-v1.md",
      "ref_name": "council-dao-v1.md",
      "status": "accepted",
      "assignee": "codex-agent",
      "ready": false
    },
    {
      "object_id": "council-dao",
      "object_title": "Witness Council DAO (local ops)",
      "object_status": "accepted",
      "kind": "review",
      "ref": "codex/design/council-dao-v2.md",
      "ref_name": "council-dao-v2.md",
      "status": "accepted",
      "assignee": "codex-agent",
      "ready": false
    },
    {
      "object_id": "council-dao",
      "object_title": "Witness Council DAO (local ops)",
      "object_status": "accepted",
      "kind": "review",
      "ref": "codex/design/council-dao-deploy-permit-v1.md",
      "ref_name": "council-dao-deploy-permit-v1.md",
      "status": "accepted",
      "assignee": "codex-agent",
      "ready": false
    },
    {
      "object_id": "council-dao",
      "object_title": "Witness Council DAO (local ops)",
      "object_status": "accepted",
      "kind": "review",
      "ref": "codex/design/council-publish-play-permit-v1.md",
      "ref_name": "council-publish-play-permit-v1.md",
      "status": "accepted",
      "assignee": "codex-agent",
      "ready": false
    },
    {
      "object_id": "forgehold-ashglass-evidence",
      "object_title": "Forgehold Act II Ashglass Evidence",
      "object_status": "accepted",
      "kind": "mechanic",
      "ref": "codex/design/forgehold-ashglass-evidence-v1.md",
      "ref_name": "forgehold-ashglass-evidence-v1.md",
      "status": "closed",
      "assignee": "codex-agent",
      "ready": false
    },
    {
      "object_id": "forgehold",
      "object_title": "Forgehold Citadel",
      "object_status": "accepted",
      "kind": "website_update",
      "ref": "codex/design/forgehold.md",
      "ref_name": "forgehold.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "forgehold",
      "object_title": "Forgehold Citadel",
      "object_status": "accepted",
      "kind": "prototype_data",
      "ref": "codex/prompts/CLAUDE_CODE_AKALYNTH_FORGEHOLD_ROUTE_PROTOTYPE_DATA.prompt.md",
      "ref_name": "CLAUDE_CODE_AKALYNTH_FORGEHOLD_ROUTE_PROTOTYPE_DATA.prompt.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "forgehold",
      "object_title": "Forgehold Citadel",
      "object_status": "accepted",
      "kind": "asset",
      "ref": "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/prompts/AKALYNTH_FORGEHOLD_ROUTE_SLICE_POSTER_V1.prompt.md",
      "ref_name": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_POSTER_V1.prompt.md",
      "status": "accepted",
      "assignee": null,
      "ready": false
    },
    {
      "object_id": "forgehold",
      "object_title": "Forgehold Citadel",
      "object_status": "accepted",
      "kind": "mechanic",
      "ref": "codex/design/forgehold-missing-shipment-v1.md",
      "ref_name": "forgehold-missing-shipment-v1.md",
      "status": "accepted",
      "assignee": "codex-agent",
      "ready": false
    },
    {
      "object_id": "game-loop-bible",
      "object_title": "Game Loop Bible",
      "object_status": "accepted",
      "kind": "website_update",
      "ref": "codex/design/game-loop-bible.md",
      "ref_name": "game-loop-bible.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "game-loop-bible",
      "object_title": "Game Loop Bible",
      "object_status": "accepted",
      "kind": "asset",
      "ref": "repos/akalynth/drop/AKALYNTH_GAME_LOOP_BIBLE_V1/prompts/AKALYNTH_GAME_LOOP_BIBLE_POSTER_V1.prompt.md",
      "ref_name": "AKALYNTH_GAME_LOOP_BIBLE_POSTER_V1.prompt.md",
      "status": "accepted",
      "assignee": "asset-pipeline",
      "ready": false
    },
    {
      "object_id": "gameplay-lane",
      "object_title": "Gameplay Lane — Origins, Professions, Equipment, Map, Campaign, Raids",
      "object_status": "accepted",
      "kind": "website_update",
      "ref": "codex/design/gameplay-lane.md",
      "ref_name": "gameplay-lane.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "gameplay-lane",
      "object_title": "Gameplay Lane — Origins, Professions, Equipment, Map, Campaign, Raids",
      "object_status": "accepted",
      "kind": "asset",
      "ref": "repos/akalynth/drop/AKALYNTH_GAMEPLAY_LANE_V1/prompts/image_briefs",
      "ref_name": "image_briefs",
      "status": "accepted",
      "assignee": "asset-pipeline",
      "ready": false
    },
    {
      "object_id": "high-city",
      "object_title": "High City",
      "object_status": "accepted",
      "kind": "website_update",
      "ref": "codex/design/high-city.md",
      "ref_name": "high-city.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "high-city",
      "object_title": "High City",
      "object_status": "accepted",
      "kind": "prototype_data",
      "ref": "codex/prompts/CLAUDE_CODE_AKALYNTH_PLAYABLE_SLICE_PROTOTYPE_DATA.prompt.md",
      "ref_name": "CLAUDE_CODE_AKALYNTH_PLAYABLE_SLICE_PROTOTYPE_DATA.prompt.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "high-city",
      "object_title": "High City",
      "object_status": "accepted",
      "kind": "asset",
      "ref": "repos/akalynth/drop/AKALYNTH_FIRST_PLAYABLE_SLICE_V1/prompts/AKALYNTH_FIRST_PLAYABLE_SLICE_POSTER_V1.prompt.md",
      "ref_name": "AKALYNTH_FIRST_PLAYABLE_SLICE_POSTER_V1.prompt.md",
      "status": "accepted",
      "assignee": null,
      "ready": false
    },
    {
      "object_id": "live-lane-presentation-screenshot-proof",
      "object_title": "Live Lane Presentation Screenshot Proof",
      "object_status": "accepted",
      "kind": "screenshot-proof",
      "ref": "codex/design/live-lane-presentation-screenshot-proof-v1.md",
      "ref_name": "live-lane-presentation-screenshot-proof-v1.md",
      "status": "closed",
      "assignee": "codex-agent",
      "ready": false
    },
    {
      "object_id": "moonspire",
      "object_title": "Moonspire",
      "object_status": "accepted",
      "kind": "website_update",
      "ref": "codex/design/moonspire.md",
      "ref_name": "moonspire.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "moonspire",
      "object_title": "Moonspire",
      "object_status": "accepted",
      "kind": "prototype_data",
      "ref": "codex/prompts/CLAUDE_CODE_AKALYNTH_MOONSPIRE_DREAM_GATE_PROTOTYPE_DATA.prompt.md",
      "ref_name": "CLAUDE_CODE_AKALYNTH_MOONSPIRE_DREAM_GATE_PROTOTYPE_DATA.prompt.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "moonspire",
      "object_title": "Moonspire",
      "object_status": "accepted",
      "kind": "asset",
      "ref": "repos/akalynth/drop/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_V1/prompts/AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_POSTER_V1.prompt.md",
      "ref_name": "AKALYNTH_MOONSPIRE_DREAM_GATE_SLICE_POSTER_V1.prompt.md",
      "status": "accepted",
      "assignee": null,
      "ready": false
    },
    {
      "object_id": "play-build-govern-surface",
      "object_title": "Play, Build, Govern Surface",
      "object_status": "accepted",
      "kind": "map",
      "ref": "codex/design/play-build-govern-surface.md#rookguard-builder-kit",
      "ref_name": "play-build-govern-surface.md#rookguard-builder-kit",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "play-build-govern-surface",
      "object_title": "Play, Build, Govern Surface",
      "object_status": "accepted",
      "kind": "quest",
      "ref": "codex/design/play-build-govern-surface.md#high-city-first-quest-kit",
      "ref_name": "play-build-govern-surface.md#high-city-first-quest-kit",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "play-build-govern-surface",
      "object_title": "Play, Build, Govern Surface",
      "object_status": "accepted",
      "kind": "mechanic",
      "ref": "codex/design/play-build-govern-surface.md#local-preview-contract",
      "ref_name": "play-build-govern-surface.md#local-preview-contract",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "play-build-govern-surface",
      "object_title": "Play, Build, Govern Surface",
      "object_status": "accepted",
      "kind": "review",
      "ref": "codex/design/play-build-govern-surface.md#promotion-review-contract",
      "ref_name": "play-build-govern-surface.md#promotion-review-contract",
      "status": "accepted",
      "assignee": "operator-review",
      "ready": false
    },
    {
      "object_id": "play-build-govern-surface",
      "object_title": "Play, Build, Govern Surface",
      "object_status": "accepted",
      "kind": "asset",
      "ref": "codex/design/play-build-govern-surface.md#asset-production-backlog",
      "ref_name": "play-build-govern-surface.md#asset-production-backlog",
      "status": "accepted",
      "assignee": "asset-pipeline",
      "ready": false
    },
    {
      "object_id": "rookguard-first30-presentation",
      "object_title": "Rookguard First30 Presentation",
      "object_status": "accepted",
      "kind": "presentation",
      "ref": "codex/design/rookguard-first30-presentation-v1.md",
      "ref_name": "rookguard-first30-presentation-v1.md",
      "status": "closed",
      "assignee": "codex-agent",
      "ready": false
    },
    {
      "object_id": "systems-bible",
      "object_title": "Systems Bible",
      "object_status": "accepted",
      "kind": "website_update",
      "ref": "codex/design/systems-bible.md",
      "ref_name": "systems-bible.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "systems-bible",
      "object_title": "Systems Bible",
      "object_status": "accepted",
      "kind": "asset",
      "ref": "repos/akalynth/drop/AKALYNTH_SYSTEMS_BIBLE_V1/prompts/AKALYNTH_SYSTEMS_BIBLE_POSTER_V1.prompt.md",
      "ref_name": "AKALYNTH_SYSTEMS_BIBLE_POSTER_V1.prompt.md",
      "status": "accepted",
      "assignee": "asset-pipeline",
      "ready": false
    },
    {
      "object_id": "world-events-engine",
      "object_title": "World Events Engine",
      "object_status": "accepted",
      "kind": "website_update",
      "ref": "codex/design/world-events-engine.md",
      "ref_name": "world-events-engine.md",
      "status": "accepted",
      "assignee": "codex-build-delegation",
      "ready": false
    },
    {
      "object_id": "world-events-engine",
      "object_title": "World Events Engine",
      "object_status": "accepted",
      "kind": "asset",
      "ref": "repos/akalynth/drop/AKALYNTH_WORLD_EVENTS_ENGINE_V1/prompts/AKALYNTH_WORLD_EVENTS_ENGINE_POSTER_V1.prompt.md",
      "ref_name": "AKALYNTH_WORLD_EVENTS_ENGINE_POSTER_V1.prompt.md",
      "status": "accepted",
      "assignee": null,
      "ready": false
    }
  ],
  "stats": {
    "objects": 38,
    "open_packets": 0,
    "ready": 0,
    "by_packet_status": {
      "accepted": 35,
      "closed": 3
    },
    "by_packet_kind": {
      "website_update": 9,
      "prototype_data": 5,
      "asset": 10,
      "review": 6,
      "mechanic": 4,
      "screenshot-proof": 1,
      "map": 1,
      "quest": 1,
      "presentation": 1
    },
    "by_object_status": {
      "accepted": 36,
      "candidate": 1,
      "draft": 1
    }
  }
};
