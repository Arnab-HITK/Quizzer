const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options")
const nextQuestionButton = document.querySelector(".next-question-button");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");
let correctAnswersCount = 0;

const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let quizCategory="programming";
let currentQuestion = null;
let timer = null;
let noOfQuestions = 5;
const questionsIndexHistory = [];

//Display quiz reult and hide the quiz container
const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText= `You answered <b>${correctAnswersCount}</b> out of <b>${noOfQuestions}</b> questions correctly. Well Done :)`;
    document.querySelector(".result-message").innerHTML = resultText;
}

//Clear and reset the timer
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
}
const startTimer = () => {
    timer = setInterval(() => {
    currentTime--;
    timerDisplay.textContent = `${currentTime}s`;

    if(currentTime <= 0){
        clearInterval(timer);
        highlightCorrectAnswer();
        nextQuestionButton.style.visibility = "visible";
        quizContainer.querySelector(".quiz-timer").style.background = "#c31402";
        //Disable all answer options after one is selected
        answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        
    }
    }, 1000);
}

//Fetch a random question based on the selected category
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    if (questionsIndexHistory.length >= Math.min(categoryQuestions.length, noOfQuestions)) {
        return showQuizResult();
    }

    // Create a list of unused indexes
    const availableIndexes = categoryQuestions
        .map((_, index) => index)
        .filter(index => !questionsIndexHistory.includes(index));

    // Pick a random index from the unused ones
    const randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

    // Track this index as used
    questionsIndexHistory.push(randomIndex);

    return categoryQuestions[randomIndex];
};


const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend",iconHTML);
}

//Handle the user's answer selection
const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');

//Insert icons based on correct or incorrect answer
    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;

    option.insertAdjacentHTML("beforeend",iconHTML);
    !isCorrect ? highlightCorrectAnswer() : correctAnswersCount++;

    //Disable all answer options after one is selected
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
    nextQuestionButton.style.visibility = "visible";
}
//Render the current ques and its options
const renderQuestion = () =>{
    currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;

    resetTimer();
    startTimer();

//Update UI
    answerOptions.innerHTML = "";
    nextQuestionButton.style.visibility = "hidden";
    quizContainer.querySelector(".quiz-timer").style.background = "#011606";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${noOfQuestions}</b> Questions`;

//Create option <li> elements and append them  
    currentQuestion.options.forEach((option , index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent=option;
        answerOptions.appendChild(li);
        li.addEventListener("click" , () => handleAnswer(li,index));
    })
}

const startQuiz = () =>{
    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    quizCategory = configContainer.querySelector(".category-option.active").textContent;
    noOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);

    renderQuestion();
}

//Highlight the selected category and no of question option on clicking
document.querySelectorAll(".category-option , .question-option").forEach(option => {
    option.addEventListener("click", () =>{
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});

//Reset the quiz upon clicking "Try Again"
const resetQuiz = () => {
    resetTimer();
    correctAnswersCount = 0;
    questionsIndexHistory.length = 0;
    configContainer.style.display = "block";
    resultContainer.style.display = "none";
}


nextQuestionButton.addEventListener("click",renderQuestion);
document.querySelector(".try-again-button").addEventListener("click",resetQuiz);
document.querySelector(".start-quiz-button").addEventListener("click",startQuiz);