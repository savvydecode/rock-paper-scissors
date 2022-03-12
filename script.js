
// FIRST CACHE THE HTML IN THE JAVASCRIPT FILE
var userScore = 0;
var computerScore = 0;
const scoreBoard_div = document.querySelector('.score-board');
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const resetScore_button = document.getElementById('reset');
const initial = document.getElementById('init').innerHTML;
resetScore_button.addEventListener('click', () => reset())

// test varibles (personal)
const info = document.getElementById('info');
const info2 = document.getElementById('info2');
var info3 = document.getElementById('info3');



// lISTENERS FOR USER CHOICE
// Pass the listeners to the game function to compare with the computer choice.
function main(){
    rock_div.addEventListener('click', () => game('r'));

    paper_div.addEventListener('click', () => game('p'));

    scissors_div.addEventListener('click', () => game('s'));
}
main();


// COMPUTER GUESSES A CHOICE RANDOMLY
//Pass the computer choice to the game function to compare it with the user choice.
function getComputerChoice(){
    const choices = ['r','p','s'];
    const rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

// COMPARE THE TWO CHOICES
function game(userChoice){
    let computerChoice = getComputerChoice();  // GET RETURN VALUE FROM COMP
    //info.innerHTML = userChoice;     // TEST; DISPLAY VALUES (OPTIONAL)
    //info2.innerHTML = computerChoice;
    
    // CHECK THE COMBINATION OF THE TWO VALUES USING SWITCH 
    switch (userChoice + computerChoice){
        case "rs":
        case "sp":
        case "pr":
            // FOR ANY OF THE ABOVE COMBINATIONS, CALL THE WIN FUNCTION.
            win(userChoice, computerChoice);  // PASS IN THE TWO CHOICES
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

// FUNCTION TO CONVERT THE CHOICES FROM LETTER TO WORD
function convert(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

// SMALL USER AND COMP WORD TO KNOW EACH OTHER'S CHOICE
function smallUserWord(){
    return "User".fontsize(3).sub();
}
function smallCompWord(){
    return "Comp".fontsize(3).sub();
}

// WIN FUNCTION: increase uner score by 1 and display it
function win(user, computer){
    const userChoice_div = document.getElementById(user); 
    userScore += 1;
   userScore_span.innerHTML = userScore;
   // added info
   result_p.innerHTML = `${convert(user)}${smallUserWord()} beats ${convert(computer)}${smallCompWord()} <br>You Win`;
   // Add a glow class to and remove it after 3oo millisecomds
   userChoice_div.classList.add('green-glow');
   setTimeout( () => userChoice_div.classList.remove('green-glow'), 300);
}

// LOSE FUNCTION: increase computer score by 1 and display it
function lose(user, computer){
    const userChoice_div = document.getElementById(user);
    computerScore += 1;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(user)}${smallUserWord()} loses to ${convert(computer)}${smallCompWord()} <br>You Lost `;
    userChoice_div.classList.add('red-glow');
    setTimeout( () => userChoice_div.classList.remove('red-glow'), 300);
}

// DRAW: display choices only, add the grey-glow class
function draw(user, computer){
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convert(user)} equal to ${convert(computer)} <br> Draw`;
    userChoice_div.classList.add('grey-glow');
    setTimeout( () => userChoice_div.classList.remove('grey-glow'), 300);
}

// reset the scores
function reset(){
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = initial;
}