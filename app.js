//Get the element with the ID of qwerty and save it to a variable.
const qwerty = document.querySelector('#qwerty');
//Get the element with the ID of phrase and save it to a variable.
const phrase = document.querySelector('#phrase');
//Create a missed variable, initialized to 0
const missed = 0;
const startGameButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
//Create a phrases array that contains at least 5 different phrases as strings
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
function getRandomPhraseArray(arr) {
  //Randomly choose a phrase
  let random = phrases[Math.floor(Math.random() * phrases.length)];
  //Split that phrase into a new array of characters
  let arrayOfCharacters = random.split('');
  //Return the new character array
  return arrayOfCharacters;
}
  //Create an addPhraseToDisplay function
function addPhraseToDisplay(arr) {
  //Loop through an array of characters
for (let i = 0; i < arrayOfCharacters.length; i += 1) {
  //for each character in the array, you’ll create a list item, put the character inside of the list item
  const li = arrayOfCharacters[i];
  //Append that list item to the #phrase ul in your HTML
  const div = document.getElementById('phrase');
  const ul = div.getElementsByTagName('ul');
  ul.appendChild(li);
  //If the character in the array is a letter and not a space, the function should add the class “letter” to the list item
  if (li !== '') {
    li.className = 'letter';
  } else {
    li.className = '';
  }
}
}
// Pass in the phrases array as an argument when you call the function
const phraseArray = getRandomPhraseArray(phrases);
addPhrasetoDisplay(phraseArray);

