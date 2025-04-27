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

### createDeck()

- Purpose: Creates the full UNO deck (numbers, colors, action, and wild cards).

- Usage: Called at the start of the game to initialize the deck.

### shuffle(deck)

- Purpose: Shuffles the cards in the deck randomly.
- Usage: Called after creating the deck to randomize the order of the cards.

### drawCard(playerHand, deck)

- Purpose: Draws a card from the deck into the player's hand (or computer's hand).

- Usage: Called when a player or computer needs to draw a card (if no valid cards can be played).

### playCard(card, topCard, playerHand)

- Purpose: Places a card from the player's hand onto the board, if it is a valid move.

- Usage: Called when the player or computer plays a card.

### isValidMove(card, topCard)

- Purpose: Checks if the card being played matches the top card (by color, number, or type)

- Usage: Called to ensure the player's move is valid.

### nextTurn(playerTurn)

- Purpose: Switches between the player’s and computer’s turn.
- Usage: Called after each player completes their move.

### handleSpecialCard(card)

- Purpose: Handles the special actions of cards like Skip, Reverse, +2, and Wild cards.

- Usage: Called when a special card is played to trigger its effect (e.g., skipping the next player, reversing the order).

### computerTurn(playerHand, topCard, deck)

- Purpose: Executes the computer's turn. The computer plays a valid card or draws from the deck if it has no valid moves.

- Usage: Called on the computer's turn.

### getBestMove(playerHand, topCard)

- Purpose: Determines the best card for the computer to play (chooses wild cards, special action cards, or a matching number/color).

- Usage: Used within computerTurn() to decide the computer's move.

### checkUno(playerHand)

- Purpose: Checks if the player has only one card left and needs to say "UNO".

- Usage: Called when the player has one card left.

### checkWin(playerHand)

- Purpose: Checks if the player or computer has no cards left, thus winning the game.

- Usage: Called after each turn to check for a win.

### startGame()

- Purpose: Initializes the game by creating the deck, shuffling it, and dealing 7 cards to each player.

- Usage: Called to start the game.

---
