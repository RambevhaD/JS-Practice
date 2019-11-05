cartForParty = {
    coldrinks:10,
    beers:10,
    chips:5,
    ballons:10,
    cakes:10
};
/*
function calcTotalPrice(cartForParty){
    var sum = cartForParty.coldrinks + cartForParty.beers + cartForParty.chips + cartForParty.ballons + cartForParty.cakes;
    return `Your total cart is $${sum}`;
}
console.log(calcTotalPrice(cartForParty));
*/
//Alternatively we can use the for .. in loop(){}


function calcTotalPrice(itemVal){
    var sum = 0;

    for(const total in itemVal){
        if(itemVal.hasOwnProperty(total)){
            sum = 
            //sum+=parseFloat(itemVal[total]);
        }
    }
    return sum;
}

var totalSum = calcTotalPrice(cartForParty);
console.log(`The sum is : ${totalSum}`);





