/**
 * Created by roxana on 4/11/17.
 */

(function () {
    "use strict";

    var myNameIs = 'Rox'; // TODO: Fill in your name here.

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     *  > sayHello("codeup") // returns "Hello, codeup!"
     */
     function sayHello(name) {
        return ("Hello " + name);
    }

    /**
     * TODO:
     * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
     * Store the result of the function call in a variable named 'helloMessage'.
     * console.log 'helloMessage' to check your work
     */
    var helloMessage = sayHello(myNameIs);
    console.log(helloMessage);

    // Don't modify the following line, it generates a random number between 1 and
    // 100 and stores it in a variable named random
    var random = Math.floor((Math.random()*100)+1);

    /**
     * TODO:
     * Create a function called 'isOdd' that takes a number as a parameter.
     * The function should use the ternary operator to return a message.
     * The message should contain the number being checked, and whether or not the
     * number is odd
     *
     * Example
     *  > isOdd(42) // returns "42 is not odd!"
     */
    function isOdd(number) {
        return (number % 2 !== 0) ? (number + " is odd"): (number + " is even");
    }

    /**
     * TODO:
     * Call the function 'isOdd' passing the variable 'random' as a parameter.
     * console.log *outside of the function* to check your work
     */

    console.log(isOdd(random));


    console.log("---------------------------------------------------------------------------");
    console.log("Extra Exercise 1");
    console.log("---------------------------------------------------------------------------");

    function randomGen(min, max) {
        return Math.floor((Math.random()*(max-min+1)) + min);
    }


    console.log(randomGen(2,15));

    console.log("---------------------------------------------------------------------------");
    console.log("Extra Exercise 2");
    console.log("---------------------------------------------------------------------------");


    var newFormat = " ";

    function changeFormat(dateString) {
        var dateArray = dateString.split('/');
        console.log(dateArray);

        switch (parseInt(dateArray[0])) {
            case 1:
                newFormat = "January";
                break;
            case 2:
                newFormat = "February";
                break;
            case 3:
                newFormat = "March";
                break;
            case 4:
                newFormat = "April";
                break;
            case 5:
                newFormat = "May";
                break;
            case 6:
                newFormat = "June";
                break;
            case 7:
                newFormat = "July";
                break;
            case 8:
                newFormat = "August";
                break;
            case 9:
                newFormat = "September";
                break;
            case 10:
                newFormat = "Octuber";
                break;
            case 11:
                newFormat = "November";
                break;
            default:
                newFormat = "December";
        }
        newFormat+= " " + dateArray[1] + " " + " 20" + dateArray[2];
        return newFormat;
    }

    console.log(changeFormat("11/04/17"));

})();