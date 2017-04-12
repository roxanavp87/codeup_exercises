/**
 * Created by roxana on 4/12/17.
 */

// console.log("---------------------------------------------------------------------------");
// console.log("Extra Exercise 1");
// console.log("---------------------------------------------------------------------------");

var menu = ['tuna salad', 'congri & pork', 'tacos', 'lobster salad', 'chicken salad', 'salad', 'shrimps salad', 'beef broth', 'yellow rice & eggs', 'pizza', 'lazagna', 'fufu & eggs'];
var dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var menuIndex = [];
var random;


var match;
for(var j=0; j<6; j++){
    do {
        match = 0;
        random = Math.floor(Math.random() * 12);
        for (var i = 0; i < menuIndex.length; i++) {
            if (menuIndex[i] == random) {
                match = 1;
            }
        }
    } while(match == 1);
    menuIndex[i] = random;
}
console.log(menuIndex);



for(var i=0; i<dayOfWeek.length; i++) {
    console.log(dayOfWeek[i] +' - ' + menu[menuIndex[i]]);
}

// console.log("---------------------------------------------------------------------------");
// console.log("Extra Exercise 2");
// console.log("---------------------------------------------------------------------------");

var myArray = [];
var possibleValues = ['Strike', 'Score'];
var strikes = 0, scores =0;

function createArray() {
    for(var i=0; i<3; i++) {
        random = Math.round(Math.random());
        myArray[i] = possibleValues[random];
    }
}
createArray();
console.log(myArray);

function checkArray() {
    for(var i=0; i<3; i++) {
        if(myArray[i] === 'Strike') {
            strikes++;
        } else {
            scores++;
        }
    }
    if(scores === 3){
        console.log('You win');
    } else if (strikes === 3) {
        console.log('You lose');
    } else {
        console.log('You can try again');
    }
}

checkArray();