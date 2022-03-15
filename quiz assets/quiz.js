const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const timerElement = document.querySelector("timer-count");
const win = document.querySelector("win");
const lose = document.querySelector("lose");
const progressBarFull = document.querySelector('#progressBarFull');

var timerCount;
var isWin = false;

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


let questions = [
    {
        question: 'Which of these methods prints a message to the web console?',
        choice1: 'Console.log',
        choice2: 'print.function',
        choice3: 'array',
        choice4: 'logical comparison operator',
        answer: 1,
    },
    {
        question: 'Which of these keywords tells JavaScript you are declaring a variable?',
        choice1: 'operator',
        choice2: 'var',
        choice3: 'array',
        choice4: 'getElementById',
        answer: 2,
    },
    {
        question: 'Strings are values made up of text and can contain the following:-',
        choice1: 'letters and numbers',
        choice2: 'letters and punctuation',
        choice3: 'letters, numbers and emojis',
        choice4: 'all of the above',
        answer: 4,
    },
    {
        question: 'Which function is used when a true or false value is required?',
        choice1: 'yesNo',
        choice2: 'operator',
        choice3: 'boolean',
        choice4: 'number',
        answer: 3,
    },
    {
        question: 'We use JavaScript functions because...',
        choice1: 'they are efficient and allow for multiple us when defined once',
        choice2: 'they allow various inputs and arguments',
        choice3: 'both a and b',
        choice4: 'none of the above',
        answer: 3,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

function winGame() {
    console.log("You won!")
}

function loseGame() {
    console.log("You lost")
}
function startTimer() {
    var timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount > 0) {
            if (isWin) {
                winGame();
            }
        }
        
        if (timerCount == 0) {
            clearInterval(timer);
        }
    },1000);
}

startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
    timerCount = 10;
    timerElement.textContent = timerCount;
    startTimer();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        
        return window.location.assign('./endquiz.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion =   availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 200)

    })

})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startQuiz()