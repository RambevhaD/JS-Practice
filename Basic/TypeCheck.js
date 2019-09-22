var string1 = "Dakalo";
var string2 = "Rambevha";
var User = {name:"dk"};
var Boss = 3;

if(typeof(string1) == typeof(string2) && typeof(Boss) == typeof(User)){
    console.log("SAME TYPE");
}else{
    console.log("NOT THE SAME TYPE");
}
console.log(typeof(User));