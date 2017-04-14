/**
 * Created by roxana on 4/14/17.
 */

'use strict';

(function () {
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


})();
