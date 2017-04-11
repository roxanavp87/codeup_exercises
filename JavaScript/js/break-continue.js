/**
 * Created by roxana on 4/11/17.
 */

console.log("---------------------------------------------------------------------------");
console.log("Exercise 1");
console.log("---------------------------------------------------------------------------");

var randomNumber = Math.floor((Math.random()*50)+1);

do {
    randomNumber = Math.floor((Math.random()*50)+1);
} while(randomNumber % 2 === 0);

console.log("Random number to skip is " + randomNumber);

for(var i=1; i<=100; i+=2) {
    if(i == 51) {
        break;
    }

    if(i == randomNumber) {
        console.log("Yikes! Skiping number " + randomNumber);
        continue;
    }

    console.log("Here is an odd number " + i);
}
