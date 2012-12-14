debugging-ae-scripts
====================

some debugging and test scripts for use with Adobes Extendscript Engine


##Testing with prototyping array functions in After Effects  
Enclosing the whole script in a function does not solve the problem. I snooped arround in [Zorro-The Layer Tagger.jsx](http://aescripts.com/zorro-the-layer-tagger/) to replicate an enclosed structure and came up with [this example](https://github.com/fabiantheblind/debugging-ae-scripts/blob/master/example_panel_enclosed.jsx). The function 'run_script_exPanel_enclosed' encloses everything.  

From that I created [this version](https://github.com/fabiantheblind/debugging-ae-scripts/blob/master/_example_panel_withProto_enclosed.jsx) that has an Array prototyped function for clearing arrays and [this one](https://github.com/fabiantheblind/debugging-ae-scripts/blob/master/_example_panel_callProto.jsx) that uses the prototype without having it.  

When I start the _example_panel_withProto_enclosed.jsx and then start the _example_panel_callProto.jsx I can use the myArray.clear() command. Also the Array.clear() is still available if I close the script that created this proto. Only after a restart from After Effects the Array.clear() function is gone.  


Copyright (C) 2012  Fabian "fabiantheblind" Morón Zirfas

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
