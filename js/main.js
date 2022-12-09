var hour = document.getElementById("hours");
var min = document.getElementById("minutes");
var sec = document.getElementById("seconds");
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn= document.getElementById("reset");

var hours=0;
var minutes=0;
var seconds=0;
var int;
startBtn.addEventListener("click",start);
stopBtn.addEventListener("click",stop);
resetBtn.addEventListener("click",reset);
// .....start the watch...../
function start(){
        if (seconds>=0) {
            seconds++
            sec.innerHTML=seconds;
        }
        if (seconds<10) {
            sec.innerHTML="0" + seconds;
        }
        if (seconds>=60) {
            seconds=0;
            minutes++
            min.innerHTML=minutes;
        } 
        if (minutes<10) {
            min.innerHTML="0" + minutes;
        }
        if (minutes>=60) {
            minutes=0;
            hours++
            hour.innerHTML=hours;
        }
        if (hours<10) {
            hour.innerHTML="0" + hours;
        }
        int=setTimeout(start,1000);
    }
// .......stop the watch...../
function stop(){
        clearTimeout(int);
    } 
// .........reset the watch...../  
function reset(){
    if (seconds>=0) {
    hours=0;
    minutes=0;
    seconds=0;
    sec.innerHTML="0" + "0";
    min.innerHTML="0" + "0";
    hour.innerHTML="0" + "0";
    clearTimeout(int)
    }
    } 

