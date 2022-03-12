var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;


// *WHEN the user clicks the start button, a timer starts and I am presented with a question
(function(){
    function buildQuiz(){
        const output = [];
        myQuestions.forEach( (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                    </label>`
                  );
                }
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>`
                  );
                }
              );
            
              // finally combine our output list into one string of HTML and put it on the page
              quizContainer.innerHTML = output.join('');
            }

function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;
 // show number of correct answers out of total
 resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){

}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const myQuestions = [
  {

      question: "Which of these methods prints a message to the web console?",
      answers: {
        a: "Console.log",
        b: "Print.function",
        c: "Array",
        d: "Logical comparison operator"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of these keywords tells JavaScript you're declaring a variable?",
      answers: {
        a: "operator",
        b: "var",
        c: "array",
        d: "getElementById"
      },
      correctAnswer: "b"
    },
    {
      question: "Strings are values made up of text and can contain the following:-",
      answers: {
        a: "Letters and numbers",
        b: "Letters and punctuation",
        c: "Letters, numbers and emojis",
        d: "All of the above"
      },
      correctAnswer: "d"
    },  
    {
        question: "Which function is used when a true or false value is required?",
        answers: {
          a: "YesNo",
          b: "Operator",
          c: "Boolean",
          d: "Number"
        },
        correctAnswer: "c"
    },
    {
    question: "We use JavaScript functions because-",
    answers: {
      a: "they are efficient and allow for multiple us when defined once",
      b: "they allow various inputs and arguments",
      c: "Both a and b",
      d: "None of the above"
    },
    correctAnswer: "c"
  }
];
  // Kick things off
  buildQuiz();

  // Pagination
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;


  // Show the first slide
  showSlide(currentSlide);

// The startGame function is called when the start button is clicked
function buildQuiz() {
    timerCount = 10;

      // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}
// *WHEN the user answers a question, they are presented with another question

// *WHENthe user answers a question incorrectly, time is subtracted from the clock

// *WHEN all questions are answered or the timer reaches 0, the game is over
function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disabled = false;
    setWins()
}

function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
}


// These functions are used by init
function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
      winCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
  }
  
  function getlosses() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
      loseCounter = 0;
    } else {
      loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
}

// *WHEN the game is over, the user can save my initials and my score

// Updates lose count on screen and sets lose count to client storage
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);

// *The winGame function is called when the win condition is met

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
}
