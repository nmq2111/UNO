function checkUNO(playerCard, topCard) {
  if (!topCard) {
    return true
  }

  const playerColor = playerCard.getAttribute('data-color')
  const playerNumber = playerCard.getAttribute('data-number')

  const topColor = topCard.getAttribute('data-color')
  const topNumber = topCard.getAttribute('data-number')

  return (
    playerColor === topColor ||
    playerNumber === topNumber ||
    playerColor === 'black'
  )
}

function computerDrawCard() {
  const deck = document.querySelector('.cards-container')
  const allCards = Array.from(deck.querySelectorAll('.card'))
  const computerHand = document.querySelector('.ComputerHand')

  if (allCards.length === 0) return null

  const randomIndex = Math.floor(Math.random() * allCards.length)
  const card = allCards[randomIndex]

  deck.removeChild(card)
  computerHand.appendChild(card)

  return card
}

function findValidComputerCard() {
  const computerHand = document.querySelectorAll('.ComputerHand .card')
  const topCard = document.querySelector('.Card-placement .card')

  for (const card of computerHand) {
    if (checkUNO(card, topCard)) {
      return card
    }
  }

  return null
}

function computerPlay() {
  const cardPlacement = document.querySelector('.Card-placement')
  const topCard = cardPlacement.querySelector('.card')

  const validCard = findValidComputerCard()

  if (validCard) {
    cardPlacement.innerHTML = ''
    cardPlacement.appendChild(validCard)
  } else {
    const newCard = computerDrawCard()
    if (newCard && checkUNO(newCard, topCard)) {
      setTimeout(() => {
        cardPlacement.innerHTML = ''
        cardPlacement.appendChild(newCard)
      }, 1000)
    }
  }
}

window.addEventListener('load', () => {
  setTimeout(computerPlay, 1000)
})
