{
#include 'debug_writer.jsx';

var DBug = new Debugger();

run_script(this);


 function run_script(thisObj){

// this is global
myMetaObject = new Object();
myMetaObject.settings = {
  setting1 : false,
  setting2 : false 
};

///   THIS WILL CHECK IF PANEL IS DOCKABLE OR FLAOTING WINDOW  
var win   = buildUI(thisObj , myMetaObject );
if ((win != null) && (win instanceof Window)) {
    win.center();
    win.show();
}; // end if win  null and not a instance of window 

 };// close run_script


 function buildUI (thisObj , metaObject ) {
    var win = (thisObj instanceof Panel) ? thisObj :  new Window('palette', 'example',[0,0,150,260],{resizeable: true}); 

    if (win != null) {
    
        var H = 25; // the height
        var W1 = 30; // the width
        var G = 5; // the gutter
        var x = G; 
        var y = G;
        // var yuioff = G; // and some offset

        win.sequence_check = win.add('checkbox',[x,y,x+W1*2,y + H],'check');
        win.sequence_check.value = metaObject.setting1;
        win.export_button = win.add('button', [x + W1*2 -G*2,y,x+W1*5,y + H], 'run');
        win.help_button = win.add('button', [x + W1*5+ G,y,x + W1*6,y + H], '?'); 

        win.sequence_check.onClick = function (){
            alert("check");
            DBug.debugstrings.push("in check");
        };
        win.help_button.onClick = function () {
          alert("help");
        }
        win.export_button.onClick = function(){
          main(metaObject);
      };

    }
    return win
}


function main(metaobj){

    alert("in function main. From here on it is a straight run");
    DBug.write_infos();
};
}