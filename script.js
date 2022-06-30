let busy = false;
let pairsMatched = 0;
let attempts = 0;
let first = null;
let second = null;
let playOn = false;


let playButton = document.querySelector('.playButton');

playButton.addEventListener("click", playGame)


function playGame(e){

if(!e.target.classList.contains("playButton")){
    return;
}
else{
playButton.removeEventListener("click", playGame)

const restart = document.createElement('button');
restart.classList.add("restartButton");
restart.innerText = "restart";
document.body.appendChild(restart);

restart.addEventListener("click", function(){
    location.reload(true);
    
})

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "pink",
    "gray",
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "pink",
    "gray"
  ];

  function shuffle(array) {
    let counter = array.length;
  
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
  
      // Decrease counter by 1
      counter--;
  
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
  
    return array;
  }
  


let cards = Array.from(document.querySelectorAll('div'));

// Assign a unique color array item to each div
cards.forEach(card => {
    let shuffledColors = shuffle(COLORS);
    let color = shuffledColors.pop();
    card.classList.add(color);
})

cards.forEach(card => {card.addEventListener("click", showColor)})

let bank = [];

function showColor(e) { 
    
    let choice = e.target;
    choice.backgroundColor = choice.classList[0];
    
    if(!first || !second){
    first = first || choice;
    second = choice === first ? null : choice;
    
    first.style.backgroundColor = first.classList[0];
    second.style.backgroundColor = second.classList[0];
    
    bank.push(first.classList[0]);
    bank.push(second.classList[0]);}
    
    
    if(first && second){
        if(bank.length = 2){
        checkMatch(bank, first, second);
        first = null;
        second = null;
        busy = false;
        bank = [];
        }

    }
    if(pairsMatched === 8){alert('nice! you won');}
}
  

function checkMatch(arr, fir, sec){  
    const tries = document.querySelector('.attempts');
    const matches = document.querySelector('.matches');
    if(busy)return;
    if(arr[0] === arr[1]){
        pairsMatched += 1;
        matches.innerText = "matches: " + pairsMatched;
        attempts += 1;
        tries.innerText = "attempts: " + attempts;
        fir.removeEventListener("click", showColor);
        sec.removeEventListener("click", showColor);
       
       }
       else{
            setTimeout(function (){
            busy = true;
            fir.style.backgroundColor = "";
            sec.style.backgroundColor = "";
            attempts += 1;
            tries.innerText = "attempts: " + attempts;
            busy = false;
            }, 570);
            }
}}
}