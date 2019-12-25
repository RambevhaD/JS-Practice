let students = [
        {name:"Mary",score:90,school:"East"},
        {name:"Dakalo",score:100,school:"East"},
        {name:"Vhukhudo",score:50,school:"East"},
        {name:"Maxim",score:10,school:"East"}];


let processStudents = function(data, callback){
    for(let i = 0; i<data.length; i++){
        if(data[i].school.toLowerCase() === "east"){
            if(typeof callback === "function"){
                callback(data[i]);
            }
        }
    }
}

processStudents(students, function(obj){
    if(obj.score > 10){
        console.log(obj.name + " passed.");
        }
});

let determineTotal = function(){
    let total = 0,
    count = 0;

    processStudents(students,function(obj){
        total = total + obj.score;
        count++;
    });
    console.log(`Total score is ${total} Total count is ${count}`);
}

determineTotal();