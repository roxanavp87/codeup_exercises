/**
 * Created by roxana on 4/11/17.
 */

var number = Math.floor(Math.random() * 10) + 1;
var mult;

console.log("---------------------------------------------------------------------------");
console.log("Exercise 1");
console.log("---------------------------------------------------------------------------");

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
