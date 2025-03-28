# Dicee Game

A simple web-based dice game where two players roll dice, and the higher roll wins. Refresh the page to roll the dice again.

## Features
- Two-player dice rolling game
- Randomized dice rolls on refresh
- Simple and clean UI
- Built using HTML, CSS, and JavaScript

## Files Included
- `index.html` - Main structure of the webpage
- `styles.css` - Styling for the game
- `index.js` - JavaScript logic for rolling dice
- `images/` - Contains dice images (dice1.png to dice6.png)

## How to Use
1. Download or clone the repository.
2. Open `index.html` in a browser.
3. Refresh the page to roll the dice and see the result.

## JavaScript Logic
- The game uses an array of dice images (`dice1.png` to `dice6.png`).
- Two random numbers (1-6) are generated using `Math.random()`.
- The corresponding dice images are updated dynamically using `setAttribute()`.
- The winner is determined based on the dice values:
  - If both numbers are equal, it displays "Draw!".
  - If Player 1 has a higher number, it displays "🚩 Player 1 Wins!".
  - Otherwise, "Player 2 Wins! 🚩" is displayed.

## Output Screenshots
Here are examples of the game results:

### Player 1 Wins
![Player 1 Wins](images/player1_wins.png)

### Player 2 Wins
![Player 2 Wins](images/player2_wins.png)

### Draw
![Draw](images/draw.png)

(Add actual screenshots to the `images/` folder and rename them accordingly.)

## Technologies Used
- HTML
- CSS
- JavaScript

## Author
**Mohammed Saad Fazal**

