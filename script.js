// script.js

let score = 0;
let correctAnswers = 0;
let currentQuestion = 1;
const totalQuestions = 50;

function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
}

function nextQuestion() {
    document.getElementById(`question${currentQuestion}`).style.display = 'none';
    currentQuestion++;
    if (currentQuestion <= totalQuestions) {
        document.getElementById(`question${currentQuestion}`).style.display = 'block';
    }
    document.getElementById('next-btn').disabled = true;
}

function enableNextButton() {
    document.getElementById('next-btn').disabled = false;
}

function checkFillInTheBlank(correctAnswer, inputId, resultId) {
    const answer = document.getElementById(inputId).value.toUpperCase();
    const result = document.getElementById(resultId);
    if (answer === correctAnswer) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
        score += 100;
        correctAnswers++;
    } else {
        result.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        result.style.color = 'red';
    }
    updateScore();
    enableNextButton();
}

function checkMCQ(formName, correctAnswer, resultId) {
    const selectedOption = document.querySelector(`input[name="${formName}"]:checked`);
    const result = document.getElementById(resultId);
    if (selectedOption && selectedOption.value === correctAnswer) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
        score += 100;
        correctAnswers++;
    } else {
        result.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        result.style.color = 'red';
    }
    updateScore();
    enableNextButton();
}

function checkChart(formName, correctAnswer, resultId) {
    const selectedOption = document.querySelector(`input[name="${formName}"]:checked`);
    const result = document.getElementById(resultId);
    if (selectedOption && selectedOption.value === correctAnswer) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
        score += 100;
        correctAnswers++;
    } else {
        result.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        result.style.color = 'red';
    }
    updateScore();
    enableNextButton();
}

function exitQuiz() {
    const questionsAttempted = currentQuestion - 1;
    const summary = `Summary:\n\nScore: ${score}\nQuestions Attempted: ${questionsAttempted}\nCorrect Answers: ${correctAnswers}`;
    alert(summary);
    if (confirm("Do you want to exit the quiz?")) {
        window.location.href = "exit.html";  // You can change this to any URL or functionality you prefer
    }
}
