// Variables Needed to Start The Timer
// Select Elements By ID
var timeEl = document.querySelector("#quiz-timer");
var timeLeft = 60;
var timerInterval = 0;
// Variables Needed to Go From The Intro Page to The Question Page(s)
var introPage = document.querySelector("#intro-page");
var quiz = document.querySelector(".quiz-questions");

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
    // Number of MilliSeconds
    }, 1000);

    // Code Needed to Take The User From the Intro Page to The Question Page(s)
    // Once The Timer Has Started/Start Quiz Button Has Been Clicked
    introPage.innerHTML = "";

    quiz.setAttribute("style", "display:block");
    switchContent();
};