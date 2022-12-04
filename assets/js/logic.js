let timerElement = document.querySelector("#time");
let startButton = document.querySelector("#start"); 
let startScreen = document.querySelector("#start-screen");
let questionTitle = document.querySelector("#question-title");
let questions = document.querySelector("#questions");
let choices = document.querySelector("choices");

let timer;
let timerCount;
questionTitle = "";


// Start Game
function startGame() {
    //Hides the start screen 
    startScreen.style.visibility = 'hidden';
    timerCount = 60;
    // Start timer
    startTimer()
    // Start questions
    startQuestions()
}

// Start timer
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
            if (timerCount >= 0) {
                // tests win condition 

                // Clears interval and stops timer
                // clearInterval(timer);
                
                // // Timer penalty for giving a wrong answer
                // if (answerGiven === false) {
                //     timerCount - 10;
                // }
            
    
    
    // If time has ran out
    if (timerCount === 0) {
        // Clears interval and sets lose function
        clearInterval(timer);
        //lose
    } 
}}, 1000);
}

// Attach event listener to start button
startButton.addEventListener("click", startGame);


// Start questions
function startQuestions() {
    document.getElementById("questions").classList.remove("hide");
    questions.textContent = question.questionOne;
    choices.textContent = answerChoices.choiceOne;

console.log(question.questionNine);
console.log(answerChoices.choiceOne);
}



// Questions & answers
let question = {
        questionOne: `"All right Jim, your quarterlies look very good. How are things going at the library?"`,
        questionTwo: "Shall I play for you Pa Rum Pum Pum Pum, I have no gifts for you Pa Rum Pum Pum Pum.",
        questionThree: "You guys gotta update your resumes, just like I'm doing.",
        questionFour: "So what does downsizing actually mean?",
        questionFive: "I bet it's gonna be me. It's probably gonna be me.",
        questionSix: "I'll drink to that. I'm starting at a company this week.",
        questionSeven: "I have a customer meeting.",
        questionEight: "Michael, please. Can we talk about this memo?",  
        questionNine: "Oh. Okay. And to you (starts clapping).",
        questionTen: "You don't work in sales, do you?"
}

let answerChoices = {
    choiceOne:["David", "Michael", "Jan", "Dwight"],
    choiceTwo: ["Angela", "Kelly", "Dwight", "Creed"],
    choiceThree: ["Ryan", "Angela", "Darrel", "Oscar"],
    choiceFour: ["Kevin", "Phyllis", "Jan", "Meredith"],
    choiceFive: ["Jim", "Pam", "Stanley", "Angela"],
    choiceSix: ["Deangelo Vickers", "Nellie Bertram", "Robert California", "Charles Miner"],
    choiceSeven: ["David", "Kelly", "Jan", "Karen"],
    choiceEight:["Meredith", "Kevin", "Stanley", "Creed"] ,
    choiceNine:["Packer", "Gabe", "Erin", "Helene"] ,
    choiceTen: ["Robert California", "Jan", "Jo Bennet", "Danny Cordray"],
}

let answers = {
    answerOne: "Michael",
    answerTwo: "Dwight",
    answerThree: "Oscar",
    answerFour: "Phyllis",
    answerFive: "Angela",
    answerSix: "Deangelo Vickers",
    answerSeven: "Kelly",
    answerEight: "Meredith",
    answerNine: "Gabe",
    answerTen: "Robert California"

}

