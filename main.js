const btn = document.querySelector(".btn")
let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")
let movesCounter = document.querySelector(".movesCounter")
let cardsTable = document.querySelector(".table")


let seconds=0
let minutes=0

const startTimer= ()=>{
    seconds++;
    if(seconds<10 ? seconds="0" + seconds : seconds);
    if (seconds > 59 ){
        seconds=0;
    if(seconds<10 ? seconds="0" + seconds : seconds);
    minutes++;
    };
    minutesDisplay.textContent=minutes;
    secondsDisplay.textContent=seconds;
}


btn.addEventListener('click', function(){
    setInterval(startTimer, 1000)
})