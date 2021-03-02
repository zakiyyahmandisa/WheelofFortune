//TODO: change the random words to '-'
let word = getRandomWord();
//document.getElementById("box")
let space = " ";
let maskedWord = "";
word = word.toUpperCase();

function game(word){
  for(let i = 0; i < word.length; i++){
    let nextCharacter = word.charAt(i) === space ? space : "-";
    maskedWord += nextCharacter;
    }
  }
game(word);
/*TODO:  When the user clicks start, reveal any instances of the letters R,S,T,L,N, or E. 
Using the "horse" example above, we would then display: "\_ \_ R S E" */
//document.getElementById("start").addEventListener("click", function(){
//let showLetters = 
//})
/* TODO: Via a form input, the user can then guess 3 constanants and one vowel. 
For example, the user might enter "B C D A" and press enter.
 You should validate to make sure that they enter a valid statement.*/

 /* TODO: Finally, allow the user to submit a guess at what the word is, and tell them if they're right or wrong */


