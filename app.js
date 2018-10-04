// Variables
const title = document.querySelector('.title');
const startGameButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const letters = document.getElementsByClassName('letter');
const lettersFound = document.getElementsByClassName('show');
const ul = document.querySelector('#phrase ul');
const keyrow = document.querySelectorAll('.keyrow button');
let missed = 0;
const phrases = [
  'I am pretending to be a tomato',
  'Tomorrow has been cancelled due to lack of interest',
  'No one can make you feel inferior without your consent',
  'I know kung fu and fifty other dangerous words',
  'Never put a cat on your head'
];

// Event Handlers
startGameButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});
qwerty.addEventListener('click', (e) => {
  let letterChosen = e.target;;
if (e.target.tagName === 'BUTTON') {
  letterChosen.className = 'chosen';
  letterChosen.disabled = true;
  letterChosen = checkLetter(e.target);
  if (letterChosen === null) {
    document.querySelector('.tries').remove();
    missed++;
  }
}
checkWin();
});
startGameButton.addEventListener('click', (e) => {
  if (startGameButton.textContent === 'Play again' || startGameButton.textContent === 'Try again') {
    missed = 0;
    ul.innerHTML = '';
    for (let i = 0; i < keyrow.length; i += 1) {
      keyrow[i].className = '';
      keyrow[i].disabled = false;
    }
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
  }
})

// Functions
const getRandomPhraseAsArray = (arr) => {
  const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  const characters = randomPhrase.split('');
  return characters;
}
const addPhraseToDisplay = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const li = document.createElement('li');
    const character = arr[i];
    li.textContent = character;
    ul.appendChild(li);
    if (character !== ' ') {
      li.className = 'letter';
    } else {
      li.className = 'space';
    }
  }
}
const checkLetter = (button) => {
  let guess = null;
  for (let i = 0; i < letters.length; i += 1) {
    if (button.textContent == letters[i].textContent.toLowerCase()) {
      guess = button.textContent;
      letters[i].classList.add('show');
    }
  }
  return guess;
}
const checkWin = () => {
  if (lettersFound.length === letters.length) {
   overlay.style.display = 'flex';
   overlay.className = 'win';
   title.textContent = 'You have won!!! Wooohhoooo!!!!';
   startGameButton.textContent = 'Play again';
  } if (missed === 5 ) {
   overlay.style.display = 'flex';
   overlay.className = 'lose';
   title.textContent = 'Game over! You lose!';
   startGameButton.textContent = 'Try again';
  }
 }

// Calling functions
 const phraseArray = getRandomPhraseAsArray(phrases);
 addPhraseToDisplay(phraseArray);

