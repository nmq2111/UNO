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

It features **one human player** competing against a **computer bot**.

**Deck and Setup Functions**

- **`createDeck()`**  
  Creates a full UNO deck including colored cards (0–9), action cards (Skip, Reverse, Draw Two), and wild cards (Wild, Wild Draw Four).

- **`shuffleDeck(deck)`**  
  Randomly shuffles the deck to ensure a fair game.

- **`dealCards(players, deck)`**  
  Deals 7 cards to each player (the human and the computer) from the shuffled deck.

- **`startGame()`**  
  Initializes the game by creating and shuffling the deck, dealing cards, and starting the first turn.

---

**Player Functions**

- **`playCard(player, card)`**  
  Allows the player to play a card if it matches the top card’s color, number, or type.

- **`drawCard(player, deck)`**  
  Lets the player draw a card from the deck when no playable card is available.

- **`passTurn()`**  
  Passes the player's or bot’s turn if they have no playable card even after drawing.

- **`checkUno(player)`**  
  Checks if a player has exactly one card left, requiring them to say "UNO".

- **`checkWin(player)`**  
  Checks if a player has no cards left, declaring them the winner.

---

**Bot (Computer) Functions**

- **`botPlayTurn()`**  
  Automates the computer's turn: plays a valid card if possible, otherwise draws a card.

- **`botChooseColor()`**  
  Automatically selects a color when the bot plays a Wild card (usually the color the bot has most cards of).

- **`botDrawCard()`**  
  Makes the bot draw a card when no valid card is available to play.

---

**Turn and Rule Functions**

- **`isValidPlay(card, topCard)`**  
  Validates if a played card is allowed based on the top card's color, number, or type.

- **`nextPlayer()`**  
  Advances the turn to the next player (handles turn order and Reverse cards).

- **`handleActionCard(card)`**  
  Applies the effect of special cards (Skip, Reverse, Draw Two, Wild, Wild Draw Four).

---

**UI and Message Functions**

- **`updateUI()`**  
  Updates the visual display to reflect the current game state (player hands, top card, turn indicator).

- **`displayMessage(message)`**  
  Displays game notifications such as "Player Skipped", "Bot drew 2 cards", or "Choose a color".

---
