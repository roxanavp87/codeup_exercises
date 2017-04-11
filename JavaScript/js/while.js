/**
 * Created by roxana on 4/10/17.
 */

"use strict";

// Exercise 1

var allCones = Math.floor(Math.random() * 50) + 50; // This is how you get a random number between 50 and 100
var cones;
var remainingCones = allCones;

console.log("---------------------------------------------------------------------------");
console.log("Exercise 1");
console.log("---------------------------------------------------------------------------");
do {
    console.log("You need to sell " + remainingCones + " cones");
    cones = Math.floor(Math.random() * 5) + 1;
    console.log("Client: I need " + cones + " cones");
    if(remainingCones >= cones) {
        console.log(cones + " cones sold");
        remainingCones -= cones;
    } else {
        console.log("Cannot sell you " + cones + " cones, I only have " + remainingCones);
    }

} while(remainingCones > 0);

console.log("Yay! I sold them all!");



