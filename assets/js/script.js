// Variables Needed to Start The Timer
// Select Elements By ID
var timeEl = document.querySelector("#quiz-timer");
var timeRemaining = 60;
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
        timeRemaining--;
        timeEl.textContent = "Time: " + timeRemaining;

        // Stops Execution Of Time At Set Interval
        if (timeRemaining === 0) {
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
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "1. alerts",
        choice2: "2. booleans",
        choice3: "3. strings",
        choice4: "4. numbers",
        answer: "1. alerts",
    },

    {
        question: "The condition in an if/else statement is enclosed with ________.",
        choice1: "1. quotes",
        choice2: "2. curly brackets",
        choice3: "3. parenthesis",
        choice4: "4. square brackets",
        answer: "3. parenthesis",
    },

    {
        question: "Arrays in JavaScript can be used to store ________.",
        choice1: "1. numbers and strings",
        choice2: "2. other arrays",
        choice3: "3. booleans",
        choice4: "4. all of the above",
        answer: "4. all of the above",
    },

    {
        question: "String values must be enclosed within ________ when being assigned to values.",
        choice1: "1. commas",
        choice2: "2. quotes",
        choice3: "3. curly brackets",
        choice4: "4. parenthesis",
        answer: "2. quotes",
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript",
        choice2: "2. terminal/bash",
        choice3: "3. for loops",
        choice4: "4. console log",
        answer: "4. console log",
    }

];

// Using querySelector to Create Variables For The Questions And Multiple Choice Selections
var questionsEl = document.querySelector(".ask");
var option1 = document.querySelector(".choice1");
var option2 = document.querySelector(".choice2");
var option3 = document.querySelector(".choice3");
var option4 = document.querySelector(".choice4");
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");

// Adding The EventListener Attaches An Event Handler to The Element Selected,
// Which Then Lead The User To The Next Question
var questionIndex = 0;
var boxEl = document.querySelector(".quiz-questions");
boxEl.addEventListener("click", switchContent);
function switchContent() {
    questionsEl.textContent = quizQuestions[questionIndex].question;
    option1.textContent = quizQuestions[questionIndex].choice1;
    option2.textContent = quizQuestions[questionIndex].choice2;
    option3.textContent = quizQuestions[questionIndex].choice3;
    option4.textContent = quizQuestions[questionIndex].choice4;
};

// Coding For Choice 1 (If Selected) Whether It Is The Correct Or Incorrect Answer And How The Website Should Respond
option1.addEventListener("click", select1);
// Creating a Function For Everytime Multiple Choice Selection 1 Is Selected
function select1() {
    // If Multiple Choice Selection 1 Is Indeed The Correct Answer
    if (option1.textContent === "1. alerts") {
        // Using setAttribute To Set The Value On A Specified Element (When Multiple Choice Selection 1 Is Correct)
        // If Correct, Allow The Timer To Count It's Normal Countdown
        correct.setAttribute("style", "display:block");
        wrong.setAttribute("style", "display:none");
        // If All Questions Are Answered, Quiz Ends
        questionIndex++;
        if (questionIndex >= quizQuestions.length) {
            clearInterval(timerInterval);
            logScore();
        }
        // If Timer Reaches 0 Seconds, Quiz Ends
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    // If Wrong, Time Remaining On Timer Decreases By 10 Seconds
    } else {
        wrong.setAttribute("style", "display:block");
        correct.setAttribute("style", "display:none");
        if (timeRemaining >= 10) {
            timeRemaining -= 10;
        } else {
            clearInterval(timerInterval);
            logScore();
        }
        // If All Questions Are Answered, Quiz Ends
        questionIndex++;
        if (questionIndex >= quizQuestions.length) {
            clearInterval(timerInterval);
            logScore();
        }
        // If Timer Reaches 0 Seconds, Quiz Ends
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    }
};

