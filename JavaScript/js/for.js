/**
 * Created by roxana on 4/11/17.
 */

"use strict";

console.log("---------------------------------------------------------------------------");
console.log("Exercise 1");
console.log("---------------------------------------------------------------------------");

var number = Math.floor(Math.random() * 10) + 1;
var mult;

for(var i=1; i<=10; i++) {
    mult = number*i;
    console.log(number + " x " + i + " = " +  mult);
}


console.log("---------------------------------------------------------------------------");
console.log("Exercise 2");
console.log("---------------------------------------------------------------------------");

for(var i=1; i<=10; i++) {
    // This is how you get a random number between 20 and 200
    number = Math.floor(Math.random() * 180) + 20;
    if(number % 2 == 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}

console.log("---------------------------------------------------------------------------");
console.log("Exercise 3");
console.log("---------------------------------------------------------------------------");

for(var i=100; i>=5; i-=5) {
    console.log(i);
}

console.log("---------------------------------------------------------------------------");
console.log("Extra Exercise");
console.log("---------------------------------------------------------------------------");

// Create the html code in order to display generate a random list of 5 <li> inside of an <ul> and the number inside the <li> elements could be between 10 and 20.
// The output should look like this:
// <ul>
// <li>Random 13</li>
// <li>Random 19</li>
// <li>Random 15</li>
// <li>Random 16</li>
// <li>Random 17</li>
// </ul>

var iter = 5;
console.log("<ul>");
for(var i=1; i<=iter; i++) {
    number =  Math.floor(Math.random() * 11) + 10;
    console.log("   <li>Random " + number +  "</li>");
}
console.log("<ul>");
