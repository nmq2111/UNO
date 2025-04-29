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
  const remainingBox = document.querySelector('.Remaining')
  remainingBox.addEventListener('click', function () {
    const card = remainingBox.querySelector('.card')
    if (!card) return

    const cardPlacement = document.querySelector('.Card-placement')
    const currentTopCard = cardPlacement.querySelector('.card')

    if (checkUNO(card, currentTopCard)) {
      if (currentTopCard) cardPlacement.removeChild(currentTopCard)
      remainingBox.removeChild(card)
      cardPlacement.appendChild(card)
    }
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

function ADD() {
  const addButton = document.querySelector('.Add')
  const remainingBox = document.querySelector('.Remaining')

  addButton.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')

    const colors = ['red', 'green', 'blue', 'yellow', 'black']
    const values = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '+2',
      'skip',
      'reverse',
      '+4',
      'color'
    ]

    const color = colors[Math.floor(Math.random() * colors.length)]
    let value

    if (color === 'black') {
      value = ['+4', 'color'][Math.floor(Math.random() * 2)]
    } else {
      value = values[Math.floor(Math.random() * 13)]
    }

    newCard.setAttribute('data-color', color)
    newCard.setAttribute('data-number', value)
    newCard.style.backgroundColor = color === 'black' ? 'gray' : color
    newCard.textContent = value

    remainingBox.innerHTML = ''
    remainingBox.appendChild(newCard)
  })
}

DrawCard()
ADD()
