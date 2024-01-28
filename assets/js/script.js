// Variables Needed to Start The Timer
// Select Elements By ID
var timeEl = document.querySelector("#quiz-timer");
var timeLeft = 60;
var timerInterval = 0;

// Variable(s) needed for the EventListener
// Select Elements By Class
var startQuiz = document.querySelector(".start-quiz");
startQuiz.addEventListener("click", setTime);
function setTime() {
    // Setting Interval In Variable
    timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;

        // Stops Execution Of Time At Set Interval
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    // Number of Milliseconds
    }, 1000);

    coverPage.innerHTML = "";

    quiz.setAttribute("style", "display:block");
    switchContent();
};