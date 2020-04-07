//Create a piano player with DOM //events in JavaScript!

// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
//Step 1
const keyPlay = function(event){
  event.target.style.backgroundColor = 'green' ;
}


// Write a named function with event handler properties
//Step 2
let keyReturn = function(event){
  event.target.style.backgroundColor = '';
}


function keyHighlight(note){
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
}



//step 6 forEach loop
// Write a loop that runs the array elements through the function
notes.forEach(function(note){
  return keyHighlight(note)
});

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
//step 8 create an event handler
//property with a click event on
// nextOne element
nextOne.onclick = function(){
  //Step 9 (1) Changing the .hidden of nextTwo
  // (2) hide the nextOne button 
nextTwo.hidden = false;
nextOne.hidden = true;

//Step 10 add changes to letter-note-five and letter-note-six
document.getElementById('letter-note-five').innerHTML = 'D';
document.getElementById('letter-note-six').innerHTML = 'C';

}

// Write anonymous event handler property and function for the second progress button
//Step 11: Create another event handler property with click event on nextTwo

nextTwo.onclick = function(){

  //Step 12: Reveal the nextThree button and hide the nextTwo button
  nextThree.hidden = false;
  nextTwo.hidden = true;

  //Step 13: Change the content word-five and word-six
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';

//Step 14: Change the display property of lastLyric
lastLyric.style.display = 'inline-block';

//Step 15: Change the music notes to guide the piano student through the song.
document.getElementById('letter-note-three').innerHTML = 'G';
document.getElementById('letter-note-four').innerHTML = 'E';
document.getElementById('letter-note-five').innerHTML = 'C';
document.getElementById('letter-note-six').innerHTML = 'B'; 

}


// Write anonymous event handler property and function for the third progress button
//Step 16: Create an event handler property on the nextThree element
nextThree.onclick = function(){
  //Step 17: Make changes to the button that appears when nextThree is clicked.
  startOver.hidden = false;
  nextThree.hidden = true;

  //Step 18: Add changes so the lyrics change when this button is clicked.
document.getElementById('word-one').innerHTML = 'HAP-';
document.getElementById('word-two').innerHTML = 'PY';
document.getElementById('word-three').innerHTML = 'BIRTH-';
document.getElementById('word-four').innerHTML = 'DAY';
document.getElementById('word-five').innerHTML = 'TO';
document.getElementById('word-six').innerHTML = 'YOU!';

//Step 19: Add change to nextThree so the musical notes change when the button is clicked
document.getElementById('letter-note-one').innerHTML = 'F';
document.getElementById('letter-note-two').innerHTML = 'F';
document.getElementById('letter-note-three').innerHTML = 'E';
document.getElementById('letter-note-four').innerHTML = 'C';
document.getElementById('letter-note-five').innerHTML = 'D';
document.getElementById('letter-note-six').innerHTML = 'C';

//Step 20: Change the display property of lastLyric 
lastLyric.style.display = 'none';

}


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}