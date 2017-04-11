/**
 * Created by roxana on 4/10/17.
 */


"use strict";

var luckyNumber = Math.floor(Math.random()* 6);
var haveToPay = 60;
var month = Math.floor(Math.random()* 12) + 1;

switch (luckyNumber) {
    case 1:
        haveToPay *= 0.9;
        break;
    case 2:
        haveToPay *= .75;
        break;
    case 4:
        haveToPay *= .5;
        break;
    case 5:
        haveToPay = 0;
        break;
}


console.log("Your lucky number is " + luckyNumber + ", so you only have to pay $" + haveToPay.toFixed(2));


// Exercise 2

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Octuber");
        break;
    case 11:
        console.log("November");
        break;
    default:
        console.log("December");
}

