#/usr/bin/perl

print <<END;
<!DOCTYPE html>
<html>
   <head>
      <title>SweeperCalc - A Generation VI Pokemon Damage Calculator</title>
      <meta name="description" content="A 6v6 damage calculator for finding your Pokemon team's best sweepers.">
      <meta name="keywords" content="Pokemon,gen6,damage,calculator">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Bootstrap -->
      <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-theme.min.css">
      <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
      <link rel="stylesheet" href="sweeperstyles.css">
      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
      <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
      <script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
      <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
      <!-- Include all compiled plugins (below), or include individual files as needed -->
      <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>

      <script src="abilities_list.js"></script>
      <script src="item_list.js"></script>
      <script src="moves_list.js"></script>
      <script src="multi_hit_moves.js"></script>
      <script src="mega_evos.js"></script>
      <script src="pokemon_list.js"></script>
      <script src="pokemon_sets.js"></script>
      <script src="default_pokemon_sets.js"></script>
      <script src="items.js"></script>
      <script src="hidden_power.js"></script>
      <script src="abilities.js"></script>
      <script src="moves_data.js"></script>
      <script src="fully_evolved.js"></script>
      <script src="type_data.js"></script>
      <script src="misc_sets.js"></script>
      <script src="natural_gift_berries.js"></script>
      <script src="pokemon_data.js"></script>
      <script src="natures.js"></script>
      <script src="constants.js"></script>
      <script src="validation.js"></script>
      <script src="description_builder.js"></script>
      <script src="calc.js"></script>
      <script src="pokemon.js"></script>
      <script src="import_parser.js"></script>
      <script src="environment.js"></script>
      <script src="form_handler.js"></script>
      <script src="analytics.js"></script>
      <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!--[if lt IE 9]>
      <script src="../../assets/js/html5shiv.js"></script>
      <script src="../../assets/js/respond.min.js"></script>
      <![endif]-->
   </head>
   <body>
      <div class="container">
         <div class="row"><!-- triple column row -->
            <div class="col-xs-12">
               <h1>SweeperCalc <em>(Beta)</em></h1>
               <em>A Pokemon damage calculator used for finding out your best sweepers</em>
               <em class="em-right"><a href="rmt/index.html">bReakMyTeam</a> | <a href="mailto:sweepercalc\@gmail.com">Give Feedback</a> | <a href="javascript:;" onclick="document.getElementById('paypal').submit();">Donate</a> | <a data-toggle="modal" data-target="#myModal2">Not Yet Implemented</a></em>
               <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" id="paypal">
                  <input type="hidden" name="cmd" value="_donations">
                  <input type="hidden" name="business" value="sweepercalc\@gmail.com">
                  <input type="hidden" name="lc" value="AU">
                  <input type="hidden" name="item_name" value="SweeperCalc">
                  <input type="hidden" name="no_note" value="0">
                  <input type="hidden" name="currency_code" value="AUD">
                  <input type="hidden" name="bn" value="PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest">
               </form>
               <div><p id="output" class="bold"></p></div>
            </div>
         </div>
END
#body starts here
print <<END;
         <div class="row">
            <div class="col-xs-12">
END
printTable();
print <<END;
            </div>   
         </div>
         <div class="row">   
            <div class="col-xs-6">
END
printTeamOne();
print <<END;
            </div>
            <div class="col-xs-6">
END
printTeamTwo();
printEnvironment();
print <<END;
            </div>
         </div>
END
#body ends here
print <<END;
      </div><!-- close container -->
END

printModal();
printModal2();

print <<END;
   </body>
</html>
END

