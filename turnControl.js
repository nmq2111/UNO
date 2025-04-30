function handleSpecialCard(card, currentPlayer, otherPlayer) {
  const value = card.getAttribute('data-number')

  switch (value) {
    case '+2':
      drawCards(otherPlayer, 2)
      skipTurn()
      break

    case 'skip':
      skipTurn()
      break

    case 'reverse':
      reverseTurns()
      break

    case '+4':
      drawCards(otherPlayer, 4)
      chooseColor(card)
      skipTurn()
      break

    case 'color':
      chooseColor(card)
      break
  }
}

function drawCards(playerArea, count) {
  const deck = document.querySelector('.cards-container')
  const allCards = Array.from(deck.querySelectorAll('.card'))

  for (let i = 0; i < count && allCards.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * allCards.length)
    const card = allCards[randomIndex]
    deck.removeChild(card)
    playerArea.appendChild(card)
    allCards.splice(randomIndex, 1)
  }
}

function skipTurn() {
  passTurn()
}

function reverseTurns() {
  passTurn()
}

function chooseColor(card) {
  const colors = ['red', 'green', 'blue', 'yellow']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  card.setAttribute('data-color', randomColor)
  card.style.backgroundColor = randomColor
}

let currentPlayer = 'player'

function passTurn() {
  if (currentPlayer === 'player') {
    currentPlayer = 'computer'
    setTimeout(computerPlay, 2000)
  } else {
    currentPlayer = 'player'
  }
}
