let timerElement = document.querySelector("#time");
let startButton = document.querySelector("#start"); 
let startScreen = document.querySelector("#start-screen");

let timer;
let timerCount;


// Start Game
function startGame() {
    //Hides the start screen 
    startScreen.style.visibility = 'hidden';
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
            
    }
    
    // If time has ran out
    if (timerCount === 0) {
        // Clears interval and sets lose function
        // clearInterval(timer);
        //lose
    } 
}, 1000);
}

// Attach event listener to start button
startButton.addEventListener("click", startGame);