#printPokemon
sub printPokemon {
   (my $x, my $y) = @_;
   print <<END;
         <div class="pokemon" id="pokemon-$x-$y">
            <div class="panel panel-default">
               <div class="panel-heading panel-padding" data-toggle="collapse" data-target="#collapse-$x-$y">
                     <div class="form-group form-margin">
                        <div class="col-xs-12">
                           <input type="text" class="form-control pokemon-name input" placeholder="Bulbasaur">
                        </div>
                     </div>
               </div><!-- close panel heading -->
               <div id="collapse-$x-$y" class="panel-collapse collapse in">
                  <div class="panel-body">
                     <div class="form-group form-margin">
                        <label class="col-xs-3 control-label col-padding">Set</label>
                        <div class="col-xs-9 col-padding">
                           <select class="form-control pokemon-set input-set input-sm input-nopadding">
                           <option value="" selected> </option>
                           </select>
                        </div>
                     </div>
                     <div class="form-group form-margin">
                        <label class="col-xs-3 control-label col-padding">Item</label>
                        <div class="col-xs-9 col-padding">
                           <input type="text" class="form-control pokemon-item input input-sm input-nopadding">
                        </div>
                     </div>
                     <div class="form-group form-margin">
                        <label class="col-xs-3 control-label col-padding">Ability</label>
                        <div class="col-xs-9 col-padding">
                           <input type="text" class="form-control ability input input-sm input-nopadding">
                        </div>
                     </div>
END

   print <<END;
                     <div class="form-group form-margin">
                        <label class="col-xs-3 control-label col-padding">Nature</label>
                        <div class="col-xs-9 col-padding">
                           <select class="form-control nature input input-sm input-nopadding">
                              <option value="Adamant">Adamant (+Atk -SpA)</option>
                              <option value="Bashful">Bashful</option>
                              <option value="Bold">Bold (+Def -Atk)</option>
                              <option value="Brave">Brave (+Atk -Spe)</option>
                              <option value="Calm">Calm (+SpD -Atk)</option>
                              <option value="Careful">Careful (+SpD -SpA)</option>
                              <option value="Docile">Docile</option>
                              <option value="Gentle">Gentle (+SpD -Def)</option>
                              <option value="Hardy" selected>Hardy</option>
                              <option value="Hasty">Hasty (+Spe -Def)</option>
                              <option value="Impish">Impish (+Def -SpA)</option>
                              <option value="Jolly">Jolly (+Spe -SpA)</option>
                              <option value="Lax">Lax (+Def -SpD)</option>
                              <option value="Lonely">Lonely (+Atk -Def)</option>
                              <option value="Mild">Mild (+SpA -Def)</option>
                              <option value="Modest">Modest (+SpA -Atk)</option>
                              <option value="Naive">Naive (+Spe -SpD)</option>
                              <option value="Naughty">Naughty (+Atk -SpD)</option>
                              <option value="Quiet">Quiet (+SpA -Spe)</option>
                              <option value="Quirky">Quirky</option>
                              <option value="Rash">Rash (+SpA -SpD)</option>
                              <option value="Relaxed">Relaxed (+Def -Spe)</option>
                              <option value="Sassy">Sassy (+SpD -Spe)</option>
                              <option value="Serious">Serious</option>
                              <option value="Timid">Timid (+Spe -Atk)</option>
                           </select>
                        </div>
                     </div>
                     <div class="row">
                        <label class="col-xs-3 control-label col-padding"></label>
                        <label class="col-xs-2 control-label col-padding">IV</label>
                        <label class="col-xs-2 control-label col-padding">EV</label>
                        <label class="col-xs-2 control-label col-padding">Stat</label> 
                        <label class="col-xs-3 control-label col-padding">Boost</label>
                     </div>
END
   sub printStatname {
      (my $x) = @_;
      if ($x == 0){
         return 'HP';
      } elsif ($x == 1) {
         return 'Atk';
      } elsif ($x == 2) {
         return 'Def';
      } elsif ($x == 3) {
         return 'SpA';
      } elsif ($x == 4) {
         return 'SpD';
      } else {
         return 'Spe';
      }
   }
   
   if($x == 0) {
      @statstouse = (0,1,0,1,0,0);
   } else {
      @statstouse = (1,0,1,0,1,0);
   }
   for $z (0 .. 5){
   $statname = printStatname($z);
   if ($statstouse[$z] == 1){
      print <<END;
                     <div class="form-group form-margin">
                        <label class="col-xs-3 control-label col-padding">$statname</label>
                        <div class="col-xs-2 col-padding">
                           <input type="text" class="form-control iv-$z input input-sm input-nopadding input-align" value="31">
                        </div>
                        <div class="col-xs-2 col-padding">
                           <input type="text" class="form-control ev-$z input input-sm input-nopadding input-align" value="0">
                        </div>
                        <div class="col-xs-2 col-padding">
                           <input type="text" class="form-control stat-$z input-sm input-nopadding input-align" placeholder="000" disabled>
                        </div>
                        <div class="col-xs-3 col-padding">
                           <select class="form-control statBoost-$z input input-sm input-nopadding">
                           <option value="6">+6</option>
                           <option value="5">+5</option>
                           <option value="4">+4</option>
                           <option value="3">+3</option>
                           <option value="2">+2</option>
                           <option value="1">+1</option>
                           <option value="0" selected>--</option>
                           <option value="-1">-1</option>
                           <option value="-2">-2</option>
                           <option value="-3">-3</option>
                           <option value="-4">-4</option>
                           <option value="-5">-5</option>
                           <option value="-6">-6</option>
                           </select>
                        </div>
                     </div>   
END
   } 
   }
   if ($x == 0) {
      for $z (0 .. 3){
         print <<END;
                     <div class="form-group form-margin">
                        <label class="col-xs-3 control-label col-padding">Move</label>
                        <div class="col-xs-9 col-padding">
                           <input type="text" class="form-control move-$z input input-sm input-nopadding">
                        </div>
                     </div>
END
      }
   }
print <<END;
                     <div class="row">
                        <div class="col-xs-3 col-padding">
                        </div>
                        <div class="col-xs-9 col-padding">
                           <button type="button" class="btn btn-default btn-block form-margin" data-toggle="collapse" data-target="#collapse-$x-$y-hidden">
                              Advanced
                           </button>
                        </div>
                     </div><!-- close misc row -->
                     <div id="collapse-$x-$y-hidden" class="collapse">
                        <div class="form-group form-margin">
                           <label class="col-xs-3 control-label col-padding">Status</label>
                           <div class="col-xs-9 col-padding">
                              <select class="form-control status input input-sm input-nopadding">
                                 <option value="0" selected> -- </option>
                                 <option value="1">Paralyse</option>
                                 <option value="2">Poison</option>
                                 <option value="3">Sleep</option>
                                 <option value="4">Burn</option>
                                 <option value="5">Frozen</option>
                              </select>
                           </div>
                        </div>
                        <div class="form-group form-margin">
                           <label class="col-xs-3 control-label col-padding">Level</label>
                           <div class="col-xs-9 col-padding">
                              <input type="text" class="form-control pokemon-level input input-sm input-nopadding">
                           </div>
                        </div>
                        <div class="form-group form-margin">
                           <label class="col-xs-3 control-label col-padding">Gender</label>
                           <div class="col-xs-9 col-padding">
                              <select class="form-control gender input input-sm input-nopadding">
                                 <option value="0" selected>Male</option>
                                 <option value="1">Female</option>
                                 <option value="2">Genderless</option>
                              </select>
                           </div>
                        </div>
END
for $z (0 .. 5){
   $statname = printStatname($z);
   if ($statstouse[$z] == 0){
      print <<END;
                        <div class="form-group form-margin">
                           <label class="col-xs-3 control-label col-padding">$statname</label>
                           <div class="col-xs-2 col-padding">
                              <input type="text" class="form-control iv-$z input input-sm input-nopadding input-align" value="31">
                           </div>
                           <div class="col-xs-2 col-padding">
                              <input type="text" class="form-control ev-$z input input-sm input-nopadding input-align" value="0">
                           </div>
                           <div class="col-xs-2 col-padding">
                              <input type="text" class="form-control stat-$z input-sm input-nopadding input-align" placeholder="000" disabled>
                           </div>
                           <div class="col-xs-3 col-padding">
                              <select class="form-control statBoost-$z input input-sm input-nopadding">
                                 <option value="6">+6</option>
                                 <option value="5">+5</option>
                                 <option value="4">+4</option>
                                 <option value="3">+3</option>
                                 <option value="2">+2</option>
                                 <option value="1">+1</option>
                                 <option value="0" selected>--</option>
                                 <option value="-1">-1</option>
                                 <option value="-2">-2</option>
                                 <option value="-3">-3</option>
                                 <option value="-4">-4</option>
                                 <option value="-5">-5</option>
                                 <option value="-6">-6</option>
                              </select>
                           </div>
                        </div>   
END
   } 
}

print <<END;
                        <div class="form-group form-margin">
                           <label class="col-xs-3 control-label col-padding">cHP <span data-toggle="tooltip" class="glyphicon glyphicon-question-sign cHPTooltip"></span></label>
                           <div class="col-xs-7 col-padding slider-padding">
                              <div class="cHPSlider">
                              </div>
                           </div>
                           <div class="col-xs-2 col-padding">
                              <input type="text" class="form-control cHP input-sm input-nopadding input-align" placeholder="000" disabled>
                           </div>
                        </div>
                        <div class="form-group form-margin">
                           <label class="col-xs-3 control-label col-padding">HP Type</label>
                           <div class="col-xs-9 col-padding">
                              <input type="text" class="form-control HPType input-sm input-nopadding" placeholder="Dark" disabled>
                           </div>
                        </div>
END
   if ($x == 1) {
      for $z (0 .. 3){
         print <<END;
                        <div class="form-group form-margin">
                           <label class="col-xs-3 control-label col-padding">Move</label>
                           <div class="col-xs-9 col-padding">
                              <input type="text" class="form-control move-$z input input-sm input-nopadding">
                           </div>
                        </div>
END
      }
   }
print <<END;
                     </div><!-- close hidden -->
                  </div><!-- close panel body -->
               </div><!-- close panel collapse id -->
            </div><!-- close panel div -->
         </div><!-- close pokemon div -->
END
}

