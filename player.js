function DrawCard() {
  const playerSlots = document.querySelectorAll('.index')

  playerSlots.forEach((slot) => {
    slot.addEventListener('click', function () {
      const card = slot.querySelector('.card')
      if (!card) return

      const cardPlacement = document.querySelector('.Card-placement')
      const currentTopCard = cardPlacement.querySelector('.card')

      const originalSlot = slot

      if (currentTopCard) {
        cardPlacement.removeChild(currentTopCard)
      }

      cardPlacement.appendChild(card)

      if (checkUNO(card, currentTopCard)) {
      } else {
        setTimeout(() => {
          cardPlacement.removeChild(card)
          originalSlot.appendChild(card)

          if (currentTopCard) {
            cardPlacement.appendChild(currentTopCard)
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

function Add() {
  const deck = document.querySelector('.cards-container')
  const playerHandSlots = document.querySelectorAll('.Add')

  const emptySlot = Array.from(playerHandSlots).find(
    (slot) => !slot.querySelector('.card')
  )

  if (!emptySlot) {
    return
  }

  const topDeckCard = deck.querySelector('.card')
  if (topDeckCard) {
    emptySlot.appendChild(topDeckCard)
  }
}

Add()
DrawCard()
