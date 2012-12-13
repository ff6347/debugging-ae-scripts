/**
 * see also https://gist.github.com/4278820
 * 
 * This is a debugger class for creating files with infos about stuff
 * @param {Boolean} dbg if true the debugger will be initalized
 * @param {String} title the title in the debuginfo file
 * @param {Stirng} message An alert message can be set via DEebugger.message = "something"
 *
 *
 * // make a new Debugger
 * var deeBug = new Debugger(true,"MyScript.jsx version 0.1.2","This is a debug version");
 *
 * // alert the message
 * deeBug.message();
 * 
 * // add a line to the file
 * deeBug.addLineToInfo("This is a line in the file" + something); 
 *
 * // create the file always on the desktop right now alwas with the name
 * // "debuginfo" can be set via deeBug.filename = "myfile" no extension will be .txt 
 * // he will try to execute the file in the std editor
 * 
 * deeBug.write_infos();
 * 
 * 
 */


function Debugger(dbg,title,message){
this.DEBUG = dbg;
this.filename ="debuginfo";
this.filepath = "~/Desktop/"+ this.filename +".txt";
this.debugstrings = [title];
this.messageString = message;

this.addLineToInfo = function (line){
if(this.DEBUG == true){
this.debugstrings.push(line);
    };
};

this.message = function(){

if(this.DEBUG == true){
    alert(this.messageString);
    }
};

this.write_infos = function (){

if(this.DEBUG == true){
       // get the textfile
    var write_file = File(this.filepath);
    
    if(!write_file.exists){
        // if the file does not exist create one
        write_file = new File(this.filepath);
    }else{
        // if it exsists ask the user if it should be overwritten
        var res = confirm ("The file already exists. Should I overwrite it", true,  "titleWINonly");
        // if the user hits no stop the script
        if(res != true){
            return;
            };
        };
    
    var out;// our output
    // we know already that the file exist
    // but to be shure
    if( write_file!='' ){   
          //Open the file for writing.   
          out = write_file.open( 'w', undefined, undefined );
          write_file.encoding = "UTF-8";
          write_file.lineFeed = "Unix"; //convert to UNIX lineFeed
          // txtFile.lineFeed = "Windows";
          // txtFile.lineFeed = "Macintosh";
       };  
        // got an output?
       if( out != false ){  
         // loop the list and write each item to the file 
            write_file.writeln(this.debugstrings.join('\n'));
                // allways close files!
         write_file.close(); 
         write_file.execute(); 
       }
    }     
    }
}