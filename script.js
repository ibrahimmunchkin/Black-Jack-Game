let cads = [];
let sum = 0;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let start = document.getElementById("start");
let playerEl = document.getElementById("player-el");
let player={
    name :"munchkin",
    chips:145
}
playerEl.textContent = player.name + ": $ " + player.chips;


start.addEventListener("click",renderGame);
//start Game
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
   cads = [firstCard + secondCard];
   sum = firstCard + secondCard;
    renderGame();
}
//Render Game
function renderGame(){
    messageEl.textContent = "Do you want to draw a new card ?";
    sumEl.textContent = "Sum: " + sum;
    if(sum===21){
        messageEl.textContent = "You have Black Jack";
        hasBlackJack = true;
    }
    else if(sum>21){
        messageEl.textContent = "You are out of the Game";
        isAlive = false;
    }
    else if( sum<=20){
        messageEl.textContent = "Add a new Card";
    }
    cardsEl.textContent = "Cards: "
    for(i=0;i<cads.length;i++){
         cardsEl.textContent += cads[i] + " ";
    }

}

let cards = document.getElementById("cards");
cards.addEventListener("click",newCard);
function newCard(){

        let card = getRandomCard();
        sum += card ;
        cads.push(card);
        renderGame();
    
}


function getRandomCard(){
    let randomnumber = Math.floor(Math.random()*13) +1;
    if(randomnumber >10){
        return 10;
       }
       else if(randomnumber ===1){
        return 11;
       }
       else{
           return randomnumber;
       }
    
}



