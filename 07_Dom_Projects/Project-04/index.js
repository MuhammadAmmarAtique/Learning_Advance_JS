// This code readibility and maintainbibility is not good
// Try to make functions for evcery task in the project


let form = document.querySelector("form");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let PreviousGuesses = [];
let RemainingGuesses = document.querySelector(".RemainingGuesses");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Generating a random number between 1 and 100
  let msg = document.querySelector("#result");
  let DisplayPreviousGuesses = document.querySelector(".guesses");
  let UserGuess = parseInt(document.querySelector("#guessField").value);

  if ( UserGuess === "" || UserGuess <= 0 ||UserGuess > 100 || isNaN(UserGuess) ) 
    {
    msg.textContent = "Please enter a valid guess!";
    // emptying guess field
    document.querySelector("#guessField").value = "";
     } 
  
  else if (UserGuess != randomNumber) 
  {
    PreviousGuesses.push(UserGuess);
    DisplayPreviousGuesses.textContent = PreviousGuesses.join(", ");

       
    // emptying guess field
    document.querySelector("#guessField").value = "";

    //  Emptying msg box
    msg.textContent = "";

    // Decreasing remaining guesses
    if (RemainingGuesses.innerHTML > 0) {
      RemainingGuesses.innerHTML--;
    }
    // Ending game
    if (RemainingGuesses.innerHTML == 0) 
    {
    PreviousGuesses.length = 0;
    msg.textContent = "Game is over, Start Again!";
    RemainingGuesses.innerHTML = 10;
    // emptying low or high message
    document.querySelector(".lowOrHi").textContent="";
    }
    //Showing Guess to User if its low or high
    let GuesslowOrHi = document.querySelector(".lowOrHi"); 
    if (UserGuess > randomNumber) {
      GuesslowOrHi.innerHTML = "Number is lower";
    } else {
      GuesslowOrHi.innerHTML = "Number is higher";
    }
 
    } 
  
  else if (UserGuess === randomNumber) {
    msg.textContent = `Congrats Your guess is true`;
    PreviousGuesses.length = 0;
    RemainingGuesses.innerHTML = 10;

    // emptying guess field
    document.querySelector("#guessField").value = "";
    // emptying low or high message
    document.querySelector(".lowOrHi").textContent="";

    }
});
