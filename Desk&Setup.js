//Deck and Setup Functions

let index = document.querySelector('.index')
let board = document.querySelector('.board')
let Add = document.querySelector('.Add')
const colors = ['red', 'blue', 'green', 'yellow']
let deck = []
//createDesk()

function createDeck(color, value) {
  const hand = document.getElementById('player-hand')

  const card = document.createElement('div')
  card.classList.add('card', color) // example: card red
  card.innerHTML = `<div class="value">${value}</div>`
}

//shuffleDesk()

//dealCards(players , desk)

//startGame()
