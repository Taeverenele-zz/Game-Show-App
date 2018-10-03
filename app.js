const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const letters = document.getElementsByClassName('letter');
const missed = 0;
const startGameButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
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
//Create a getRandomPhraseAsArray function
function getRandomPhraseAsArray(arr) {
  //Randomly choose a phrase
  const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  //Split that phrase into a new array of characters
  const characters = randomPhrase.split('');
  //Return the new character array
  return characters;
}
const phraseArray = getRandomPhraseAsArray(phrases);

//Create an addPhraseToDisplay function
function addPhraseToDisplay(arr) {
//Loop through an array of characters
  for (let i = 0; i < arr.length; i += 1) {
    //get hold of <ul> element and store it in a variable
    const ul = document.querySelector('#phrase ul');
    //create a <li> element and store it in a variable
    const li = document.createElement('li');
    //for each character in the array, you’ll create a list item, put the character inside of the list item
    const character = arr[i];
    li.textContent = character;
    //append that list item to the #phrase ul in your HTML
    ul.appendChild(li);
    //If the character in the array is a letter and not a space, the function should add the class “letter” to the list item
    if (character !== ' ') {
      li.classList.add('letter');
    } else {
      li.classList.add('space');
    }
  }
}
addPhraseToDisplay(phraseArray);

//Create a checkLetter function.
let guess;
function checkLetter(button) {
  //The function should loop over the letters and check if they match the letter in the button the player has chosen
  guess = null;
  for (let i = 0; i < letters.length; i += 1) {
    //If there’s a match, the function should add the “show” class to the list item containing that letter, store the matching letter inside of a variable, and return that letter.
    if (button.textContent === letters[i].textContent.toLowerCase()) {
      guess = true;
      letters[i].classList.add('show')
      //If a match wasn’t found, the function should return null.
    }
    return guess;
  }
}

//Use event delegation to listen only to button events from the keyboard
let letterChosen;
qwerty.addEventListener('click', (e) => {
//When a player chooses a letter, add the “chosen” class to that button so the same letter can’t be chosen twice
 if (e.target.tagName === 'BUTTON') {
  e.target.classList.add('chosen');
  e.target.disabled = true;
  letterChosen = checkLetter(event.target);
 }
})
