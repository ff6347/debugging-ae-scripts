// functions for debugging

function Debugger(){
this.filename ="debuginfo";
this.filepath = "~/Desktop/"+ this.filename +".txt";
this.debugstrings = [];

this.write_infos = function (){

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