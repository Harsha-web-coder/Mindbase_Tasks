// Constants representing the three possible choices
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

// Function to get a random choice for a player
function getRandomChoice() {
  const choices = [ROCK, PAPER, SCISSORS];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to shuffle the images for both players
function shuffleImages() {
  const player1Image = document.getElementById('player1Image');
  const player2Image = document.getElementById('player2Image');

  // Generate random choices for both players
  const player1Choice = getRandomChoice();
  const player2Choice = getRandomChoice();

  // Set the image source based on the choices
  player1Image.src = `images/${player1Choice}.png`;
  player2Image.src = `images/${player2Choice}.png`;
}

// Function to determine the winner based on the choices
function determineWinner() {
  const player1Choice = document.getElementById('player1Image').src;
  const player2Choice = document.getElementById('player2Image').src;

  // Determine the winner based on the choices
  let winner = '';

  if (player1Choice.includes(ROCK)) {
    if (player2Choice.includes(PAPER)) {
      winner = 'Player 2';
    } else if (player2Choice.includes(SCISSORS)) {
      winner = 'Player 1';
    }
  } else if (player1Choice.includes(PAPER)) {
    if (player2Choice.includes(SCISSORS)) {
      winner = 'Player 2';
    } else if (player2Choice.includes(ROCK)) {
      winner = 'Player 1';
    }
  } else if (player1Choice.includes(SCISSORS)) {
    if (player2Choice.includes(ROCK)) {
      winner = 'Player 2';
    } else if (player2Choice.includes(PAPER)) {
      winner = 'Player 1';
    }
  }

  // Display the winner
  if (winner) {
    setTimeout(() => {
      alert(`The winner is ${winner}!`);
    }, 500);
  } else {
    setTimeout(() => {
      alert("It's a tie!");
    }, 500);
  }
}

// Add event listener to the start button
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
  // Shuffle the images every 300 milliseconds for 5 seconds (10 times)
  let shuffleCount = 0;
  const shuffleInterval = setInterval(() => {
    shuffleImages();
    shuffleCount++;
    if (shuffleCount === 10) {
      clearInterval(shuffleInterval);
      determineWinner();
    }
  }, 300);
});
