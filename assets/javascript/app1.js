import {questions} from "./questions";
var question = questions[0];
// var choices = questions[1];
// var correctAnswer = questions.correctAnswer;
var i = 0;

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
  showNextQuestion();
};

// show next qustion
function showNextQuestion() {
    showQuestion(question[i]);
  }
function showQuestion(question) {
  $("#question").text(question[i]);
  $("#choiceA").text(question.choices[0]);
  $("#choiceB").text(question.choices[1]);
  $("#choiceC").text(question.choices[2]);
  $("#choiceD").text(question.choice[3]);
}
