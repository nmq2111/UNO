function DrawCard() {
  const playerSlots = document.querySelectorAll('.index')

  playerSlots.forEach((slot) => {
    slot.addEventListener('click', function () {
      const card = slot.querySelector('.card')
      if (!card) return

      const cardPlacement = document.querySelector('.Card-placement')
      const currentTopCard = cardPlacement.querySelector('.card') // save current top card

      const originalSlot = slot

      // 💥 Do NOT clear placement immediately
      // Instead, temporarily remove top card and keep it
      if (currentTopCard) {
        cardPlacement.removeChild(currentTopCard)
      }

      cardPlacement.appendChild(card) // move player's card

      // Now check if valid
      if (checkUNO(card, currentTopCard)) {
        console.log('✅ Valid move! Card stays.')
        // Card stays
      } else {
        console.log('❌ Invalid move! Returning card...')

        // After short delay, move card back
        setTimeout(() => {
          cardPlacement.removeChild(card) // Remove wrong card
          originalSlot.appendChild(card) // Return to hand

          if (currentTopCard) {
            cardPlacement.appendChild(currentTopCard) // Restore the previous card
          }
        }, 500)
      }
    })
  })
}

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

DrawCard()
