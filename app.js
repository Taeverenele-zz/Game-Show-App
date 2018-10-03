const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const missed = 0;
const startGameButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const phrases = [
  'I am pretending to be a tomato',
  'Tomorrow has been cancelled due to lack of interest',
  'No one can make you feen inferior without your consent',
  'I know kung fu and fifty other dangerous words',
  'Never put a cat on your head'
];

startGameButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

function getRandomPhraseArray() {
  let random = Math.floor(Math.random() * (phrases.length));
  document.phrase.innerHTML = phrases[random];
}