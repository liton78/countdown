

var year = document.getElementById('year');

var month = document.getElementById('month');
var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');


var currentYear = new Date().getFullYear();
var nextYear = new Date(`jan 01 ${currentYear+1} 00:00:00`);






function countdown(){
    var currentTime = new Date();
    var diff = nextYear - currentTime;

    var d = Math.floor(diff/1000/60/60/24);
    var h = Math.floor(diff/1000/60/60) %24;
    var m = Math.floor(diff/1000/60) %60;
    var s = Math.floor(diff/1000) %60;
    console.log(s);



    days.innerHTML = (d <10) ? '0' + d:d;
    hours.innerHTML = (h <10) ? '0' + h:h;
    minutes.innerHTML = (m <10) ? '0' + m:m;
    seconds.innerHTML = (s <10) ? '0' + s:s;
    
}

setInterval(countdown,1000);
year.innerHTML = nextYear.getFullYear();

countdown()






