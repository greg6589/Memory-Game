const btn = document.querySelector(".btn")
let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")
let movesCounter = document.querySelector(".movesCounter")
let cardsTable = document.querySelector(".table")
let bestTimeDisplay =document.querySelector(".bestTimeDisp");


let seconds=0;
let minutes=0;
let gameTime=0;
//  TIMER START FUNCTION
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
let newCard;
let cards=[];
let move=0;
let cardsColor =["red", "red", "blue", "blue", "green", "green", "brown", "brown","yellow", "yellow", "violet","violet",]

// 
const init =()=>{
    cards.forEach(card => {
        let position= Math.floor(Math.random()*cardsColor.length);
        card.classList.add(cardsColor[position])
        cardsColor.splice(position, 1)
    });
    setTimeout(function(){
        cards.forEach(card => {
            card.classList.add("hidden");
            card.addEventListener('click', result);
           });
    }, 2000)

}
// START GAME FUNCTION
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
        // CREATE AND ADD CARD TO TABLE
        for (id = 0; id < 12; id++){
        newCard= document.createElement("div");
        cardsTable.appendChild(newCard);
        cards =document.querySelectorAll(".table div");
        }
    }
    else{
        // STOP AND RESET
        btn.textContent="start"
        clearInterval(interval);
        active=!active;
        seconds=0;
        minutes=0;
        let divElms= document.querySelectorAll(".table div")
        for (i = 0; i < divElms.length; i++){
            cardsTable.removeChild(divElms[i])
            }

    }
    cards=[...cards];
    cardsColor =["red", "red", "blue", "blue", "green", "green", "brown", "brown","yellow", "yellow", "violet","violet",]
    init();
}

let activeCard="";
const activeCards=[];
let gamePair= cards.length / 2;
let gameResult=0



btn.addEventListener('click', startGame)