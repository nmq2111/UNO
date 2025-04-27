# 🃏 UNO Game (Player vs Computer)

UNO is a fast card game where players match cards by color or number to get rid of all their cards first. The deck has four colors (red, green, blue, yellow), numbers 0–9, and special cards like Skip, Reverse, Draw Two, and Wilds. Players start with 7 cards and must play a matching card or draw if they can't. When down to one card, they must shout "UNO!" to win. The first player with no cards left wins the game.

---

## 🕹️ How to Play

1. Each player gets 7 cards.
2. Place the rest of the deck face down; flip one card to start the discard pile.
3. On your turn, match the top card by color, number, or symbol.
4. If you can't play, draw a card from the deck. If it matches, you can play it; if not, you keep it.
5. Use action cards (Skip, Reverse, Draw Two) to change the game.
6. Wild cards let you pick any color; Wild Draw Four makes the next player draw four cards.
7. When you have one card left, shout "UNO!" before your turn ends.
8. If you forget to say "UNO" and someone catches you, draw two cards as a penalty.
9. The first player to get rid of all their cards wins!

---

## 📏 Game Rules

1. Match by color or number: You must play a card that matches the top card’s color, number, or symbol.

2. Wild cards can be played anytime: You can change the color using a Wild or Wild Draw Four card.

3. Draw if you can't play: If you have no matching card, you must draw one card. If it's playable, you can play it immediately.

4. Special cards effects:

   - Skip: Next player misses their turn.

   - Reverse: Play direction changes.

   - Draw Two: Next player draws two cards and skips their turn.

   - Wild: Choose any color.

   - Wild Draw Four: Choose a color, and the next player draws four cards (only use if you have no matching color).

5. Say "UNO" with one card left: You must say "UNO!" before your turn ends when you have one card left.

6. Penalty for forgetting UNO: If you forget to say "UNO" and another player catches you, you must draw two cards.

7. Winning: The first player to play all their cards wins the game.

8. Challenge Wild Draw Four: If you think someone played a Wild Draw Four unfairly (when they could have played another card), you can challenge them. If they cheated, they draw four cards instead!

---

## 🛠️ Functions Used

### Core Setup

- `initializeGame()` → Start a new game.
- `createDeck()` → Create the full deck of UNO cards.
- `shuffleDeck(deck)` → Shuffle the deck randomly.
- `dealCards(player, computer, deck)` → Deal 7 cards to each.

### Gameplay

- `startTurn(player)` → Handle player’s turn.
- `startComputerTurn()` → Handle computer’s turn.
- `playCard(playerOrComputer, card)` → Play a selected card.
- `drawCard(playerOrComputer)` → Draw a card from the deck.
- `checkPlayable(card, topCard)` → Validate if a card can be played.
- `endTurn()` → Switch to the next turn.

### Special Cards

- `applySkip()` → Skip next turn.
- `applyReverse()` → Reverse direction (acts as skip in 2-player).
- `applyDrawTwo()` → Make opponent draw two cards.
- `applyWild(playerOrComputer)` → Pick a color when playing a wild card.
- `applyWildDrawFour(playerOrComputer)` → Pick color + opponent draws four.

### Computer AI

- `computerPlayCard()` → Choose the best card to play.
- `computerChooseColor()` → Choose the best color for Wild cards.
- `computerDrawIfNeeded()` → Draw a card if no playable card is available.

### UNO Rules

- `sayUNO(playerOrComputer)` → Call UNO when one card left.
- `checkWinner(playerOrComputer)` → Check if someone has won.

### UI Functions

- `renderPlayerHand()` → Show player’s hand.
- `renderComputerHand()` → Show computer’s cards (face down).
- `renderTopCard()` → Show the current card on top of the discard pile.
- `updateTurnDisplay()` → Show whose turn it is.
- `displayMessage(message)` → Display actions like skips, draws, etc.

### Utilities

- `nextPlayer()` → Change current player.
- `checkDeckEmpty()` → Reshuffle discard pile if deck runs out.

---