#printTable
sub printTable {
   print <<END;
               <table class="table table-bordered">
                  <TR>
                     <td class="active"></td>
END
   for $x (0 .. 5) {
      print <<END;
                     <td class="active" id="pokeman-1-$x">$x:</td>
END
}

   print <<END;
                  </TR>
END

   for $x (0 .. 5) {
      print <<END;
                  <TR>
                     <td class="active" id="pokeman-0-$x">$x:</td>
END
	for $y (0 .. 5) {
		print <<END;
                     <td class="active tdpopover" id="square-$x-$y" rel="popover">0%</td>
END
	}
	print <<END;
                  </TR>
END
   }
   print <<END;
               </table>
END
   
}

#printEnvironment
sub printEnvironment {
   print <<END;
            <div class="panel panel-default enviropanel">
               <div class="panel-heading environment-padding" data-toggle="collapse" data-target="#enviro">
                     <div class="form-group form-margin">
                        <div class="col-xs-12">
                           <h4 class="h4padding">Other Variables</h4>
                        </div>
                     </div>
               </div><!-- close panel heading -->
               <div id="enviro" class="panel-collapse collapse in">
                  <div class="panel-body"> 
                     <div class="row">
                        <div class="col-xs-12">
                           <form class="form-horizontal" role="form">
                              <div class="form-group form-margin">
                                 <label class="col-xs-4 control-label col-padding">Weather</label>
                                 <div class="col-xs-8 col-padding">
                                    <select class="form-control input-enviro input-xs input-nopadding" id="weather">
                                       <option value="0">None</option>
                                       <option value="1">Sun</option>
                                       <option value="2">Rain</option>
                                       <option value="3">Sand</option>
                                       <option value="4">Hail</option>
                                    </select>
                                 </div>
                              </div>
                              <div class="form-group form-margin">
                                 <label class="col-xs-4 control-label col-padding">Light Screen</label>
                                 <div class="col-xs-8 col-padding">
                                 <input type="checkbox" class="input-enviro e-check" id="lightScreen">   
                                 </div>
                              </div>
                              <div class="form-group form-margin">
                                 <label class="col-xs-4 control-label col-padding">Reflect</label>
                                 <div class="col-xs-8 col-padding">
                                 <input type="checkbox" class="input-enviro e-check" id="reflect">   
                                 </div>
                              </div>
                              <div class="form-group form-margin">
                                 <label class="col-xs-4 control-label col-padding">Trick Room</label>
                                 <div class="col-xs-8 col-padding">
                                 <input type="checkbox" class="input-enviro e-check" id="trickRoom">   
                                 </div>
                              </div>
                              <div class="form-group form-margin">
                                 <label class="col-xs-4 control-label col-padding">Set Levels</label>
                                 <div class="col-xs-8 col-padding">
                                    <select class="form-control input-enviro input-xs input-nopadding" id="setLevels">
                                       <option value="100" selected>100</option>
                                       <option value="50">50</option>
                                       <option value="5">5</option>
                                    </select>
                                 </div>
                              </div>
                              <div class="form-group form-margin">
                                 <label class="col-xs-4 control-label col-padding">Multi-Hit</label>
                                 <div class="col-xs-8 col-padding">
                                    <select class="form-control input-enviro input-xs input-nopadding" id="multihit">
                                       <option value="0" selected>Display full Damage-Range</option>
                                       <option value="1">Display as Single-Hit</option>
                                    </select>
                                 </div>
                              </div>
                           </form>
                              <div class="form-group form-margin">
                                 <label class="col-xs-4 control-label col-padding"> </label>
                                 <div class="col-xs-8 col-padding">
                                    <button class="btn btn-warning btn-sm in" id="pre-reset">Reset All</button>
                                    <button class="btn btn-danger btn-sm collapse" id="reset-all">Are You Sure?</button>
                                 </div>
                              </div>
                        </div><!-- close sm 12 -->
                     </div>
                  </div><!-- close panel body -->
               </div><!-- close panel collapse id -->
            </div><!-- close panel div -->
END
}

