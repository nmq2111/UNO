function DrawCard() {
  const playerSlots = document.querySelectorAll('.index')

  playerSlots.forEach((slot) => {
    slot.addEventListener('click', function () {
      const card = slot.querySelector('.card')
      if (!card) return

      const cardPlacement = document.querySelector('.Card-placement')
      const currentTopCard = cardPlacement.querySelector('.card') // the card currently placed

      // Temporarily move card to placement
      const originalSlot = slot
      cardPlacement.innerHTML = ''
      cardPlacement.appendChild(card)

      // Now check if valid
      if (checkUNO(card, currentTopCard)) {
        console.log('Valid move! Card stays.')
        // Card stays in Card-placement
      } else {
        console.log('Invalid move! Returning card.')

        // Wait 500ms, then move back nicely
        setTimeout(() => {
          cardPlacement.removeChild(card) // Remove from placement
          originalSlot.appendChild(card) // Move back to original slot
        }, 500)
      }
    })
  })
}

function checkUNO(playerCard, topCard) {
  if (!topCard) {
    // If no top card, allow any card
    return true
  }

  const playerColor = playerCard.getAttribute('data-color')
  const playerNumber = playerCard.getAttribute('data-number')

  const topColor = topCard.getAttribute('data-color')
  const topNumber = topCard.getAttribute('data-number')

  return (
    playerColor === topColor ||
    playerNumber === topNumber ||
    playerColor === 'wild'
  )
}

DrawCard()

function checkUNO() {}
