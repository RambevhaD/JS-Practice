function giveCompliment(user_name){
    compliment = ['Awesome','Great','Excellent','Good','Perfect','Fabulous','Cute','Sweet','Loving','Caring'];
    /*for(var i=0; i<compliment.length; i++){
        console.log (`Hey ${user_name} your are ${compliment[i]}`);
    }*/
    var randomItem = compliment[Math.floor(Math.random()*compliment.length)] //This allows us to select randomly on the array.
    return `Hey ${user_name} your are ${randomItem}`

}
console.log(giveCompliment("dakalo"));
console.log(giveCompliment("Vhukhudo"));
console.log(giveCompliment("Diana"));
