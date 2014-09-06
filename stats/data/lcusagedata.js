var RANKINGS = [
   [ "1", "Abra", "29.90285%" ],
   [ "2", "Mienfoo", "27.21059%" ],
   [ "3", "Pawniard", "23.79583%" ],
   [ "4", "Fletchling", "21.55133%" ],
   [ "5", "Chinchou", "20.17764%" ],
   [ "6", "Aipom", "15.22892%" ],
   [ "7", "Drilbur", "15.18724%" ],
   [ "8", "Gastly", "15.07273%" ],
   [ "9", "Scraggy", "13.07314%" ],
   [ "10", "Ferroseed", "12.11835%" ],
   [ "11", "Timburr", "12.01699%" ],
   [ "12", "Archen", "11.67672%" ],
   [ "13", "Magnemite", "10.63261%" ],
   [ "14", "Porygon", "9.97905%" ],
   [ "15", "Tirtouga", "9.24171%" ],
   [ "16", "Foongus", "7.82271%" ],
   [ "17", "Spritzee", "7.58204%" ],
   [ "18", "Cottonee", "7.48140%" ],
   [ "19", "Dwebble", "6.80949%" ],
   [ "20", "Misdreavus", "6.72108%" ],
   [ "21", "Bunnelby", "6.68109%" ],
   [ "22", "Vullaby", "6.28399%" ],
   [ "23", "Diglett", "6.13426%" ],
   [ "24", "Croagunk", "6.06017%" ],
   [ "25", "Ponyta", "6.00608%" ],
   [ "26", "Onix", "5.82496%" ],
   [ "27", "Cranidos", "5.66924%" ],
   [ "28", "Corphish", "5.50318%" ],
   [ "29", "Zigzagoon", "5.19648%" ],
   [ "30", "Munchlax", "5.15273%" ],
   [ "31", "Honedge", "5.03899%" ],
   [ "32", "Staryu", "4.84332%" ],
   [ "33", "Elekid", "4.78426%" ],
   [ "34", "Froakie", "4.50623%" ],
   [ "35", "Vulpix", "4.50401%" ],
   [ "36", "Snubbull", "4.45008%" ],
   [ "37", "Torchic", "4.44835%" ],
   [ "38", "Larvesta", "4.23503%" ],
   [ "39", "Houndour", "4.21034%" ],
   [ "40", "Shellder", "4.07714%" ],
   [ "41", "Aron", "4.00856%" ],
   [ "42", "Clamperl", "3.84538%" ],
   [ "43", "Darumaka", "3.76450%" ],
   [ "44", "Riolu", "3.49542%" ],
   [ "45", "Lileep", "3.47357%" ],
   [ "46", "Koffing", "3.46493%" ],
   [ "47", "Trubbish", "3.41629%" ],
   [ "48", "Axew", "3.38375%" ],
   [ "49", "Inkay", "3.36337%" ],
   [ "50", "Taillow", "3.36197%" ],
   [ "51", "Carvanha", "3.28622%" ],
   [ "52", "Duskull", "3.26093%" ],
   [ "53", "Bulbasaur", "3.21026%" ],
   [ "54", "Frillish", "3.07839%" ],
   [ "55", "Omanyte", "2.99906%" ],
   [ "56", "Slowpoke", "2.96693%" ],
   [ "57", "Bellsprout", "2.94111%" ],
   [ "58", "Cubone", "2.81828%" ],
   [ "59", "Bronzor", "2.78022%" ],
   [ "60", "Anorith", "2.70523%" ],
   [ "61", "Growlithe", "2.65531%" ],
   [ "62", "Eevee", "2.62969%" ],
   [ "63", "Mantyke", "2.60867%" ],
   [ "64", "Natu", "2.54614%" ],
   [ "65", "Hippopotas", "2.52670%" ],
   [ "66", "Tyrunt", "2.51786%" ],
   [ "67", "Tentacool", "2.46204%" ],
   [ "68", "Drifloon", "2.45890%" ],
   [ "69", "Zorua", "2.43135%" ],
   [ "70", "Chimchar", "2.31011%" ],
   [ "71", "Buizel", "2.25350%" ],
   [ "72", "Surskit", "2.24198%" ],
   [ "73", "Cacnea", "2.22713%" ],
   [ "74", "Machop", "2.22222%" ],
   [ "75", "Lickitung", "2.14008%" ],
   [ "76", "Dratini", "2.12175%" ],
   [ "77", "Magby", "2.08254%" ],
   [ "78", "Phantump", "2.00988%" ],
   [ "79", "Buneary", "1.98764%" ],
   [ "80", "Bagon", "1.94764%" ],
   [ "81", "Amaura", "1.91639%" ],
   [ "82", "Stunky", "1.89342%" ],
   [ "83", "Wailmer", "1.89203%" ],
   [ "84", "Meowth", "1.89081%" ],
   [ "85", "Doduo", "1.88779%" ],
   [ "86", "Cyndaquil", "1.86109%" ],
   [ "87", "Voltorb", "1.71187%" ],
   [ "88", "Pineco", "1.68561%" ],
   [ "89", "Charmander", "1.64882%" ],
   [ "90", "Krabby", "1.57732%" ],
   [ "91", "Wooper", "1.56299%" ],
   [ "92", "Sandshrew", "1.53093%" ],
   [ "93", "Minccino", "1.42737%" ],
   [ "94", "Purrloin", "1.41054%" ],
   [ "95", "Spinarak", "1.39232%" ],
   [ "96", "Snover", "1.34929%" ],
   [ "97", "Sandile", "1.34060%" ],
   [ "98", "Trapinch", "1.29437%" ],
   [ "99", "Squirtle", "1.28358%" ],
   [ "100", "Baltoy", "1.27906%" ],
   [ "101", "Blitzle", "1.26479%" ],
   [ "102", "Litleo", "1.26387%" ],
   [ "103", "Grimer", "1.24198%" ],
   [ "104", "Wynaut", "1.20382%" ],
   [ "105", "Gothita", "1.17635%" ],
   [ "106", "Azurill", "1.13665%" ],
   [ "107", "Treecko", "1.10919%" ],
   [ "108", "Pumpkaboo-Super", "1.08881%" ],
   [ "109", "Mankey", "1.06753%" ],
   [ "110", "Helioptile", "1.03737%" ],
   [ "111", "Chespin", "1.02931%" ],
   [ "112", "Nosepass", "1.02772%" ],
   [ "113", "Clauncher", "1.02726%" ],
   [ "114", "Mime Jr.", "1.02260%" ],
   [ "115", "Binacle", "1.00469%" ],
   [ "116", "Chikorita", "0.99094%" ],
   [ "117", "Gible", "0.98899%" ],
   [ "118", "Numel", "0.98824%" ],
   [ "119", "Golett", "0.97648%" ],
   [ "120", "Pancham", "0.96711%" ],
   [ "121", "Shellos", "0.95783%" ],
   [ "122", "Geodude", "0.94356%" ],
   [ "123", "Bidoof", "0.93440%" ],
   [ "124", "Deerling", "0.92745%" ],
   [ "125", "Exeggcute", "0.89773%" ],
   [ "126", "Yamask", "0.88161%" ],
   [ "127", "Bonsly", "0.88087%" ],
   [ "128", "Litwick", "0.87107%" ],
   [ "129", "Starly", "0.85464%" ],
   [ "130", "Woobat", "0.83972%" ],
   [ "131", "Deino", "0.83049%" ],
   [ "132", "Zubat", "0.82563%" ],
   [ "133", "Joltik", "0.81170%" ],
   [ "134", "Ekans", "0.80995%" ],
   [ "135", "Solosis", "0.80261%" ],
   [ "136", "Teddiursa", "0.79927%" ],
   [ "137", "Larvitar", "0.79256%" ],
   [ "138", "Goomy", "0.78305%" ],
   [ "139", "Shroomish", "0.78289%" ],
   [ "140", "Shieldon", "0.76111%" ],
   [ "141", "Rhyhorn", "0.73367%" ],
   [ "142", "Totodile", "0.69250%" ],
   [ "143", "Fennekin", "0.68273%" ],
   [ "144", "Kabuto", "0.66072%" ],
   [ "145", "Togepi", "0.65482%" ],
   [ "146", "Barboach", "0.65261%" ],
   [ "147", "Phanpy", "0.63974%" ],
   [ "148", "Flabebe", "0.63517%" ],
   [ "149", "Drowzee", "0.63338%" ],
   [ "150", "Electrike", "0.60460%" ],
   [ "151", "Beldum", "0.60351%" ],
   [ "152", "Skiddo", "0.59605%" ],
   [ "153", "Bergmite", "0.59252%" ],
   [ "154", "Pichu", "0.57895%" ],
   [ "155", "Elgyem", "0.57847%" ],
   [ "156", "Rattata", "0.56769%" ],
   [ "157", "Happiny", "0.55460%" ],
   [ "158", "Oddish", "0.54085%" ],
   [ "159", "Rufflet", "0.53238%" ],
   [ "160", "Noibat", "0.51553%" ],
   [ "161", "Goldeen", "0.49815%" ],
   [ "162", "Horsea", "0.47800%" ],
   [ "163", "Skrelp", "0.47544%" ],
   [ "164", "Venipede", "0.46755%" ],
   [ "165", "Smoochum", "0.43256%" ],
   [ "166", "Wingull", "0.42873%" ],
   [ "167", "Snivy", "0.42833%" ],
   [ "168", "Espurr", "0.42177%" ],
   [ "169", "Skorupi", "0.38062%" ],
   [ "170", "Shinx", "0.37759%" ],
   [ "171", "Makuhita", "0.37616%" ],
   [ "172", "Swinub", "0.36656%" ],
   [ "173", "Glameow", "0.35316%" ],
   [ "174", "Mudkip", "0.33909%" ],
   [ "175", "Sewaddle", "0.33907%" ],
   [ "176", "Paras", "0.33452%" ],
   [ "177", "Piplup", "0.32948%" ],
   [ "178", "Gulpin", "0.32522%" ],
   [ "179", "Remoraid", "0.32337%" ],
   [ "180", "Tyrogue", "0.32151%" ],
   [ "181", "Cleffa", "0.31699%" ],
   [ "182", "Shuppet", "0.31319%" ],
   [ "183", "Turtwig", "0.31054%" ],
   [ "184", "Shelmet", "0.30514%" ],
   [ "185", "Lotad", "0.30015%" ],
   [ "186", "Poliwag", "0.29257%" ],
   [ "187", "Ralts", "0.28969%" ],
   [ "188", "Hoppip", "0.28947%" ],
   [ "189", "Skitty", "0.28540%" ],
   [ "190", "Pumpkaboo-Small", "0.27923%" ],
   [ "191", "Karrablast", "0.26403%" ],
   [ "192", "Swablu", "0.25696%" ],
   [ "193", "Oshawott", "0.24711%" ],
   [ "194", "Budew", "0.24271%" ],
   [ "195", "Petilil", "0.24126%" ],
   [ "196", "Spheal", "0.22978%" ],
   [ "197", "NidoranM", "0.22939%" ],
   [ "198", "Spoink", "0.22347%" ],
   [ "199", "Mareep", "0.21744%" ],
   [ "200", "Venonat", "0.21459%" ],
];
