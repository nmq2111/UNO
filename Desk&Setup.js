// Deck&Setup.js
window.deck = []
window.playerHand = []
window.computerHand = []

function createDesk() {
  document.addEventListener('DOMContentLoaded', () => {
    fetch('Card.html')
      .then((response) => response.text())
      .then((data) => {
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = data

        const cardElements = tempDiv.querySelectorAll('.card')

        const cardsContainer = document.querySelector('.cards-container') // Correct class
        cardElements.forEach((card) => {
          cardsContainer.appendChild(card.cloneNode(true))
        })

        RandomDesk()
      })
      .catch((error) => console.error('Error fetching card data:', error))
  })
}

function RandomDesk() {
  const cardsContainer = document.querySelector('.cards-container') // Find container
  const allCards = Array.from(cardsContainer.querySelectorAll('.card')) // Find all cards
  const playerHand = []
  const computerHand = []

  if (allCards.length < 14) {
    console.error('Not enough cards to deal!')
    return
  }

  // Pick 7 cards for player and 7 for computer
  for (let i = 0; i < 7; i++) {
    // Player hand
    let randomIndex = Math.floor(Math.random() * allCards.length)
    let selectedCard = allCards[randomIndex]
    playerHand.push(selectedCard)
    allCards.splice(randomIndex, 1)
    cardsContainer.removeChild(selectedCard) // Remove from the deck

    // Computer hand
    randomIndex = Math.floor(Math.random() * allCards.length)
    selectedCard = allCards[randomIndex]
    computerHand.push(selectedCard)
    allCards.splice(randomIndex, 1)
    cardsContainer.removeChild(selectedCard) // Remove from the deck
  }

  // Place cards into player's index slots
  const indexSlots = document.querySelectorAll('.index')
  playerHand.forEach((card, idx) => {
    if (indexSlots[idx]) {
      indexSlots[idx].appendChild(card)
    }
  })

  // Place computer's hand
  const computerArea = document.querySelector('.ComputerHand')
  computerHand.forEach((card) => {
    computerArea.appendChild(card)
  })
}

createDesk()
