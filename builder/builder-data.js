// PRIVATE — design-layer graph for the Builder console. Generated; do not deploy.
window.CODEX_BUILDER = [
  {
    "id": "forgehold",
    "type": "place",
    "title": "Forgehold Citadel",
    "category": "Cities",
    "status": "accepted",
    "published": true,
    "source_kind": "receipt",
    "design_source": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
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
    },
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
    "tags": [
      "city",
      "emberwilds",
      "flamebound",
      "route-slice",
      "strength"
    ]
  },
  {
    "id": "campaign-act-i",
    "type": "quest",
    "title": "Act I — The Four Proofs",
    "category": "Quests",
    "status": "accepted",
    "published": false,
    "source_kind": "receipt",
    "design_source": "AKALYNTH_CAMPAIGN_ACT_I_V1",
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
        "target": "moonspire"
      },
      {
        "rel": "references",
        "target": "cindervale"
      }
    ],
    "tags": [
      "campaign",
      "act-i",
      "four-proofs",
      "spine"
    ]
  },
  {
    "id": "artifacts-codex",
    "type": "lore",
    "title": "Artifacts Codex",
    "category": "Codices",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "AKALYNTH_ARTIFACTS_CODEX_V1",
    "description": "Relics of Power.",
    "design_refs": [
      "repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_ARTIFACTS_CODEX_V1.md"
    ],
    "implementation": null,
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
    "tags": [
      "codex",
      "archive"
    ]
  },
  {
    "id": "asset-library",
    "type": "asset",
    "title": "Asset Library V1",
    "category": "asset",
    "status": "accepted",
    "published": false,
    "source_kind": "asserted",
    "design_source": "AKALYNTH_ASSET_LIBRARY_V1",
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
    "tags": [
      "asset",
      "library",
      "art",
      "lore-source",
      "shipped"
    ]
  },
  {
    "id": "chill-zone-gather",
    "type": "mechanic",
    "title": "Chill-Zone Gather",
    "category": "mechanic",
    "status": "draft",
    "published": false,
    "source_kind": "asserted",
    "design_source": "gameplay-loop-designer session — MVP loop proposal (no source drop)",
    "description": "A no-combat chill-zone onboarding loop. The client sends only move/gather/deliver intents; the server owns the gather clock, inventory, and reward grant. One delivery.recorded receipt per completed cycle, with gather provenance folded in. Deliberately excludes combat, party mechanics, and tradeable economy so the Systems Bible pillars stay untouched. Placeholder intent/snapshot/receipt shapes must be reconciled with real game-server contracts (movement, inventory, receipt schema, Tem heat, zone snapshot) before implementation.",
    "design_refs": [
      "codex/design/chill-zone-gather.md",
      "codex/design/chill-zone-gather-step1-server-spec.md"
    ],
    "implementation": {
      "stage": "concept"
    },
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
    "tags": [
      "gameplay-loop",
      "mvp",
      "onboarding",
      "no-combat",
      "server-authority",
      "receipts",
      "proposal"
    ]
  },
  {
    "id": "chronicle-of-ages",
    "type": "lore",
    "title": "Chronicle of Ages",
    "category": "Codices",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "AKALYNTH_CHRONICLE_OF_AGES_V1",
    "description": "Events That Changed The World.",
    "design_refs": [
      "repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_CHRONICLE_OF_AGES_V1.md"
    ],
    "implementation": null,
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
    "tags": [
      "codex",
      "archive"
    ]
  },
  {
    "id": "cindervale",
    "type": "place",
    "title": "Cindervale",
    "category": "Cities",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "AKALYNTH_CITIES_SUMMARY_V1",
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
    "tags": [
      "city",
      "survival"
    ]
  },
  {
    "id": "dungeon-codex",
    "type": "lore",
    "title": "Dungeon Codex",
    "category": "Codices",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "AKALYNTH_DUNGEON_CODEX_V1",
    "description": "Places Where History Still Breathes.",
    "design_refs": [
      "repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_DUNGEON_CODEX_V1.md"
    ],
    "implementation": null,
    "related": [
      {
        "rel": "references",
        "target": "high-city"
      }
    ],
    "tags": [
      "codex",
      "archive"
    ]
  },
  {
    "id": "emberwilds-atlas",
    "type": "lore",
    "title": "Emberwilds Atlas",
    "category": "Codices",
    "status": "accepted",
    "published": true,
    "source_kind": "asserted",
    "design_source": "AKALYNTH world atlas",
    "description": "The volcanic frontier, mapped.",
    "design_refs": [
      "repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH world atlas.md"
    ],
    "implementation": null,
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
    "tags": [
      "codex",
      "archive"
    ]
  },
  {
    "id": "factions-codex",
    "type": "lore",
    "title": "Factions Codex",
    "category": "Codices",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "AKALYNTH_FACTIONS_CODEX_V1",
    "description": "Powers That Shape the World.",
    "design_refs": [
      "repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_FACTIONS_CODEX_V1.md"
    ],
    "implementation": null,
    "related": [
      {
        "rel": "references",
        "target": "high-city"
      }
    ],
    "tags": [
      "codex",
      "archive"
    ]
  },
  {
    "id": "game-loop-bible",
    "type": "system",
    "title": "Game Loop Bible",
    "category": "Systems",
    "status": "accepted",
    "published": false,
    "source_kind": "receipt",
    "design_source": "AKALYNTH_GAME_LOOP_BIBLE_V1",
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
    },
    "related": [
      {
        "rel": "references",
        "target": "systems-bible"
      },
      {
        "rel": "references",
        "target": "world-events-engine"
      }
    ],
    "tags": [
      "system",
      "game-loop",
      "retention",
      "bible"
    ]
  },
  {
    "id": "gameplay-lane",
    "type": "system",
    "title": "Gameplay Lane — Origins, Professions, Equipment, Map, Campaign, Raids",
    "category": "Systems",
    "status": "accepted",
    "published": false,
    "source_kind": "receipt",
    "design_source": "AKALYNTH_GAMEPLAY_LANE_V1",
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
    },
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
    "tags": [
      "system",
      "gameplay",
      "origins",
      "professions",
      "equipment",
      "map"
    ]
  },
  {
    "id": "heartforge-trial-chamber",
    "type": "place",
    "title": "Heartforge Trial Chamber",
    "category": "Places",
    "status": "candidate",
    "published": false,
    "source_kind": "receipt",
    "design_source": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
    "description": "The trial dungeon beneath the Heartforge — Soulsteel-stabilization trials guarding the route's final tempering. Designed, not yet released.",
    "design_refs": [
      "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/docs/AKALYNTH_HEARTFORGE_TRIAL_CHAMBER_DUNGEON_V1.md"
    ],
    "implementation": {
      "stage": "spec",
      "slice": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1"
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
    "tags": [
      "unreleased",
      "forgehold-slice",
      "place"
    ]
  },
  {
    "id": "heroes-codex",
    "type": "lore",
    "title": "Heroes Codex",
    "category": "Codices",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "AKALYNTH_HEROES_CODEX_V1",
    "description": "The First Legends.",
    "design_refs": [
      "repos/akalynth-site/drop/AKALYNTH_ASSET_LIBRARY_V1/markdown/AKALYNTH_HEROES_CODEX_V1.md"
    ],
    "implementation": null,
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
    "tags": [
      "codex",
      "archive"
    ]
  },
  {
    "id": "high-city",
    "type": "place",
    "title": "High City",
    "category": "Cities",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "AKALYNTH_CITIES_SUMMARY_V1",
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
      }
    ],
    "tags": [
      "city",
      "order"
    ]
  },
  {
    "id": "moonspire",
    "type": "place",
    "title": "Moonspire",
    "category": "Cities",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "AKALYNTH_CITIES_SUMMARY_V1",
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
    "tags": [
      "city",
      "wisdom"
    ]
  },
  {
    "id": "soulsteel",
    "type": "material",
    "title": "Soulsteel",
    "category": "Materials",
    "status": "accepted",
    "published": true,
    "source_kind": "asserted",
    "design_source": "AKALYNTH_SOULSTEEL_STABILIZATION_V1",
    "description": "A material forged and stabilized at the Heartforge of Forgehold; the core of the Forgehold crafting systems.",
    "design_refs": [],
    "implementation": null,
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
    "tags": [
      "emberwilds",
      "material"
    ]
  },
  {
    "id": "systems-bible",
    "type": "system",
    "title": "Systems Bible",
    "category": "Systems",
    "status": "accepted",
    "published": false,
    "source_kind": "receipt",
    "design_source": "AKALYNTH_SYSTEMS_BIBLE_V1",
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
    "tags": [
      "system",
      "combat",
      "economy",
      "progression",
      "bible"
    ]
  },
  {
    "id": "chronoshell-turtle",
    "type": "creature",
    "title": "The Chronoshell Turtle",
    "category": "Creatures",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "codex.html creature codex",
    "description": "Keeper of Ages · Shell of Millennia · Threat: Unknown.",
    "design_refs": [],
    "implementation": null,
    "related": [],
    "tags": [
      "creature",
      "threat-unknown"
    ]
  },
  {
    "id": "dreamweaver",
    "type": "creature",
    "title": "The Dreamweaver",
    "category": "Creatures",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "codex.html creature codex",
    "description": "Architect of Dreams · Weaver of Possibilities · Threat: High (Indirect).",
    "design_refs": [],
    "implementation": null,
    "related": [
      {
        "rel": "references",
        "target": "moonspire"
      }
    ],
    "tags": [
      "creature",
      "threat-high-indirect-"
    ]
  },
  {
    "id": "echo-stalker",
    "type": "creature",
    "title": "The Echo Stalker",
    "category": "Creatures",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "codex.html creature codex",
    "description": "Shadow Hunter of Forgotten Sounds · Threat: Extreme.",
    "design_refs": [],
    "implementation": null,
    "related": [],
    "tags": [
      "creature",
      "threat-extreme"
    ]
  },
  {
    "id": "ember-road",
    "type": "route",
    "title": "The Ember Road",
    "category": "Places",
    "status": "accepted",
    "published": true,
    "source_kind": "receipt",
    "design_source": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
    "description": "The first route expansion of Akalynth: regional travel from High City through the Emberwilds to the Forgehold Outer Gate.",
    "design_refs": [],
    "implementation": null,
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
    "tags": [
      "emberwilds",
      "route"
    ]
  },
  {
    "id": "emberwilds",
    "type": "region",
    "title": "The Emberwilds",
    "category": "Places",
    "status": "accepted",
    "published": true,
    "source_kind": "receipt",
    "design_source": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
    "description": "A volcanic frontier region anchored by Forgehold Citadel and watched from the ash-edge by Cindervale. Crossed by the Ember Road.",
    "design_refs": [],
    "implementation": null,
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
    "tags": [
      "emberwilds",
      "region"
    ]
  },
  {
    "id": "flamebound",
    "type": "faction",
    "title": "The Flamebound",
    "category": "Factions",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "AKALYNTH_FACTIONS_CODEX_V1",
    "description": "The faction of Forgehold — forge-sworn keepers of Soulsteel and the Heartforge. Their domain is Strength; their origin role is the Flamekeeper.",
    "design_refs": [],
    "implementation": null,
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
    "tags": [
      "emberwilds",
      "faction"
    ]
  },
  {
    "id": "heartforge",
    "type": "place",
    "title": "The Heartforge",
    "category": "Places",
    "status": "accepted",
    "published": true,
    "source_kind": "receipt",
    "design_source": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
    "description": "The Heartforge burns at the centre of Forgehold Citadel — where Soulsteel is made. (Its Trial Chamber is a separate, unreleased dungeon.)",
    "design_refs": [],
    "implementation": null,
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
    "tags": [
      "emberwilds",
      "place"
    ]
  },
  {
    "id": "memory-serpent",
    "type": "creature",
    "title": "The Memory Serpent",
    "category": "Creatures",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "codex.html creature codex",
    "description": "Guardian of Forgotten Truths · Warden of the Deep Mind · Threat: Extreme.",
    "design_refs": [],
    "implementation": null,
    "related": [],
    "tags": [
      "creature",
      "threat-extreme"
    ]
  },
  {
    "id": "oathless-forge",
    "type": "boss",
    "title": "The Oathless Forge",
    "category": "Bosses",
    "status": "draft",
    "published": false,
    "source_kind": "receipt",
    "design_source": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1",
    "description": "The boss encounter at the heart of the Heartforge Trial Chamber. Mechanics designed; unreleased.",
    "design_refs": [
      "repos/akalynth/drop/AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1/docs/AKALYNTH_OATHLESS_FORGE_BOSS_V1.md"
    ],
    "implementation": {
      "stage": "spec",
      "slice": "AKALYNTH_FORGEHOLD_ROUTE_SLICE_V1"
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
    "tags": [
      "unreleased",
      "forgehold-slice",
      "boss"
    ]
  },
  {
    "id": "void-whale",
    "type": "creature",
    "title": "The Void Whale",
    "category": "Creatures",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "codex.html creature codex",
    "description": "Skybound Leviathan · Herald of the Gap · Threat: Catastrophic.",
    "design_refs": [],
    "implementation": null,
    "related": [],
    "tags": [
      "creature",
      "threat-catastrophic"
    ]
  },
  {
    "id": "witness-moth",
    "type": "creature",
    "title": "The Witness Moth",
    "category": "Creatures",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "codex.html creature codex",
    "description": "Keeper of Seen Truths · Recorder of All That Is · Threat: High.",
    "design_refs": [],
    "implementation": null,
    "related": [
      {
        "rel": "references",
        "target": "high-city"
      }
    ],
    "tags": [
      "creature",
      "threat-high"
    ]
  },
  {
    "id": "veridium-port",
    "type": "place",
    "title": "Veridium Port",
    "category": "Cities",
    "status": "accepted",
    "published": true,
    "source_kind": "source",
    "design_source": "AKALYNTH_CITIES_SUMMARY_V1",
    "description": "Gateway of the Western Sea — the largest harbor in Akalynth. Civic domain: Prosperity.",
    "design_refs": [],
    "implementation": null,
    "related": [
      {
        "rel": "connects_to",
        "target": "high-city"
      }
    ],
    "tags": [
      "city",
      "prosperity"
    ]
  },
  {
    "id": "world-events-engine",
    "type": "system",
    "title": "World Events Engine",
    "category": "Systems",
    "status": "accepted",
    "published": false,
    "source_kind": "receipt",
    "design_source": "AKALYNTH_WORLD_EVENTS_ENGINE_V1",
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
        "target": "witness-moth"
      },
      {
        "rel": "references",
        "target": "chronicle-of-ages"
      }
    ],
    "tags": [
      "system",
      "world-events",
      "live-ops",
      "engine"
    ]
  }
];
window.CODEX_BUILDER_STATS = {"objects":31,"public":22,"internal":9,"by_category":{"Cities":5,"Quests":1,"Codices":6,"asset":1,"mechanic":1,"Systems":4,"Places":4,"Materials":1,"Creatures":6,"Factions":1,"Bosses":1},"by_stage":{"spec":11,"lore":18,"shipped":1,"concept":1},"by_status":{"accepted":28,"draft":2,"candidate":1}};