// Coding For Choice 2 (If Selected) Whether It Is The Correct Or Incorrect Answer And How The Website Should Respond
option2.addEventListener("click", select2);
// Creating a Function For Everytime Multiple Choice Selection 2 Is Selected
function select2() {
    // If Multiple Choice Selection 2 Is Indeed The Correct Answer
    if (option2.textContent === "2. quotes") {
        // Using setAttribute To Set The Value On A Specified Element (When Multiple Choice Selection 2 Is Correct)
        // If Correct, Allow The Timer To Count It's Normal Countdown
        correct.setAttribute("style", "display:block");
        wrong.setAttribute("style", "display:none");
        // If All Questions Are Answered, Quiz Ends
        questionIndex++;
        if (questionIndex >= quizQuestions.length) {
            clearInterval(timerInterval);
            logScore();
        }
        // If Timer Reaches 0 Seconds, Quiz Ends
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    } else {
        wrong.setAttribute("style", "display:block");
        correct.setAttribute("style", "display:none");
        if (timeRemaining >= 10) {
            timeRemaining -= 10;
        } else {
            clearInterval(timerInterval);
            logScore();
        }
        // If All Questions Are Answered, Quiz Ends
        questionIndex++;
        if (questionIndex >= quizQuestions.length) {
            clearInterval(timerInterval);
            logScore();
        }
        // If Timer Reaches 0 Seconds, Quiz Ends
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    }
};

// Coding For Choice 3 (If Selected) Whether It Is The Correct Or Incorrect Answer And How The Website Should Respond
option3.addEventListener("click", select3);
// Creating a Function For Everytime Multiple Choice Selection 3 Is Selected
function select3() {
    // If Multiple Choice Selection 3 Is Indeed The Correct Answer
    if (option3.textContent === "3. parenthesis") {
        // Using setAttribute To Set The Value On A Specified Element (When Multiple Choice Selection 3 Is Correct)
        // If Correct, Allow The Timer To Count It's Normal Countdown
        correct.setAttribute("style", "display:block");
        wrong.setAttribute("style", "display:none");
        // If All Questions Are Answered, Quiz Ends
        questionIndex++;
        if (questionIndex >= quizQuestions.length) {
            clearInterval(timerInterval);
            logScore();
        }
        // If Timer Reaches 0 Seconds, Quiz Ends
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    } else {
        wrong.setAttribute("style", "display:block");
        correct.setAttribute("style", "display:none");
        if (timeRemaining >= 10) {
            timeRemaining -= 10;
        } else {
            clearInterval(timerInterval);
            logScore();
        }
        // If All Questions Are Answered, Quiz Ends
        questionIndex++;
        if (questionIndex >= quizQuestions.length) {
            clearInterval(timerInterval);
            logScore();
        }
        // If Timer Reaches 0 Seconds, Quiz Ends
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    }
};

// Coding For Choice 4 (If Selected) Whether It Is The Correct Or Incorrect Answer And How The Website Should Respond
option4.addEventListener("click", select4);
// Creating a Function For Everytime Multiple Choice Selection 4 Is Selected
function select4() {
    // If Multiple Choice Selection 4 Is Indeed The Correct Answer
    if (option4.textContent === "4. all of the above" || option4.textContent === "4. console log") {
        // Using setAttribute To Set The Value On A Specified Element (When Multiple Choice Selection 4 Is Correct)
        // If Correct, Allow The Timer To Count It's Normal Countdown
        correct.setAttribute("style", "display:block");
        wrong.setAttribute("style", "display:none");
        // If All Questions Are Answered, Quiz Ends
        questionIndex++;
        if (questionIndex >= quizQuestions.length) {
            clearInterval(timerInterval);
            logScore();
        }
        // If Timer Reaches 0 Seconds, Quiz Ends
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    } else {
        wrong.setAttribute("style", "display:block");
        correct.setAttribute("style", "display:none");
        if (timeRemaining >= 10) {
            timeRemaining -= 10;
        } else {
            clearInterval(timerInterval);
            logScore();
        }
        // If All Questions Are Answered, Quiz Ends
        questionIndex++;
        if (questionIndex >= quizQuestions.length) {
            clearInterval(timerInterval);
            logScore();
        }
        // If Timer Reaches 0 Seconds, Quiz Ends
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    }
};

// Ending The Quiz By Letting The User Know Whether Question 5 Was Correct Or Wrong
function logScore() {
    quiz.setAttribute("style", "display:none");
    highScore.setAttribute("style", "display:block");
};

