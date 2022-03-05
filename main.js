var daysHead = document.querySelector('.days');
var hourHead = document.querySelector('.hours');
var minuteHead = document.querySelector('.minutes');
var  secondHead = document.querySelector('.seconds');

var countDownDate = new Date("Apr 1, 2022 15:37:25").getTime();

// console.log(countDownDate);


var x = setInterval(function() {

    // Get today's date and time;
    var now = new Date().getTime();

    // Find the distance between now and future date;
    var distance = countDownDate - now;

    // Time Calculations for days, hours, minutes and seconds 
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / (1000));

    daysHead.innerText = days;
    hourHead.innerText = hours;
    minuteHead.innerText = minutes;
    secondHead.innerText = seconds;

    // if countdown is over 
    if(distance < 0) {
        daysHead.innerText = "EX";
        hourHead.innerText = "PI";
        minuteHead.innerText = "R";
        secondHead.innerText = "ED";
    }
}, 1000);