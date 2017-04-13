"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// do {
//     var name = prompt("What is your name?");
// } while(name === "");
//
// // TODO: Show an alert message that welcomes the user based on their input.
// alert("Welcome " + name);
//
// // TODO: Ask the user if they like pizza.
// //       Based on their answer show a creative alert message.
//
// var answer = confirm("Do you like pizza?");
// if (answer) {
//     alert("Awesome");
// } else {
//     alert("Why not.... everybody likes pizza.")
// }


// console.log("---------------------------------------------------------------------------");
// console.log("Extra Exercise");
// console.log("---------------------------------------------------------------------------");

var listOfUsers = [];
var listOfPass = [];
var i = 0;


function checkForInvalidInput(message) {
    do {
        var response = prompt(message);
    } while((response == "") || (response == null));
    return response;
}

function check(Array, input) {
    var match = 0;
    for(var j=0; j<Array.length; j++) {
        if(Array[j] == input) {
            match = 1;
        }
    }
    return match;
}

function registration() {
    var registeredUser = confirm("Are you resgistered?");
    var user, pass, userMatch, passMatch;
    if(registeredUser) {
        user = checkForInvalidInput("What is your username?");
        pass = checkForInvalidInput("What is your password?");

        //Check if the user is in the list
        userMatch = check(listOfUsers, user);
        passMatch = check(listOfPass, pass);

        if(userMatch === 0 || passMatch === 0) {
            alert("Sorry.... but you are not registered")
        } else {
            alert("Congratulations!!");
        }

    } else {
        alert("Provide username and password");
        user = checkForInvalidInput("Username");
        pass = checkForInvalidInput("Password");
        listOfUsers[i] = user;
        listOfPass[i] = pass;
        i++;
    }
}

for(var j=0; j<3; j++) {
    console.log("User " + j);
    registration();
}


