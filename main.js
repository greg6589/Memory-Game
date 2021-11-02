const btn = document.querySelector(".btn")
let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")
let movesCounter = document.querySelector(".movesCounter")
let cardsTable = document.querySelector(".table")
let bestTimeDisplay =document.querySelector(".bestTimeDisp")

let seconds=0;
let minutes=0;
let gameTime=0;

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
    gameTime++
}

let interval;
let active=false;
let bestTime=0;

const startGame = ()=>{
    if(!active){
        interval= setInterval(startTimer, 1000);
        active=!active;
        btn.textContent="stop";
        bestTime=gameTime;
            if(bestTime>60){
                   bestTimeDisplay.textContent=(bestTime/60).toFixed(0)+":"+(bestTime%60 <10 ? "0"+ bestTime%60 : bestTime%60 );
                  }
             else{
                    bestTimeDisplay.textContent="0:"+( bestTime<10 ? bestTime="0"+bestTime : bestTime);
        };
        gameTime=0;
     }
    else{
        btn.textContent="start"
        clearInterval(interval);
        active=!active;
        seconds=0;
        minutes=0;
    }
}


btn.addEventListener('click', startGame)