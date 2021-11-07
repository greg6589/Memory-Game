const btn = document.querySelector(".btn")
let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")
let movesCounter = document.querySelector(".movesCounter")
let cardsTable = document.querySelector(".table")
let lastTimeDisplay =document.querySelector(".lastTimeDisp");
let lastMoveDisplay =document.querySelector(".lastMovesDisp");
let win =document.querySelector(".win");

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
    // RESULT CHECK
    if(gameResult==gamePair){
        clearInterval(interval);
        btn.textContent="start";
        active=!active;
        seconds=0;
        minutes=0;
        gamePair=0;
        gameResult=0;
        move=0;
        win.style.display="block";
        let divElms= document.querySelectorAll(".table div")
        for (i = 0; i < divElms.length; i++){
            cardsTable.removeChild(divElms[i])
            }
    };
    gameTime++
}

let interval;
let active=false;
let lastTime=0;
let newCard;
let cards=[];
let move=0;
const cardsCount=20;
let cardsColor =["red", "red", "blue", "blue", "green", "green", "black", "black", "yellow", "yellow", "violet", "violet", "cyan", "cyan", "indigo", "indigo", "orangered", "orangered", "white", "white"]

// INITIAL FUNCTION FOR COLOR AND EVENT LISTENER
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
    }, 3000)
}
// START GAME FUNCTION
const startGame = ()=>{
    if(!active){
        interval= setInterval(startTimer, 1000);
        active=!active;
        btn.textContent="stop";
        lastMoveDisplay.textContent=movesCounter.textContent;
        movesCounter.textContent=move;
        win.style.display="none";;
        lastTime=gameTime;
            if(lastTime>60){
                   lastTimeDisplay.textContent=(lastTime/60).toFixed(0)+":"+(lastTime%60 <10 ? "0"+ lastTime%60 : lastTime%60 );
                  }
             else{
                    lastTimeDisplay.textContent="0:"+( lastTime<10 ? lastTime="0"+lastTime : lastTime);
        };
        gameTime=0;
        // CREATE AND ADD CARD TO TABLE
        for (i = 0; i < cardsCount; i++){
            newCard= document.createElement("div");
            cardsTable.appendChild(newCard);
            cards =document.querySelectorAll(".table div");
            gamePair=cards.length/2;
        }
    }
    else{
        // STOP AND RESET
        btn.textContent="start";
        clearInterval(interval);
        active=!active;
        seconds=0;
        minutes=0;
        move=0;
        movesCounter.textContent=0;
        minutesDisplay.textContent=minutes;
        secondsDisplay.textContent=seconds+"0";
        gameTime=0;
        let divElms= document.querySelectorAll(".table div");
        for (i = 0; i < divElms.length; i++){
            cardsTable.removeChild(divElms[i])
            }
    }
    cards=[...cards];
    cardsColor =["red", "red", "blue", "blue", "green", "green", "black", "black", "yellow", "yellow", "violet", "violet", "cyan", "cyan", "indigo", "indigo", "orangered", "orangered", "white", "white"];
    init();
}

let activeCard="";
let activeCards=[];
let gamePair;
let gameResult=0;

// CARDS COMPARISON FUNCTION
const result=(e)=>{
    activeCard=e.target;
    activeCard.classList.remove("hidden");
    activeCard.removeEventListener('click', result);
    activeCards.push(activeCard);
    move++;
    if(move % 2 == 0){
        movesCounter.textContent=move/2;
    }
    if(activeCards.length===2 && activeCards[0].classList.value === activeCards[1].classList.value){
        activeCards.forEach(card => {
            card.removeEventListener('click', result);
            card.classList.add("pair");
           });
        gameResult++
        activeCard="";
        activeCards.length=0;
        return
    }
    else if(activeCards.length===2 && activeCards[0].classList.value !== activeCards[1].classList.value){
        cards.forEach(card => {
            card.removeEventListener('click', result);
           });
        setTimeout(function(){
            cards.forEach(card => {
                if(card.classList.contains("pair")){
                    card.removeEventListener('click', result);
                }
                else(
                    card.addEventListener('click', result), card.classList.add("hidden")
                )
               });
        activeCard="";
        activeCards.length=0;
        }, 1000)
    }
}

btn.addEventListener('click', startGame)