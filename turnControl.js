function SpecialCard(card) {
  const value = card.getAttribute('data-number')
  const opponentHand = document.querySelector('.ComputerHand')
  const deck = document.querySelector('.cards-container')

  if (value === '+2' || value === '+4') {
    let drawCount = value === '+2' ? 2 : 4

    for (let i = 0; i < drawCount; i++) {
      const topDeckCard = deck.querySelector('.card')
      if (topDeckCard) {
        opponentHand.appendChild(topDeckCard)
      } else {
        console.error('No more cards in deck to draw!')
        break
      }
    }

    console.log(`Opponent draws ${drawCount} cards!`)
  }
}
