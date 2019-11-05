var numChildren = [2,4,6,8,10];
var yourName = ['Dakalo','Murendeni','Levert',];
var partnerNames = ['Murendeni','Tshimangadzo','Puledu','Thuto','Mukhethwa'];
var locations = ['CapeTown','Johannesburg','Limpopo','Dubai','Kwazulu-Natal'];
var jobs = ['Lawyer','Doctor','Psychologist','Computer-programmer','Taxi-Driver']

function tellfortune(numChildren,partnerNames,locations,jobs,yourName){

    var randomItem = numChildren[Math.floor(Math.random()*numChildren.length)];
    var randomItem1 = partnerNames[Math.floor(Math.random()*partnerNames.length)];
    var randomItem2 = locations[Math.floor(Math.random()*locations.length)];
    var randomItem3 = jobs[Math.floor(Math.random()*jobs.length)]
    var randomItem4 = yourName[Math.floor(Math.random()*yourName.length)]
    return `Hey ${randomItem4} you will be a ${randomItem3} in ${randomItem2},and married to ${randomItem1} with ${randomItem} Kids`;
}
console.log(tellfortune(numChildren,partnerNames,locations,jobs,yourName));
