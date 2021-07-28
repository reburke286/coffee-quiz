const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.choices) {
      // ...add an HTML radio button
      answers.push(
        `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.choices[letter]}
            </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="question"> ${currentQuestion.title} </div>
          <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

buildQuiz();

function showResults() {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    //if answer is correct
    if (userAnswer === currentQuestion.answer) {
      // add to the number of correct answers
      numCorrect++;
      $(answerContainer).append(currentQuestion.right).addClass("right");
    } else if (userAnswer !== currentQuestion.answer) {
      $(answerContainer).append(currentQuestion.wrong).addClass("wrong");
    }
  });

  // show number of correct answers out of total
  let testResults = "";
  const score = `Your score is ${calculateScore(
    numCorrect,
    questions.length
  )}%`;

  if (calculateScore(numCorrect, questions.length) < 80) {
    testResults = "Take quiz again to score higher.";
  } else {
    testResults = "Great job! You're ready to make some drinks! ";
  }

  const resultsInfo = score + " " + testResults;
  $(resultsContainer).append(resultsInfo);
}

calculateScore = (correct, total) => {
  const divided = correct / total;
  return Math.floor(divided * 100);
};

// on submit, show results
submitButton.addEventListener("click", showResults);
