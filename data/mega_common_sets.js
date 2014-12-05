var MEGA_COMMON_SETS = {
   0 : {},
   1 : {},
   2 : {},
   3 : {},
   4 : {
      'charizard' : {
         name : 'OU Common',
         nature : 'Adamant',
         ability : 'Tough Claws',
         item : 'Charizardite X',
         moves : [ 'Dragon Dance', 'Roost', 'Dragon Claw', 'Flare Blitz', 'Solar Beam', 'Earthquake', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'scizor' : {
         name : 'OU Common',
         nature : 'Adamant',
         ability : 'Technician',
         item : 'Scizorite',
         moves : [ 'Bullet Punch', 'U-turn', 'Superpower', 'Swords Dance', 'Knock Off', 'Roost', ],
         ev : [ 252, 252, 0, 0, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'salamence' : {
         name : 'OU Common',
         nature : 'Adamant',
         ability : 'Aerilate',
         item : 'Salamencite',
         moves : [ 'Dragon Dance', 'Roost', 'Substitute', 'Return', 'Earthquake', 'Frustration', ],
         ev : [ 248, 152, 0, 0, 56, 52, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'metagross' : {
         name : 'OU Common',
         nature : 'Jolly',
         ability : 'Tough Claws',
         item : 'Metagrossite',
         moves : [ 'Meteor Mash', 'Zen Headbutt', 'Earthquake', 'Bullet Punch', 'Ice Punch', 'Agility', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'venusaur' : {
         name : 'OU Common',
         nature : 'Bold',
         ability : 'Thick Fat',
         item : 'Venusaurite',
         moves : [ 'Giga Drain', 'Sludge Bomb', 'Synthesis', 'Leech Seed', 'Sleep Powder', 'Earthquake', ],
         ev : [ 252, 0, 240, 0, 0, 16, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'gardevoir' : {
         name : 'OU Common',
         nature : 'Timid',
         ability : 'Pixilate',
         item : 'Gardevoirite',
         moves : [ 'Psyshock', 'Hyper Voice', 'Focus Blast', 'Moonblast', 'Calm Mind', 'Taunt', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'sceptile' : {
         name : 'OU Common',
         nature : 'Timid',
         ability : 'Lightning Rod',
         item : 'Sceptilite',
         moves : [ 'Dragon Pulse', 'Focus Blast', 'Giga Drain', 'Substitute', 'Leaf Storm', 'Earthquake', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'sableye' : {
         name : 'OU Common',
         nature : 'Bold',
         ability : 'Magic Bounce',
         item : 'Sablenite',
         moves : [ 'Recover', 'Will-O-Wisp', 'Calm Mind', 'Knock Off', 'Taunt', 'Foul Play', ],
         ev : [ 252, 0, 252, 0, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'gyarados' : {
         name : 'OU Common',
         nature : 'Adamant',
         ability : 'Mold Breaker',
         item : 'Gyaradosite',
         moves : [ 'Waterfall', 'Dragon Dance', 'Earthquake', 'Substitute', 'Ice Fang', 'Crunch', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'swampert' : {
         name : 'OU Common',
         nature : 'Adamant',
         ability : 'Swift Swim',
         item : 'Swampertite',
         moves : [ 'Earthquake', 'Waterfall', 'Ice Punch', 'Superpower', 'Rain Dance', 'Stealth Rock', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'gallade' : {
         name : 'OU Common',
         nature : 'Jolly',
         ability : 'Inner Focus',
         item : 'Galladite',
         moves : [ 'Swords Dance', 'Close Combat', 'Zen Headbutt', 'Knock Off', 'Ice Punch', 'Drain Punch', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'beedrill' : {
         name : 'OU Common',
         nature : 'Jolly',
         ability : 'Adaptability',
         item : 'Beedrillite',
         moves : [ 'Poison Jab', 'U-turn', 'Drill Run', 'Protect', 'Knock Off', 'X-Scissor', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'lopunny' : {
         name : 'OU Common',
         nature : 'Jolly',
         ability : 'Scrappy',
         item : 'Lopunnite',
         moves : [ 'Fake Out', 'Return', 'High Jump Kick', 'Ice Punch', 'Drain Punch', 'Frustration', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'manectric' : {
         name : 'OU Common',
         nature : 'Timid',
         ability : 'Intimidate',
         item : 'Manectite',
         moves : [ 'Volt Switch', 'Thunderbolt', 'Flamethrower', 'Overheat', 'Protect', 'Signal Beam', ],
         ev : [ 0, 0, 0, 252, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'heracross' : {
         name : 'OU Common',
         nature : 'Jolly',
         ability : 'Skill Link',
         item : 'Heracronite',
         moves : [ 'Close Combat', 'Rock Blast', 'Pin Missile', 'Megahorn', 'Bullet Seed', 'Earthquake', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'medicham' : {
         name : 'OU Common',
         nature : 'Jolly',
         ability : 'Pure Power',
         item : 'Medichamite',
         moves : [ 'Fake Out', 'High Jump Kick', 'Psycho Cut', 'Ice Punch', 'Bullet Punch', 'Drain Punch', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'pinsir' : {
         name : 'OU Common',
         nature : 'Jolly',
         ability : 'Aerilate',
         item : 'Pinsirite',
         moves : [ 'Quick Attack', 'Swords Dance', 'Return', 'Close Combat', 'Earthquake', 'Frustration', ],
         ev : [ 0, 252, 4, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'altaria' : {
         name : 'OU Common',
         nature : 'Adamant',
         ability : 'Pixilate',
         item : 'Altarianite',
         moves : [ 'Roost', 'Dragon Dance', 'Earthquake', 'Return', 'Hyper Voice', 'Heal Bell', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'diancie' : {
         name : 'OU Common',
         nature : 'Naive',
         ability : 'Magic Bounce',
         item : 'Diancite',
         moves : [ 'Moonblast', 'Diamond Storm', 'Earth Power', 'Rock Polish', 'Stealth Rock', 'Calm Mind', ],
         ev : [ 0, 4, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'sharpedo' : {
         name : 'OU Common',
         nature : 'Adamant',
         ability : 'Strong Jaw',
         item : 'Sharpedonite',
         moves : [ 'Crunch', 'Waterfall', 'Protect', 'Ice Fang', 'Aqua Jet', 'Destiny Bond', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'blastoise' : {
         name : 'OU Common',
         nature : 'Modest',
         ability : 'Mega Launcher',
         item : 'Blastoisinite',
         moves : [ 'Rapid Spin', 'Dark Pulse', 'Aura Sphere', 'Scald', 'Ice Beam', 'Water Pulse', ],
         ev : [ 252, 0, 0, 252, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'pidgeot' : {
         name : 'OU Common',
         nature : 'Timid',
         ability : 'No Guard',
         item : 'Pidgeotite',
         moves : [ 'Hurricane', 'Heat Wave', 'Roost', 'U-turn', 'Hyper Beam', 'Defog', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'aggron' : {
         name : 'OU Common',
         nature : 'Adamant',
         ability : 'Filter',
         item : 'Aggronite',
         moves : [ 'Stealth Rock', 'Earthquake', 'Heavy Slam', 'Iron Head', 'Head Smash', 'Thunder Wave', ],
         ev : [ 252, 252, 0, 0, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'aerodactyl' : {
         name : 'OU Common',
         nature : 'Jolly',
         ability : 'Tough Claws',
         item : 'Aerodactylite',
         moves : [ 'Stone Edge', 'Earthquake', 'Aerial Ace', 'Taunt', 'Stealth Rock', 'Ice Fang', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'absol' : {
         name : 'OU Common',
         nature : 'Jolly',
         ability : 'Magic Bounce',
         item : 'Absolite',
         moves : [ 'Sucker Punch', 'Knock Off', 'Swords Dance', 'Superpower', 'Play Rough', 'Fire Blast', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'steelix' : {
         name : 'OU Common',
         nature : 'Brave',
         ability : 'Sand Force',
         item : 'Steelixite',
         moves : [ 'Earthquake', 'Gyro Ball', 'Stealth Rock', 'Stone Edge', 'Roar', 'Iron Head', ],
         ev : [ 252, 252, 0, 0, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'ampharos' : {
         name : 'OU Common',
         nature : 'Modest',
         ability : 'Mold Breaker',
         item : 'Ampharosite',
         moves : [ 'Dragon Pulse', 'Thunderbolt', 'Focus Blast', 'Volt Switch', 'Agility', 'Rest', ],
         ev : [ 252, 0, 0, 252, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'camerupt' : {
         name : 'OU Common',
         nature : 'Modest',
         ability : 'Sheer Force',
         item : 'Cameruptite',
         moves : [ 'Earth Power', 'Fire Blast', 'Ancient Power', 'Rock Slide', 'Stealth Rock', 'Flash Cannon', ],
         ev : [ 252, 0, 0, 252, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'glalie' : {
         name : 'OU Common',
         nature : 'Jolly',
         ability : 'Refrigerate',
         item : 'Glalitite',
         moves : [ 'Earthquake', 'Ice Shard', 'Explosion', 'Return', 'Body Slam', 'Double-Edge', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'houndoom' : {
         name : 'OU Common',
         nature : 'Timid',
         ability : 'Solar Power',
         item : 'Houndoominite',
         moves : [ 'Dark Pulse', 'Nasty Plot', 'Fire Blast', 'Flamethrower', 'Destiny Bond', 'Taunt', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'banette' : {
         name : 'OU Common',
         nature : 'Adamant',
         ability : 'Prankster',
         item : 'Banettite',
         moves : [ 'Destiny Bond', 'Shadow Sneak', 'Will-O-Wisp', 'Knock Off', 'Protect', 'Taunt', ],
         ev : [ 252, 252, 0, 0, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'abomasnow' : {
         name : 'OU Common',
         nature : 'Quiet',
         ability : 'Snow Warning',
         item : 'Abomasite',
         moves : [ 'Blizzard', 'Ice Shard', 'Earthquake', 'Giga Drain', 'Energy Ball', 'Shadow Ball', ],
         ev : [ 252, 0, 0, 252, 0, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'audino' : {
         name : 'OU Common',
         nature : 'Impish',
         ability : 'Healer',
         item : 'Audinite',
         moves : [ 'Wish', 'Heal Bell', 'Toxic', 'Protect', 'Knock Off', 'Dazzling Gleam', ],
         ev : [ 100, 0, 156, 0, 252, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
  },
   5 : {
      'mewtwo' : {
         name : 'Ubers Common',
         nature : 'Timid',
         ability : 'Insomnia',
         item : 'Mewtwonite Y',
         moves : [ 'Psystrike', 'Ice Beam', 'Aura Sphere', 'Calm Mind', 'Flamethrower', 'Fire Blast', ],
         ev : [ 0, 0, 0, 252, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'blaziken' : {
         name : 'Ubers Common',
         nature : 'Adamant',
         ability : 'Speed Boost',
         item : 'Blazikenite',
         moves : [ 'Protect', 'Swords Dance', 'Flare Blitz', 'High Jump Kick', 'Baton Pass', 'Blaze Kick', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'gengar' : {
         name : 'Ubers Common',
         nature : 'Timid',
         ability : 'Shadow Tag',
         item : 'Gengarite',
         moves : [ 'Shadow Ball', 'Destiny Bond', 'Taunt', 'Sludge Wave', 'Sludge Bomb', 'Focus Blast', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'kangaskhan' : {
         name : 'Ubers Common',
         nature : 'Jolly',
         ability : 'Parental Bond',
         item : 'Kangaskhanite',
         moves : [ 'Sucker Punch', 'Power-Up Punch', 'Fake Out', 'Return', 'Earthquake', 'Crunch', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'charizard' : {
         name : 'Ubers Common',
         nature : 'Timid',
         ability : 'Tough Claws',
         item : 'Charizardite X',
         moves : [ 'Flamethrower', 'Solar Beam', 'Dragon Pulse', 'Dragon Claw', 'Air Slash', 'Dragon Dance', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'lucario' : {
         name : 'Ubers Common',
         nature : 'Jolly',
         ability : 'Adaptability',
         item : 'Lucarionite',
         moves : [ 'Bullet Punch', 'Close Combat', 'Swords Dance', 'Iron Tail', 'Aura Sphere', 'Extreme Speed', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'salamence' : {
         name : 'Ubers Common',
         nature : 'Adamant',
         ability : 'Aerilate',
         item : 'Salamencite',
         moves : [ 'Dragon Dance', 'Earthquake', 'Return', 'Roost', 'Dragon Claw', 'Substitute', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'garchomp' : {
         name : 'Ubers Common',
         nature : 'Jolly',
         ability : 'Sand Force',
         item : 'Garchompite',
         moves : [ 'Earthquake', 'Dragon Claw', 'Outrage', 'Stone Edge', 'Swords Dance', 'Poison Jab', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'metagross' : {
         name : 'Ubers Common',
         nature : 'Jolly',
         ability : 'Tough Claws',
         item : 'Metagrossite',
         moves : [ 'Meteor Mash', 'Earthquake', 'Zen Headbutt', 'Bullet Punch', 'Ice Punch', 'Hammer Arm', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'sceptile' : {
         name : 'Ubers Common',
         nature : 'Timid',
         ability : 'Lightning Rod',
         item : 'Sceptilite',
         moves : [ 'Dragon Pulse', 'Leaf Storm', 'Leaf Blade', 'Focus Blast', 'Giga Drain', 'Earthquake', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'mawile' : {
         name : 'Ubers Common',
         nature : 'Adamant',
         ability : 'Huge Power',
         item : 'Mawilite',
         moves : [ 'Play Rough', 'Sucker Punch', 'Swords Dance', 'Iron Head', 'Protect', 'Fire Fang', ],
         ev : [ 252, 252, 0, 0, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'swampert' : {
         name : 'Ubers Common',
         nature : 'Adamant',
         ability : 'Swift Swim',
         item : 'Swampertite',
         moves : [ 'Earthquake', 'Waterfall', 'Ice Punch', 'Stealth Rock', 'Roar', 'Rain Dance', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'gardevoir' : {
         name : 'Ubers Common',
         nature : 'Modest',
         ability : 'Pixilate',
         item : 'Gardevoirite',
         moves : [ 'Moonblast', 'Psychic', 'Psyshock', 'Energy Ball', 'Focus Blast', 'Shadow Ball', ],
         ev : [ 252, 0, 0, 252, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'sableye' : {
         name : 'Ubers Common',
         nature : 'Bold',
         ability : 'Magic Bounce',
         item : 'Sablenite',
         moves : [ 'Recover', 'Will-O-Wisp', 'Foul Play', 'Taunt', 'Knock Off', 'Protect', ],
         ev : [ 248, 0, 252, 0, 8, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'venusaur' : {
         name : 'Ubers Common',
         nature : 'Calm',
         ability : 'Thick Fat',
         item : 'Venusaurite',
         moves : [ 'Giga Drain', 'Sludge Bomb', 'Leech Seed', 'Synthesis', 'Sleep Powder', 'Toxic', ],
         ev : [ 248, 0, 0, 8, 252, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'diancie' : {
         name : 'Ubers Common',
         nature : 'Naive',
         ability : 'Magic Bounce',
         item : 'Diancite',
         moves : [ 'Diamond Storm', 'Moonblast', 'Earth Power', 'Stealth Rock', 'Protect', 'Calm Mind', ],
         ev : [ 0, 4, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'gallade' : {
         name : 'Ubers Common',
         nature : 'Jolly',
         ability : 'Inner Focus',
         item : 'Galladite',
         moves : [ 'Psycho Cut', 'Close Combat', 'Drain Punch', 'Leaf Blade', 'Ice Punch', 'Swords Dance', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'blastoise' : {
         name : 'Ubers Common',
         nature : 'Modest',
         ability : 'Mega Launcher',
         item : 'Blastoisinite',
         moves : [ 'Aura Sphere', 'Rapid Spin', 'Dark Pulse', 'Water Pulse', 'Ice Beam', 'Hydro Pump', ],
         ev : [ 252, 0, 0, 252, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'aggron' : {
         name : 'Ubers Common',
         nature : 'Adamant',
         ability : 'Filter',
         item : 'Aggronite',
         moves : [ 'Earthquake', 'Iron Head', 'Stealth Rock', 'Roar', 'Heavy Slam', 'Head Smash', ],
         ev : [ 252, 252, 0, 0, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'alakazam' : {
         name : 'Ubers Common',
         nature : 'Timid',
         ability : 'Trace',
         item : 'Alakazite',
         moves : [ 'Psychic', 'Shadow Ball', 'Dazzling Gleam', 'Focus Blast', 'Energy Ball', 'Psyshock', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'steelix' : {
         name : 'Ubers Common',
         nature : 'Adamant',
         ability : 'Sand Force',
         item : 'Steelixite',
         moves : [ 'Earthquake', 'Stealth Rock', 'Gyro Ball', 'Iron Head', 'Dragon Tail', 'Stone Edge', ],
         ev : [ 252, 252, 0, 0, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'absol' : {
         name : 'Ubers Common',
         nature : 'Jolly',
         ability : 'Magic Bounce',
         item : 'Absolite',
         moves : [ 'Sucker Punch', 'Swords Dance', 'Knock Off', 'Superpower', 'Play Rough', 'Psycho Cut', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'manectric' : {
         name : 'Ubers Common',
         nature : 'Timid',
         ability : 'Intimidate',
         item : 'Manectite',
         moves : [ 'Thunderbolt', 'Volt Switch', 'Flamethrower', 'Overheat', 'Thunder', 'Signal Beam', ],
         ev : [ 0, 0, 0, 252, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'pidgeot' : {
         name : 'Ubers Common',
         nature : 'Timid',
         ability : 'No Guard',
         item : 'Pidgeotite',
         moves : [ 'Hurricane', 'Heat Wave', 'Roost', 'U-turn', 'Brave Bird', 'Protect', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'sharpedo' : {
         name : 'Ubers Common',
         nature : 'Adamant',
         ability : 'Strong Jaw',
         item : 'Sharpedonite',
         moves : [ 'Crunch', 'Protect', 'Waterfall', 'Ice Fang', 'Aqua Jet', 'Destiny Bond', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'beedrill' : {
         name : 'Ubers Common',
         nature : 'Jolly',
         ability : 'Adaptability',
         item : 'Beedrillite',
         moves : [ 'Poison Jab', 'Drill Run', 'U-turn', 'Knock Off', 'X-Scissor', 'Protect', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'altaria' : {
         name : 'Ubers Common',
         nature : 'Adamant',
         ability : 'Pixilate',
         item : 'Altarianite',
         moves : [ 'Roost', 'Return', 'Dragon Dance', 'Earthquake', 'Heal Bell', 'Dragon Claw', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'lopunny' : {
         name : 'Ubers Common',
         nature : 'Jolly',
         ability : 'Scrappy',
         item : 'Lopunnite',
         moves : [ 'Fake Out', 'Return', 'Ice Punch', 'High Jump Kick', 'Drain Punch', 'Power-Up Punch', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'medicham' : {
         name : 'Ubers Common',
         nature : 'Jolly',
         ability : 'Pure Power',
         item : 'Medichamite',
         moves : [ 'Ice Punch', 'Bullet Punch', 'Fake Out', 'Drain Punch', 'High Jump Kick', 'Psycho Cut', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'ampharos' : {
         name : 'Ubers Common',
         nature : 'Modest',
         ability : 'Mold Breaker',
         item : 'Ampharosite',
         moves : [ 'Dragon Pulse', 'Thunderbolt', 'Focus Blast', 'Agility', 'Power Gem', 'Volt Switch', ],
         ev : [ 44, 0, 4, 252, 4, 204, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'aerodactyl' : {
         name : 'Ubers Common',
         nature : 'Jolly',
         ability : 'Tough Claws',
         item : 'Aerodactylite',
         moves : [ 'Earthquake', 'Dragon Claw', 'Roost', 'Stealth Rock', 'Stone Edge', 'Aerial Ace', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'camerupt' : {
         name : 'Ubers Common',
         nature : 'Modest',
         ability : 'Sheer Force',
         item : 'Cameruptite',
         moves : [ 'Earth Power', 'Eruption', 'Flash Cannon', 'Flamethrower', 'Rock Slide', 'Earthquake', ],
         ev : [ 252, 0, 0, 252, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'houndoom' : {
         name : 'Ubers Common',
         nature : 'Timid',
         ability : 'Solar Power',
         item : 'Houndoominite',
         moves : [ 'Dark Pulse', 'Fire Blast', 'Sludge Bomb', 'Flamethrower', 'Nasty Plot', 'Destiny Bond', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'glalie' : {
         name : 'Ubers Common',
         nature : 'Jolly',
         ability : 'Refrigerate',
         item : 'Glalitite',
         moves : [ 'Explosion', 'Ice Shard', 'Spikes', 'Return', 'Earthquake', 'Double-Edge', ],
         ev : [ 0, 252, 4, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'abomasnow' : {
         name : 'Ubers Common',
         nature : 'Mild',
         ability : 'Snow Warning',
         item : 'Abomasite',
         moves : [ 'Ice Shard', 'Blizzard', 'Wood Hammer', 'Giga Drain', 'Earthquake', 'Leech Seed', ],
         ev : [ 0, 124, 0, 132, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'banette' : {
         name : 'Ubers Common',
         nature : 'Bold',
         ability : 'Prankster',
         item : 'Banettite',
         moves : [ 'Destiny Bond', 'Protect', 'Taunt', 'Will-O-Wisp', 'Shadow Sneak', 'Confuse Ray', ],
         ev : [ 248, 0, 252, 0, 8, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'pinsir' : {
         name : 'Ubers Common',
         nature : 'Jolly',
         ability : 'Aerilate',
         item : 'Pinsirite',
         moves : [ 'Swords Dance', 'Quick Attack', 'Return', 'Earthquake', 'X-Scissor', 'Close Combat', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'audino' : {
         name : 'Ubers Common',
         nature : 'Careful',
         ability : 'Healer',
         item : 'Audinite',
         moves : [ 'Wish', 'Protect', 'Heal Bell', 'Toxic', 'Dazzling Gleam', 'Knock Off', ],
         ev : [ 252, 4, 0, 0, 252, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
  },
   6 : {
      'mawile' : {
         name : 'VGC Common',
         nature : 'Adamant',
         ability : 'Huge Power',
         item : 'Mawilite',
         moves : [ 'Play Rough', 'Protect', 'Sucker Punch', 'Iron Head', 'Rock Slide', 'Fire Fang', ],
         ev : [ 252, 252, 0, 0, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'gardevoir' : {
         name : 'VGC Common',
         nature : 'Modest',
         ability : 'Pixilate',
         item : 'Gardevoirite',
         moves : [ 'Psychic', 'Protect', 'Moonblast', 'Hyper Voice', 'Dazzling Gleam', 'Psyshock', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'charizard' : {
         name : 'VGC Common',
         nature : 'Modest',
         ability : 'Drought',
         item : 'Charizardite Y',
         moves : [ 'Protect', 'Heat Wave', 'Solar Beam', 'Overheat', 'Dragon Claw', 'Flare Blitz', ],
         ev : [ 72, 0, 176, 252, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'kangaskhan' : {
         name : 'VGC Common',
         nature : 'Jolly',
         ability : 'Parental Bond',
         item : 'Kangaskhanite',
         moves : [ 'Sucker Punch', 'Power-Up Punch', 'Fake Out', 'Return', 'Protect', 'Double-Edge', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'venusaur' : {
         name : 'VGC Common',
         nature : 'Modest',
         ability : 'Thick Fat',
         item : 'Venusaurite',
         moves : [ 'Sludge Bomb', 'Protect', 'Sleep Powder', 'Giga Drain', 'Leech Seed', 'Grass Pledge', ],
         ev : [ 220, 0, 196, 28, 4, 60, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'gyarados' : {
         name : 'VGC Common',
         nature : 'Adamant',
         ability : 'Mold Breaker',
         item : 'Gyaradosite',
         moves : [ 'Waterfall', 'Protect', 'Dragon Dance', 'Earthquake', 'Ice Fang', 'Thunder Wave', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'lucario' : {
         name : 'VGC Common',
         nature : 'Jolly',
         ability : 'Adaptability',
         item : 'Lucarionite',
         moves : [ 'Close Combat', 'Protect', 'Bullet Punch', 'Follow Me', 'Rock Slide', 'Flash Cannon', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'manectric' : {
         name : 'VGC Common',
         nature : 'Timid',
         ability : 'Intimidate',
         item : 'Manectite',
         moves : [ 'Protect', 'Volt Switch', 'Thunderbolt', 'Overheat', 'Flamethrower', 'Snarl', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'blastoise' : {
         name : 'VGC Common',
         nature : 'Modest',
         ability : 'Mega Launcher',
         item : 'Blastoisinite',
         moves : [ 'Aura Sphere', 'Water Spout', 'Ice Beam', 'Protect', 'Fake Out', 'Water Pulse', ],
         ev : [ 36, 0, 0, 252, 0, 220, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'abomasnow' : {
         name : 'VGC Common',
         nature : 'Quiet',
         ability : 'Snow Warning',
         item : 'Abomasite',
         moves : [ 'Blizzard', 'Protect', 'Ice Shard', 'Energy Ball', 'Wood Hammer', 'Focus Blast', ],
         ev : [ 252, 4, 0, 252, 0, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'ampharos' : {
         name : 'VGC Common',
         nature : 'Timid',
         ability : 'Mold Breaker',
         item : 'Ampharosite',
         moves : [ 'Thunderbolt', 'Dragon Pulse', 'Protect', 'Discharge', 'Sleep Talk', 'Thunder Wave', ],
         ev : [ 20, 0, 0, 252, 4, 228, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'medicham' : {
         name : 'VGC Common',
         nature : 'Jolly',
         ability : 'Pure Power',
         item : 'Medichamite',
         moves : [ 'Fake Out', 'Drain Punch', 'Psycho Cut', 'Ice Punch', 'Protect', 'High Jump Kick', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'aggron' : {
         name : 'VGC Common',
         nature : 'Impish',
         ability : 'Filter',
         item : 'Aggronite',
         moves : [ 'Iron Head', 'Protect', 'Earthquake', 'Stone Edge', 'Head Smash', 'Rock Slide', ],
         ev : [ 252, 252, 4, 0, 0, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'pinsir' : {
         name : 'VGC Common',
         nature : 'Jolly',
         ability : 'Aerilate',
         item : 'Pinsirite',
         moves : [ 'Return', 'Protect', 'Close Combat', 'X-Scissor', 'Feint', 'Earthquake', ],
         ev : [ 4, 252, 0, 0, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'banette' : {
         name : 'VGC Common',
         nature : 'Adamant',
         ability : 'Prankster',
         item : 'Banettite',
         moves : [ 'Protect', 'Will-O-Wisp', 'Disable', 'Shadow Claw', 'Destiny Bond', 'Phantom Force', ],
         ev : [ 252, 0, 68, 0, 188, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'sharpedo' : {
         name : 'VGC Common',
         nature : 'Adamant',
         ability : 'Strong Jaw',
         item : 'Sharpedonite',
         moves : [ 'Protect', 'Ice Fang', 'Waterfall', 'Crunch', 'Aqua Jet', 'Ice Beam', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'altaria' : {
         name : 'VGC Common',
         nature : 'Modest',
         ability : 'Pixilate',
         item : 'Altarianite',
         moves : [ 'Protect', 'Hyper Voice', 'Flamethrower', 'Dragon Pulse', 'Draco Meteor', 'Tailwind', ],
         ev : [ 252, 0, 0, 252, 4, 0, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'houndoom' : {
         name : 'VGC Common',
         nature : 'Timid',
         ability : 'Solar Power',
         item : 'Houndoominite',
         moves : [ 'Heat Wave', 'Dark Pulse', 'Protect', 'Sludge Bomb', 'Overheat', 'Solar Beam', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'absol' : {
         name : 'VGC Common',
         nature : 'Jolly',
         ability : 'Magic Bounce',
         item : 'Absolite',
         moves : [ 'Protect', 'Sucker Punch', 'Will-O-Wisp', 'Rock Slide', 'Night Slash', 'Detect', ],
         ev : [ 252, 16, 0, 0, 0, 240, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'beedrill' : {
         name : 'VGC Common',
         nature : 'Adamant',
         ability : 'Adaptability',
         item : 'Beedrillite',
         moves : [ 'Poison Jab', 'Protect', 'U-turn', 'Drill Run', 'X-Scissor', 'Knock Off', ],
         ev : [ 0, 252, 0, 0, 4, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
      'pidgeot' : {
         name : 'VGC Common',
         nature : 'Timid',
         ability : 'No Guard',
         item : 'Pidgeotite',
         moves : [ 'Protect', 'Hurricane', 'Heat Wave', 'Air Slash', 'Tailwind', 'Agility', ],
         ev : [ 4, 0, 0, 252, 0, 252, ],
         iv : [ 31, 31, 31, 31, 31, 31, ],
      },
  },
   7 : {
  },
};