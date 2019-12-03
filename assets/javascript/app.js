let currentQuestionIndex = 0;
const questions = [
  {
    questionText: "Who was the legendary Benedictine monk who invented champagne?",
    choiceA: "Dom Perignon",
    choiceB: "Henry Hugh",
    choiceC: "Walter William",
    choiceD: "Beatrice Richard ",
    correctAnswer: "A"
  },
  {
    questionText: "What's the largest freshwater lake in the world?",
    choiceA: "Lake Huron",
    choiceB: "Lake Superior",
    choiceC: "Lake Victoria",
    choiceD: "Lake Michigan ",
    correctAnswer: "B"
  }
];
window.onload = function() {
  $("#radioA").click(function() {
    radioBtnChecked("A");
    this.checked = false;
  });
  $("#radioB").click(function() {
    radioBtnChecked("B");
    this.checked = false;
  });
  $("#radioC").click(function() {
    radioBtnChecked("C");
    this.checked = false;
  });
  $("#radioD").click(function() {
    radioBtnChecked("D");
    this.checked = false;
  });

  //   $("#submit").click(submitClicked); /* setting parameter(function) called submitClick and passing it as a variable to the on click event */

  showNextQuestion();
};
function showNextQuestion() {
  showQuestion(questions[currentQuestionIndex]);
}
function showQuestion(question) {
  $("#question").text(question.questionText);
  $("#choiceA").text(question.choiceA);
  $("#choiceB").text(question.choiceB);
  $("#choiceC").text(question.choiceC);
  $("#choiceD").text(question.choiceD);
}
function radioBtnChecked(choice) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  if (choice === correctAnswer) {
   console.log("Correct");
  } if (choice !== correctAnswer)
  console.log("Wrong!");
  alert("The correct Answer is " + correctAnswer);
  currentQuestionIndex++;
  showNextQuestion();
}
function submitClicked() {
  console.log("submit");
}
