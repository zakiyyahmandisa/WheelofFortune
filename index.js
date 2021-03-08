
let word = getRandomWord();
//document.getElementById("box")
let space = " ";
let maskedWord = "";
word = word.toUpperCase();
const output = document.getElementById("output");

//TODO: change the random words to '-'
document.getElementById("display-word").addEventListener("click", function (e){
e.preventDefault()
function game(string){
  for(let i = 0; i < string.length; i++){
    let nextCharacter = string.charAt(i) === space ? space : "-";
    maskedWord += nextCharacter;
    }
  }
  game(word)
  console.log(word)
  output.append(maskedWord);
})




//TODO:  When the user clicks start, reveal any instances of the letters R,S,T,L,N, or E.
document.getElementById("hint").addEventListener("click", function () {
  output.innerHTML = ""
  for (let i = 0; i < word.length; i++) {
   // reveal it.
    if (word[i] === "R" || word[i] === "S" || word[i] === "T" || word[i] === "L" || word[i] === "N" || word[i] === "E") {
      output.innerHTML += word[i];
    }
   //else cover it
    else {
      output.innerHTML += "-";
    }
  }
});
 
/* TODO: Via a form input, the user can then guess 3 constanants and one vowel. 
For example, the user might enter "B C D A" and press enter.
 You should validate to make sure that they enter a valid statement.*/
 let guess = document.getElementById("guess");

//store all values in an object 
//iterate thru the input guess, is the character in the consontants or values object
//keep count of consontant, keep count of vowel
//check if the consontant count < 3, and vowel count < 1 , then keep iterating thru input guess (give error validation)
//if consontant count < 3 then return an alert// validation statement
//else line 59 down
let enter =document.getElementById("enter").addEventListener("click", function (e) {
  e.preventDefault()
  let textToValidate = document.getElementById("guess").value;
  let validate = document.getElementById("validate");

  const vowel = ['a', 'e', 'i', 'o', 'u'];  // array of vowel
  let str = (textToValidate.trim()).split(' ').join('').toLowerCase()
 
  if (str.length == 4) {
      let v = 0;
      let c = 0;
      for (let i = 0; i < str.length; i++) {
          if (vowel.includes(str[i])) {  
              v++;
          } else {
              c++;
          }
      }
      if (v == 1 && c == 3) {
          validate.innerText = "Look above to see if your guess is right.";
          validate.style.color = "green";
      } else {
          validate.innerText = "Please enter 3 consonants and 1 vowel";
          validate.style.color = "red";
      }
  } else {
      validate.innerText = "Please enter valid string";
      validate.style.color = "red";
  }
})


 //TODO: Check if user inputted 3 consontants and vowels are in the word 
 


 /* TODO: Finally, allow the user to submit a guess at what the word is, and tell them if they're right or wrong */
 
 function check(inputGuess) {
// iteraate through inputGuess, and checking for every character, check if its not a number or check if its integer: regex?? 
   if (word == inputGuess.toUpperCase()) {
     alert("Congratulations you guess the word correctly!");
   } else {
     alert("Aw, you didn't guess correctly. Play the game again for a 2nd chance! ");
   }
 } 
 document.getElementById("final-guessenter").addEventListener('click', function (e) {
   e.preventDefault()
   let guess_value = document.getElementById("guess-word").value;
   console.log(guess_value)
  check(guess_value);
 })
 
 document.getElementById("enter").addEventListener("click", function (e) {
  e.preventDefault()
  let textToValidate2 = document.getElementById("guess").value;
  output.innerHTML = ""
  for (let i = 0; i < word.length; i++) {
   // reveal it.
   if (word[i] === "R" || word[i] === "S" || word[i] === "T" || word[i] === "L" || word[i] === "N" || word[i] === "E" || word[i] === textToValidate2.toUpperCase) {
    output.innerHTML += word[i];
  }
   //else cover it
    else {
      output.innerHTML += "-";
    }
  }
});
 

