(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split('|');

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    planetsString = planetsArray.join('<br>');
    console.log(planetsString);

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    var list = '<ul>\n';
    for(var i=0; i<planetsArray.length; i++) {
        list += '   <li>' + planetsArray[i] +'</li>\n';
    }
    list += '</ul>';
    console.log(list);

})();


console.log("---------------------------------------------------------------------------");
console.log("Extra Exercise");
console.log("---------------------------------------------------------------------------");

function convert24hourTo12hour(string24) {
    var hour = parseInt(string24.substring(0,2));

    if(hour > 12) {
        string12 = hour - 12;
        string12 += string24.substring(2,string24.length) + 'pm';
    } else if(hour === 0) {
        string12 = '12' + string24.substring(2,string24.length) + 'am';
    } else {
        string12 = hour + string24.substring(2,string24.length) + 'am';
    }
    return string12;
}

console.log(convert24hourTo12hour('10:30'));


function convert12hourTo24hour(string12) {
    var hour = parseInt(string12.split(':')[0]);
    var min = string12.split(':')[1];
    min = min.substring(0,min.length-2);
    var last2 = string12.substring(string12.length-2,string12.length);

    if(last2 === 'am'){
        if(hour < 10) {
            string24 = '0' + hour;
        } else if(hour === 12) {
            string24 = '00';
        } else {
            string24 = hour;
        }
    } else {
        if(hour < 12) {
            string24 = hour + 12;
        } else {
            string24 = hour;
        }
    }
    string24 += ':' + min;
    return string24;
}

console.log(convert12hourTo24hour('6:30am'));