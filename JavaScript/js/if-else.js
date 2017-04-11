/**
 * Created by roxana on 4/10/17.
 */

"use strict";

var notes = [70, 80, 95];
var sum = 0;
var names = ["Ryan", "Cameron", "George"];
var productPrices = [180, 250, 320];
var flipACoin = Math.floor(Math.random()* 2);

for(var i=0; i<notes.length; i++) {
    sum += notes[i];
}

var average = sum/notes.length;

if(average < 80) {
    console.log("You're awesone, your average is " + average.toFixed(2));
} else {
    console.log("You need to practice more, your average is " + average.toFixed(2));
}


for(var i=0; i<names.length; i++) {
    if(productPrices[i] > 200) {
        var finalPayment = productPrices[i]*0.65;
        console.log(names[i] + " bought $" + productPrices[i].toFixed(2) + " worth of products. Final payment: $" + finalPayment.toFixed(2));
    } else {
        console.log(names[i] + " bought $" + productPrices[i].toFixed(2) + " worth of products. Final payment: $" + productPrices[i].toFixed(2));
    }
}


var IsaacDecision = (flipACoin)? ("Buy a house") : ("Buy a car");
console.log(IsaacDecision);