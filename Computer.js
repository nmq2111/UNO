//This class will manage the computer's hand and its actions.

function playCard(player, currentTopCard) {
  const playableCards = player.hand.filter((card) =>
    checkUNO(card, currentTopCard)
  )

  if (playableCards.length > 0) {
    const cardToPlay =
      playableCards[Math.floor(Math.random() * playableCards.length)]
    player.hand = player.hand.filter((card) => card !== cardToPlay)
    return cardToPlay
  }
  return null
}

function drawCard(deck) {
  if (deck.length > 0) {
    const drawnCard = deck.pop()
    return drawnCard
  }
  return null
}

function takeTurn(player, currentTopCard, deck) {
  let playedCard = playCard(player, currentTopCard)
  if (!playedCard) {
    const drawnCard = drawCard(deck)
    if (drawnCard && checkUNO(drawnCard, currentTopCard)) {
      playedCard = drawnCard
      player.hand.push(playedCard)
    }
  }
  return playedCard
}

function createDesk() {
  for (let i = 0; i < 7; i++) {
    player.hand.push(allCards.pop())
    computer.hand.push(allCards.pop())
  }
}

// Main game loop
function playGame() {
  let currentTopCard = null
  let isPlayerTurn = true

  function nextTurn() {
    if (isPlayerTurn) {
      DrawCard()
    } else {
      const playedCard = takeTurn(computer, currentTopCard, deck)
      if (playedCard) {
        currentTopCard = playedCard
        console.log(`${computer.name} played:`, playedCard)
      }
    }
    isPlayerTurn = !isPlayerTurn
  }

  nextTurn()
}

createDesk()
playGame()
