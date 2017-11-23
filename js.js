var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');
var allHands = document.querySelectorAll('.hand')

function setDate() {
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    if (secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none')
    } else {
        allHands.forEach(hand => hand.style.transition = '')
    }
    var minutesDegrees = ((minutes / 60) * 360) + 90;
    var hoursDegrees = ((hours / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg`;
}

setInterval(setDate, 1000);