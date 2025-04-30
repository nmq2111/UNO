const cardsContainer = document.querySelector('.cards-container')

function createDesk() {
  document.addEventListener('DOMContentLoaded', () => {
    fetch('Card.html')
      .then((response) => response.text())
      .then((data) => {
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = data

        const cardElements = tempDiv.querySelectorAll('.card')
        cardElements.forEach((card) => {
          cardsContainer.appendChild(card.cloneNode(true))
        })

        RandomDesk()
      })
      .catch((error) => console.error('Error fetching card data:', error))
  })
}

function RandomDesk() {
  const allCards = Array.from(cardsContainer.querySelectorAll('.card'))
  const playerHand = []
  const computerHand = []

  for (let i = 0; i < 7; i++) {
    playerHand.push(drawRandomCard(allCards))
    computerHand.push(drawRandomCard(allCards))
  }

  const indexSlots = document.querySelectorAll('.index')
  playerHand.forEach((card, idx) => {
    if (indexSlots[idx]) indexSlots[idx].appendChild(card)
  })

  const computerArea = document.querySelector('.ComputerHand')
  computerHand.forEach((card) => computerArea.appendChild(card))

  cardsContainer.innerHTML = ''
  allCards.forEach((card) => cardsContainer.appendChild(card))

  computerHand.forEach((card) => {
    const hiddenCard = document.createElement('div')
    hiddenCard.classList.add('card', 'back')
    computerArea.appendChild(hiddenCard)
  })
}

function drawRandomCard(cardList) {
  const randomIndex = Math.floor(Math.random() * cardList.length)
  return cardList.splice(randomIndex, 1)[0]
}

createDesk()