#printTeamOne
sub printTeamOne{
   print <<END;
               <div class="panel panel-default teampanel">
                  <div class="panel-heading teampanelheading">
                     <div class="row">
                        <div class="col-xs-6">
                           <h2 class="team">Your team</h2>
                        </div>
                        <div class="col-xs-6">
                           <h2 class="align-right">
                              <button class="btn btn-primary btn-xs" data-toggle="collapse" data-target="#team0" id="collapseTeam0">Collapse</button>
                              <button class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal">Import</button>
                              <button class="btn btn-warning btn-xs switch">Switch</button>
                              <button class="btn btn-danger btn-xs reset-team" id="reset-0">Reset</button>
                           </h2>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="team0" class="collapse in">
                  <form class="form-horizontal" role="form">
END
   for $x (0 .. 5) {
   printPokemon(0, $x);
   }
   print <<END;
                  </form>
               </div>
END
}

#printTeamTwo
sub printTeamTwo {
   print <<END;
               <div class="panel panel-default teampanel">
                  <div class="panel-heading teampanelheading">
                     <div class="row">
                        <div class="col-xs-7">
                           <h2>Target Team</h2>
                        </div>
                        <div class="col-xs-5">
                           <h2 class="align-right">
                              <button class="btn btn-primary btn-xs" data-toggle="collapse" data-target="#team1" id="collapseTeam1">Collapse</button>
                              <button class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal">Import</button>
                              <button class="btn btn-danger btn-xs reset-team" id="reset-1">Reset</button>
                           </h2>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="team1" class="collapse in">
                  <form class="form-horizontal" role="form">
END
   for $x (0 .. 5) {
      printPokemon(1, $x);
   }
   print <<END;
                  </form>
               </div>
END
}

