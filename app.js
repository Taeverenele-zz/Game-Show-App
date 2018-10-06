// Variables
const startGameButton = document.querySelector('.btn__reset');
const playAgainButtonText = 'Play again';
const tryAgainButtonText = 'Try again';
const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const letters = document.getElementsByClassName('letter');
const lettersFound = document.getElementsByClassName('show');
const ul = document.querySelector('#phrase ul');
const hearts = document.querySelectorAll('.tries img');
const title = document.querySelector('.title');
let missed = 0;
const phrases = [
  'I am pretending to be a tomato',
  'Tomorrow has been cancelled due to lack of interest',
  'No one can make you feel inferior without your consent',
  'I know kung fu and fifty other dangerous words',
  'Never put a cat on your head'
];

// Add event listeners
startGameButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

qwerty.addEventListener('click', e => {
  let clickedElement = e.target;
  if (clickedElement.tagName === 'BUTTON') {
    clickedElement.className = 'chosen';
    clickedElement.disabled = true;
    const matches = checkLetter(clickedElement.textContent);
    if (!matches) {
      hearts[missed].setAttribute('src', 'images/lostHeart.png');
      missed++;
    }
  }
  checkWin();
});

startGameButton.addEventListener('click', e => {
  if (e.target.textContent === playAgainButtonText || e.target.textContent === tryAgainButtonText) {
    const keyrow = document.querySelectorAll('.keyrow button');
    missed = 0;
    ul.innerHTML = '';
    for (let i = 0; i < keyrow.length; i += 1) {
      keyrow[i].className = '';
      keyrow[i].disabled = false;
    }
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].setAttribute('src', 'images/liveHeart.png');
    }
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
  }
})

// Functions
const getRandomPhraseAsArray = arr => {
  const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  return randomPhrase.split('');
}

const addPhraseToDisplay = arr => {
  for (let i = 0; i < arr.length; i += 1) {
    const li = document.createElement('li');
    const character = arr[i];
    li.textContent = character;
    ul.appendChild(li);
    const isSpaceCharacter = character === ' ';
    li.className = isSpaceCharacter ? 'space' : 'letter';
  }
}

const checkLetter = letter => {
  let guess = null;
  for (let i = 0; i < letters.length; i += 1) {
    if (letter == letters[i].textContent.toLowerCase()) {
      guess = letter;
      letters[i].classList.add('show');
    }
  }
  return guess;
}

const playerHasWon = () => {
  overlay.style.display = 'flex';
  overlay.className = 'win';
  title.textContent = 'You have won!!! Wooohhoooo!!!!';
  startGameButton.textContent = playAgainButtonText;
}

const playerHasLost = () => {
  overlay.style.display = 'flex';
  overlay.className = 'lose';
  title.textContent = 'Game over! You lose!';
  startGameButton.textContent = tryAgainButtonText;
}

const checkWin = () => {
  if (lettersFound.length === letters.length) {
    playerHasWon();
    return;
  }
  if (missed === 5 ) {
    playerHasLost();
  }
 }

// Calling functions
 const phraseArray = getRandomPhraseAsArray(phrases);
 addPhraseToDisplay(phraseArray);

/////////////// Alternative game-reset ///////////////////

//  window.addEventListener('click', e => {
  // const isPlayAgainOrTryAgain = e.target.innerHTML === playAgainButtonText || e.target.innerHTML === tryAgainButtonText;
//   if (isPlayAgainOrTryAgain) {
//     reset();
//   }
// });

// const reset = () => {
//  window.location.reload(true);
// }