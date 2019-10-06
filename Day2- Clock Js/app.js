const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const hand = document.querySelectorAll('.hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 270;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes/60) * 360) + 270;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours/12) * 360) + 270;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if(secondsDegrees == 270){
    secondHand.style.transition = "all 0s";
  }

  if(minutesDegrees == 270){
    minuteHand.style.transition = "all 0s";
  }

  if(hoursDegrees == 270){
    hourHand.style.transition = "all 0s";
  }
}

setInterval(setDate, 1000);