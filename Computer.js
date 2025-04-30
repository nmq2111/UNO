//variables in both functions

//to check if we have the right card - function checkUNO
function checkUNO(playerCard, topCard) {
  if (!topCard) return true

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

function computerPlay() {
  const cardPlacement = document.querySelector('.Card-placement')
  const topCard = cardPlacement.querySelector('.card')
  console.log('Top card:', topCard)
  const computerCards = Array.from(
    document.querySelectorAll('.ComputerHand .card')
  )
  console.log("Computer's cards:", computerCards)

  for (let card of computerCards) {
    console.log('Checking card:', card)

    if (checkUNO(card, topCard)) {
      console.log('Valid card found:', card)
      cardPlacement.innerHTML = ''
      cardPlacement.appendChild(card)
      handleSpecialCard(
        card,
        document.querySelector('.ComputerHand'),
        document.querySelector('.PlayerHand')
      )
      passTurn()
      return
    }
  }

  const drawnCard = computerDrawCard()
  if (drawnCard && checkUNO(drawnCard, topCard)) {
    setTimeout(() => {
      cardPlacement.innerHTML = ''
      cardPlacement.appendChild(drawnCard)
      handleSpecialCard(
        drawnCard,
        document.querySelector('.ComputerHand'),
        document.querySelector('.PlayerHand')
      )
    }, 200)
  }

  setTimeout(passTurn, 50)
}

passTurn()