#printModal
sub printModal {
   print <<END;
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="myModalLabel">Import from Pokemon Showdown</h4>
            </div>
            <div class="modal-body">
               <form>
                  <textarea class="form-control" rows="20" id="import-text" placeholder="Paste here! NO HIDDEN POWERS! MEGAS SHOULD BE POKEMONNAME-MEGA!"></textarea>
               </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="import btn btn-primary" id="import-0" data-dismiss="modal">Your Team</button>
              <button type="button" class="import btn btn-danger" id="import-1" data-dismiss="modal">Other Team</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->
END
}

#printModal2
sub printModal2 {
   print <<END;
      <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="myModalLabel2">Not Yet Implemented</h4>
            </div>
            <div class="modal-body">
               <b>Moves</b>
                     <ul>
                        <li>Autonomize</li>
                        <li>Metal Burst</li>
                        <li>Bide</li>
                        <li>Counter</li>
                        <li>Mirror Coat</li>
                        <li>Payback</li>
                        <li>Avalanche</li>
                        <li>Triple Kick</li>
                        <li>Beat Up</li>
                        <li>Split Up</li>
                        <li>Pursuit</li>
                        <li>Fling</li>
                        <li>Water / Fire / Grass Pledge</li>
                        <li>Stomp vs Minimise</li>
                        <li>Earthquake vs Dig</li>
                        <li>Surf vs Dive</li>
                        <li>Steamroller vs Minimize</li>
                        <li>Knock off vs Multitype</li>
                     </ul>
               <b>Environmental Conditions</b>
                  <ul>
                     <li>Water / Mud Sport</li>
                     <li>Terrains</li>
                  </ul>
               <b>Abilities</b>
                  <ul>
                     <li>Plus / Minus</li>
                     <li>Flash Fire boost</li>
                     <li>Slow Start</li>
                     <li>Flower Gift (doubles)</li>
                     <li>Friend Guard</li>
                     <li>Sniper</li>
                     <li>Metronome</li>
                  </ul>
               <b>Crits</b><br />
               <b>Double Play</b><br />
               <b>Use Mega-Pokemon instead of evo stones</b>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->
END
}