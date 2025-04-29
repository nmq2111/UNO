function handleSpecialCard(card, currentPlayer, otherPlayer) {
  const value = card.getAttribute('data-number')
  const color = card.getAttribute('data-color')

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
      skipTurn()
      chooseColor(card)
      break

    case 'color':
      chooseColor(card)
      break

    default:
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
  console.log('Turn skipped')
}

function reverseTurns() {
  console.log('Turn order reversed')
}

function chooseColor(card) {
  const colors = ['red', 'green', 'blue', 'yellow']
  const chosenColor = prompt('Choose a color: red, green, blue, yellow')

  if (colors.includes(chosenColor)) {
    card.setAttribute('data-color', chosenColor)
    card.style.backgroundColor = chosenColor
  } else {
    alert('Invalid color. Defaulting to red.')
    card.setAttribute('data-color', 'red')
    card.style.backgroundColor = 'red'
  }
}

let currentPlayer = 'player'

function passTurn() {
  if (currentPlayer === 'player') {
    currentPlayer = 'computer'
    setTimeout(computerPlay, 1000)
  } else {
    currentPlayer = 'player'
  }
}
