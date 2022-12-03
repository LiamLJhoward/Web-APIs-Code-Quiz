let timerElement = document.querySelector("#time");
let startButton = document.querySelector("#start"); 
let startScreen = document.querySelector("#start-screen");
let questionTitle = document.querySelector("#question-title");


let timer;
let timerCount;







// Start Game
function startGame() {
    //Hides the start screen 
    startScreen.style.visibility = 'hidden';
    // Questions Pop Up
    questionTitle.style.visibility = 'show';
    timerCount = 60;
    // Stops start button from being pressed again
    startTimer()
    console.log("Start button pressed");
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
                
                // Timer penalty for giving a wrong answer
                if (answerGiven === false) {
                    timerCount - 10;
                }
            
    }
    
    // If time has ran out
    if (timerCount === 0) {
        // Clears interval and sets lose function
        clearInterval(timer);
        //lose
    } 
}, 1000);
}

// Attach event listener to start button
startButton.addEventListener("click", startGame);






// Questions
let questions = [
    {
        title: "All right Jim, your quarterlies look very good. How are things going at the library?",
        choices:["David", "Michael", "Jan", "Dwight"],
        answer: "Michael"
    },
    {
        title: "Shall I play for you Pa Rum Pum Pum Pum, I have no gifts for you Pa Rum Pum Pum Pum.",
        choices: ["Angela", "Kelly", "Dwight", "Creed"],
        answer: "Dwight"
    },
    {
        title: "You guys gotta update your resumes, just like I'm doing.",
        choices: ["Ryan", "Angela", "Darrel", "Oscar"],
        answer: "Oscar"
    },
    {
        title: "So what does downsizing actually mean?",
        choices: ["Kevin", "Phyllis", "Jan", "Meredith"] ,
        answer: "Phyllis"
    },
    {
        title: "I bet it's gonna be me. It's probably gonna be me.",
        choices: ["Jim", "Pam", "Stanley", "Angela"],
        answer: "Angela"
    },
    {
        title: "I'll drink to that. I'm starting at a company this week.",
        choices: ["Deangelo Vickers", "Nellie Bertram", "Robert California", "Charles Miner"],
        answer: "Deangelo Vickers"
    },
    {
        title: "I have a customer meeting.",
        choices: ["David", "Kelly", "Jan", "Karen"],
        answer: "Kelly"
    },
    {
        title: "Michael, please. Can we talk about this memo?",
        choices:["Meredith", "Kevin", "Stanley", "Creed"] ,
        answer: "Meredith"
    },
    {
        title: "Oh. Okay. And to you (starts clapping).",
        choices:["Packer", "Gabe", "Erin", "Helene"] ,
        answer: "Gabe"
    },
    {
        title: "You don't work in sales, do you?",
        choices: ["Robert California", "Jan", "Jo Bennet", "Danny Cordray"],
        answer: "Robert California"
    }

]

