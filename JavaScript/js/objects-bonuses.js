/**
 * Created by roxana on 4/14/17.
 */

'use strict';

(function () {
    console.log("---------------------------------------------------------------------------");
    console.log("function that accepts a string as input and returns the number of keypresses");
    console.log("---------------------------------------------------------------------------");

    function returnKeypresses(inputString) {
        var letters = ['adgjmptw ', 'behknqux', 'cfilorvy', 'z'];
        var char, keypresses = 0;

        for(var j=0; j<inputString.length; j++) {
            char = inputString.substring(j, j + 1);
            for (var i = 0; i < letters.length; i++) {
                if(letters[i].search(char) !== -1) {
                    break;
                }
            }
            keypresses +=i+1;
        }
        return keypresses;
    }

    console.log(returnKeypresses('hey there'));


    console.log("---------------------------------------------------------------------------");
    console.log("Split an array up into chunks");
    console.log("---------------------------------------------------------------------------");

    function chunk(numbers, chunks) {
        var totalArrays = numbers.length/chunks;
    }
    
})();
