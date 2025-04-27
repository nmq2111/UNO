//Deck and Setup Functions
//createDesk()
function createDeck() {
  document.addEventListener('DOMContentLoaded', () => {
    fetch('Card.html')
      .then((response) => response.text())
      .then((data) => {
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = data

        const cardElement = tempDiv.querySelectorAll('.Card')
        const board = document.querySelector('.board')

        cardElement.forEach((card) => {
          board.appendChild(card.cloneNode(true))
        })
      })
      .catch((error) => console.error('Error fetching card data:', error))
  })
}

//RandomDesk()
function RandomDesk() {
  const cards = Array.from(document.querySelectorAll('.board .Card'))
  const playerHand = []
  const computerHand = []

  for (let i = 0; i < 7; i++) {
    //playerHand
    const randomIndex = Math.floor(Math.random() * cards.length)
    playerHand.push(cards[randomIndex].cloneNode(true))
    cards.splice(randomIndex, 1)

    //computer Hand
    const compIndex = Math.floor(Math.random() * cards.length)
    computerHand.push(cards[compIndex].cloneNode(true))
    cards.splice(compIndex, 1)
  }

  const playerArea = document.querySelector('.PlayerHand')
  const computerArea = document.querySelector('.ComputerHand')

  playerHand.forEach((card) => playerArea.appendChild(card))
  computerHand.forEach((card) => computerArea.appendChild(card))
}

// function StartGame() {
//   // Clear the board and hands
//   document.querySelector('.board').innerHTML = ''
//   document.querySelector('.player-hand').innerHTML = ''
//   document.querySelector('.computer-hand').innerHTML = ''

//   createDeck()
//   RandomDesk()

//   console.log('Game has started!')
// }

createDeck()
RandomDesk()
console.log('Game has started!')
alert('Hello')
