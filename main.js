var daysHead = document.querySelector('.days');
var hourHead = document.querySelector('.hours');
var minuteHead = document.querySelector('.minutes');
var  secondHead = document.querySelector('.seconds');
var secondCard = document.querySelector('#second');
var minuteCard = document.querySelector('#minute');
var hourCard = document.querySelector('#hour');
let days;
let hours;
let minutes;
let seconds;
// console.log(seconds);

var countDownDate = new Date("Apr 1, 2022 15:37:25").getTime();

// console.log(countDownDate);




var x = setInterval(function() {

    // Get today's date and time;
    var now = new Date().getTime();

    // Find the distance between now and future date;
    var distance = countDownDate - now;

    // Time Calculations for days, hours, minutes and seconds 
    days = Math.floor(distance / (1000*60*60*24));
    hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    seconds = Math.floor((distance % (1000*60)) / (1000));


    daysHead.innerText = days;
    hourHead.innerText = hours;
    minuteHead.innerText = minutes;
    secondHead.innerText = seconds;



    secondHead.addEventListener('onchange', () => {
        secondCard.classList.add('active');
    })

    // if countdown is over 
    if(distance < 0) {
        daysHead.innerText = "EX";
        hourHead.innerText = "PI";
        minuteHead.innerText = "R";
        secondHead.innerText = "ED";
    }
}, 1000);



var y = setInterval(function() {
    secondCard.classList.toggle('active');
}, 1000);



var now = new Date().getTime();


// Find the distance between now and future date;
var distance = countDownDate - now;

// Time Calculations for days, hours, minutes and seconds 
days = Math.floor(distance / (1000*60*60*24));
hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
seconds = Math.floor((distance % (1000*60)) / (1000));




console.log(minuteCard);

var a = setInterval(function() {
    if(seconds < 1) {
        minuteCard.classList.toggle('active');
    } 
}, 1000);

var b = setInterval(function() {
    if(minutes < 1) {
        hourCard.classList.toggle('active');
    } 
}, 1000);

