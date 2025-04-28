function createDeck() {
  document.addEventListener('DOMContentLoaded', () => {
    fetch('Card.html')
      .then((response) => response.text())
      .then((data) => {
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = data

        const allCards = Array.from(tempDiv.querySelectorAll('.card'))

        if (allCards.length < 14) {
          console.error('Not enough cards to deal!')
          return
        }

        const playerHand = []
        const computerHand = []

        // Pick 7 cards for player and 7 for computer
        for (let i = 0; i < 7; i++) {
          // Player hand
          let randomIndex = Math.floor(Math.random() * allCards.length)
          playerHand.push(allCards[randomIndex].cloneNode(true))
          allCards.splice(randomIndex, 1)

          // Computer hand
          randomIndex = Math.floor(Math.random() * allCards.length)
          computerHand.push(allCards[randomIndex].cloneNode(true))
          allCards.splice(randomIndex, 1)
        }

        // Now place cards into player index slots
        const indexSlots = document.querySelectorAll('.index')
        playerHand.forEach((card, idx) => {
          if (indexSlots[idx]) {
            indexSlots[idx].appendChild(card)
          }
        })

        // And place computer's hand
        const computerArea = document.querySelector('.ComputerHand')
        computerHand.forEach((card) => {
          computerArea.appendChild(card)
        })
      })
      .catch((error) => console.error('Error fetching card data:', error))
  })
}

createDeck()
