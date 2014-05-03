var POKEMON_LIST = [
   "Aegislash",
   "Charizard",
   "Thundurus",
   "Rotom-Wash",
   "Bisharp",
   "Heatran",
   "Garchomp",
   "Keldeo",
   "Scizor",
   "Azumarill",
   "Landorus-Therian",
   "Latios",
   "Skarmory",
   "Talonflame",
   "Tyranitar",
   "Greninja",
   "Excadrill",
   "Venusaur",
   "Ferrothorn",
   "Dragonite",
   "Chansey",
   "Gyarados",
   "Mawile",
   "Conkeldurr",
   "Pinsir",
   "Deoxys-Speed",
   "Landorus",
   "Deoxys-Defense",
   "Clefable",
   "Sylveon",
   "Gliscor",
   "Mandibuzz",
   "Zapdos",
   "Latias",
   "Espeon",
   "Gengar",
   "Breloom",
   "Terrakion",
   "Scolipede",
   "Kyurem-Black",
   "Quagsire",
   "Mamoswine",
   "Smeargle",
   "Vaporeon",
   "Togekiss",
   "Gardevoir",
   "Manectric",
   "Infernape",
   "Medicham",
   "Blissey",
   "Alakazam",
   "Gothitelle",
   "Hippowdon",
   "Diggersby",
   "Goodra",
   "Manaphy",
   "Mew",
   "Volcarona",
   "Amoonguss",
   "Heracross",
   "Slowbro",
   "Ditto",
   "Politoed",
   "Donphan",
   "Magnezone",
   "Cloyster",
   "Mr.Mime",
   "Blastoise",
   "Sableye",
   "Suicune",
   "Weavile",
   "Forretress",
   "Thundurus-Therian",
   "Tentacruel",
   "Chesnaught",
   "Staraptor",
   "Starmie",
   "Haxorus",
   "Raikou",
   "Hydreigon",
   "Crawdaunt",
   "Porygon2",
   "Kingdra",
   "Lucario",
   "Umbreon",
   "Galvantula",
   "Salamence",
   "Celebi",
   "Klefki",
   "Jolteon",
   "Kabutops",
   "Aggron",
   "Trevenant",
   "Jirachi",
   "Chandelure",
   "Entei",
   "Rotom-Heat",
   "Tornadus-Therian",
   "Toxicroak",
   "Aerodactyl",
   "Meloetta",
   "Arcanine",
   "Metagross",
   "Absol",
   "Gastrodon",
   "Noivern",
   "Nidoking",
   "Jellicent",
   "Milotic",
   "Empoleon",
   "Victini",
   "Darmanitan",
   "Reuniclus",
   "Florges",
   "Hawlucha",
   "Alomomola",
   "Cresselia",
   "Rhyperior",
   "Swampert",
   "Krookodile",
   "Ampharos",
   "Crobat",
   "Whimsicott",
   "Snorlax",
   "Shuckle",
   "Roserade",
   "Mienshao",
   "Ninetales",
   "Machamp",
   "Cofagrigus",
   "Heliolisk",
   "Ambipom",
   "Electivire",
   "Honchkrow",
   "Scrafty",
   "Wobbuffet",
   "Dugtrio",
   "Zygarde",
   "Houndoom",
   "Zoroark",
   "Banette",
   "Ninjask",
   "Ludicolo",
   "Tangrowth",
   "Porygon-Z",
   "Azelf",
   "Steelix",
   "Malamar",
   "Dusclops",
   "Exploud",
   "Flygon",
   "Omastar",
   "Sigilyph",
   "Hitmontop",
   "Froslass",
   "Cinccino",
   "Slowking",
   "Shaymin",
   "Sceptile",
   "Abomasnow",
   "Virizion",
   "Drapion",
   "Cobalion",
   "Gallade",
   "Tyrantrum",
   "Shedinja",
   "Xatu",
   "Hitmonlee",
   "Weezing",
   "Eelektross",
   "Gourgeist-Super",
   "Rotom-Mow",
   "Seismitoad",
   "Bronzong",
   "Typhlosion",
   "Slurpuff",
   "Delphox",
   "Vivillon",
   "Tornadus",
   "Lapras",
   "Pikachu",
   "Gorebyss",
   "Clawitzer",
   "Lanturn",
   "Registeel",
   "Feraligatr",
   "Avalugg",
   "Venomoth",
   "Durant",
   "Altaria",
   "Slaking",
   "Barbaracle",
   "Kyurem",
   "Sharpedo",
   "Cradily",
   "Swellow",
   "Torterra",
   "Pangoro",
   "Mantine",
   "Escavalier",
   "Rampardos",
   "Nidoqueen",
   "Dusknoir",
   "Spiritomb",
   "Golurk",
   "Carbink",
   "Muk",
   "Lilligant",
   "Flareon",
   "Chatot",
   "Dragalge",
   "Yanmega",
   "Drifblim",
   "Pyroar",
   "Leafeon",
   "Carracosta",
   "Golem",
   "Tauros",
   "Torkoal",
   "Stoutland",
   "Claydol",
   "Miltank",
   "Meowstic",
   "Raichu",
   "Luxray",
   "Mismagius",
   "Hitmonchan",
   "Exeggutor",
   "Liepard",
   "Magmortar",
   "Braviary",
   "Zangoose",
   "Doublade",
   "Marowak",
   "Skuntank",
   "Druddigon",
   "Cacturne",
   "Emboar",
   "Serperior",
   "Ursaring",
   "Glaceon",
   "Accelgor",
   "Tangela",
   "Archeops",
   "Gourgeist-Small",
   "Volbeat",
   "Gogoat",
   "Kecleon",
   "Furfrou",
   "Scyther",
   "Qwilfish",
   "Moltres",
   "Regirock",
   "Murkrow",
   "Granbull",
   "Meganium",
   "Poliwrath",
   "Uxie",
   "Shiftry",
   "Hariyama",
   "Pidgeot",
   "Aron",
   "Aromatisse",
   "Electrode",
   "Sawk",
   "Bastiodon",
   "Gigalith",
   "Jynx",
   "Victreebel",
   "Bouffalant",
   "Samurott",
   "Linoone",
   "Rhydon",
   "Armaldo",
   "Kangaskhan",
   "Gourgeist-Large",
   "Crustle",
   "Walrein",
   "Lopunny",
   "Regice",
   "Magneton",
   "Articuno",
   "Tropius",
   "Aurorus",
   "Wigglytuff",
   "Sawsbuck",
   "Kingler",
   "Rapidash",
   "Leavanny",
   "Lickilicky",
   "Jumpluff",
   "Floatzel",
   "Sandslash",
   "Raticate",
   "Probopass",
   "Swoobat",
   "Vileplume",
   "Rotom",
   "Rattata",
   "Regigigas",
   "Dedenne",
   "Camerupt",
   "Stunfisk",
   "Primeape",
   "Emolga",
   "Klinklang",
   "Relicanth",
   "Cryogonal",
   "Mightyena",
   "Rotom-Frost",
   "Arbok",
   "Persian",
   "Golbat",
   "Wailord",
   "Gligar",
   "Musharna",
   "Butterfree",
   "Magikarp",
   "Zebstrika",
   "Rotom-Fan",
   "Huntail",
   "Audino",
   "Beartic",
   "Dunsparce",
   "Ariados",
   "Combusken",
   "Swanna",
   "Magcargo",
   "Masquerain",
   "Vanilluxe",
   "Octillery",
   "Garbodor",
   "Dodrio",
   "Parasect",
   "Delibird",
   "Magnemite",
   "Piloswine",
   "Purugly",
   "Seaking",
   "Togetic",
   "Beheeyem",
   "Gourgeist",
   "Golduck",
   "Seviper",
   "Throh",
   "Riolu",
   "Spinda",
   "Nosepass",
   "Beedrill",
   "Meowstic-F",
   "Bibarel",
   "Whiscash",
   "Pineco",
   "Vespiquen",
   "Haunter",
   "Swalot",
   "Hypno",
   "Noctowl",
   "Furret",
   "Dewgong",
   "Basculin",
   "Grumpig",
   "Bellossom",
   "Magmar",
   "Heatmor",
   "Cottonee",
   "Electabuzz",
];