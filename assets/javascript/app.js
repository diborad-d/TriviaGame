const questionObject = {
  question:[
  "Who was the legendary Benedictine monk who invented champagne?",
  ],
  answers: ["Dom Perignon", "Henry Hugh", "Walter William", "Beatrice Richard "],
  correctAnswer: 0
};
window.onload = function() {
  setup();
};
function setup() {
  $("#exampleModalLongTitle ").text(questionObject.question);
  $("#optionA").text(questionObject.answers[0]);
  $("#optionB").text(questionObject.answers[1]);
  $("#optionC").text(questionObject.answers[2]);
  $("#optionD").text(questionObject.answers[3]);
}
