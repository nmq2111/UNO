//Desk & Setup functions
//this functions is the main and the base of this game

//variables in both functions
const cardsContainer = document.querySelector('.cards-container')

function createDesk() {
  // to grab cards from cards.html to the board.html
  // SOMETHING NEW TO ME : DOMContentLoaded => It means "the page's structure (the DOM) is ready to work with"
  document.addEventListener('DOMContentLoaded', () => {
    ;``
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
    let randomIndex = Math.floor(Math.random() * allCards.length)
    let selectedCard = allCards[randomIndex]
    playerHand.push(selectedCard)
    allCards.splice(randomIndex, 1) //!!!!!!!!!!!!!!!!
    cardsContainer.removeChild(selectedCard)

    // const computerArea = document.querySelector('.ComputerHand')
    // computerHand.forEach(() => {
    //   const hiddenCard = document.createElement('div')
    //   hiddenCard.classList.add('card', 'back')
    //   computerArea.appendChild(hiddenCard)
    // })
  }

  const indexSlots = document.querySelectorAll('.index')
  playerHand.forEach((card, idx) => {
    if (indexSlots[idx]) {
      indexSlots[idx].appendChild(card)
    }
  })
  const computerArea = document.querySelector('.ComputerHand')
  computerHand.forEach((card) => {
    computerArea.appendChild(card)
  })
  cardsContainer.innerHTML = ''
}

createDesk()
