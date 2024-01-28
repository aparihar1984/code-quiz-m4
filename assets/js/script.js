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

// Quiz Array Along With Quiz Questions and Answers
var quizKey = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "1. strings",
        choice2: "2. alerts",
        answer: "2. alerts",
    },

    {
        question: "The condition in an if/else statement is enclosed with ________.",
        choice1: "1. quotes",
        choice2: "2. parenthesis",
        answer: "2. parenthesis",
    },

];

// Variables for Quiz Questions 
var questionsEl = document.querySelector(".ask");
var option1 = document.querySelector(".choice1");
var option2 = document.querySelector(".choice2");
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");

// Adding The EventListener Attaches An Event Handler to The Element Selected
// Which Then Will Show The Next Question
var questionIndex = 0;
var boxEl = document.querySelector(".quiz-questions");
boxEl.addEventListener("click", switchContent);
function switchContent() {
    questionsEl.textContent = quizKey[questionIndex].question;
    option1.textContent = quizKey[questionIndex].choice1;
    option2.textContent = quizKey[questionIndex].choice2;
};

