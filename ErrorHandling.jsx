//NOT WORKING
{

    var errorHappend = false;


main();
$.onError = err;
if(!errorHappend){

    alert("No Error");
};

function err(errString) {  
    alert(errString);
     errorHappend = true;
}

    function main () {
        

do {
    var testObject = new Object();
        testObject.myString = "Test";
        testObject.myNumber = 2;
        testObject.myBool = true;
        testObject.myArray = [1,23,4,5,56,6,7];

        testObject.myObject = {
                myString : "Test",
                myNumber : 2,
                myBool : true,
                myArray : [1,23,4,5,56,6,7]
        };
        testObject.myNumber.split("");
}
while ($.Error == false) ; 

alert($.Error + "$.Error");
    return;
    };// end function main





}


//---------------------------------------------------------------
//http://forums.adobe.com/message/4193764
// var errorHappened = false;
 
// function err(errString) {  
//     alert(errString);
//      errorHappened
// }
// app.onError = err;
 
// function doThis(){
//     errorHappened = false; //reset
//     doSomethingThatCanTriggerOnError();
// }
 
// doThis();
// if (!errorHappened) doThat();
//---------------------------------------------------------------