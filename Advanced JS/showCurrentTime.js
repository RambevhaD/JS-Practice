function checkTime(i){
if(i < 10){
    i = '0'+ i;
}
return i;
}

function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    //Adding a zero in front of numbers less than 10.
    m = checkTime(m);
    s = checkTime(s);

    //document.getElementById('time').innerHTML = `${h}:${m}:${s}`;
    document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
    t = setTimeout(function(){
        startTime()
    },500);
}
startTime();