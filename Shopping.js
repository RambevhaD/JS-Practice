
var groceryItem =['bananas','milk','Tea'];

function addToshoppingCart(item){
    if(groceryItem.length >= 3){
       return `We are removing ${groceryItem.shift()}`;
    }else{
        groceryItem.push(item)
        return `you bought a list of [${groceryItem}]`;
    }
}

console.log(addToshoppingCart('Bread'));
//console.log(addToshoppingCart('Cucumber'));
//console.log(addToshoppingCart('Snacks'));

//Must continue with this 