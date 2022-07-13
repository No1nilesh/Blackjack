let player = {
    name:"Nilesh",
    chips:145
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" +player.chips 

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")


function getRandomCard() {
    
    
    let randomNumber = Math.random() * 13 + 1
    let flooredNumber = Math.floor(randomNumber)
    if (flooredNumber === 1) {
        return 11
    } else if (flooredNumber > 10) {
        return 10
    }
    return flooredNumber
}

function start() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame()
}

function rendergame() {
    console.log('game started')
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive=true
        hasBlackjack = false
        
    } else if (sum === 21) {
        message = "Wohoo! You have got Blackjack"
        hasBlackjack = true;
        isAlive = false
    } else {
        message = "You are out of the game!"
        isAlive = false
        hasBlackjack = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive===true && hasBlackjack===false){
        let card = getRandomCard();
        sum += card
        cards.push(card)
        rendergame()
    }
    
}