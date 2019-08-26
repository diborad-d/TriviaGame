const questionOne = {
  question: "Who was the legendary Benedictine monk who invented champagne?",
  choices: ["Dom Perignon", "Henry Hugh", "Walter William", "Beatrice Richard "],
  correctAnswer: 0
};
const questionTwo = {
    question: "What's the largest freshwater lake in the world?",
    choices: ["Lake Huron", "Lake Superior", "Lake Victoria", "Lake Michigan "],
    correctAnswer: 1
  };
  const questionThree = {
    question: "Where would you find the Sea of Tranquility?",
    choices: ["Mars", "Earth", "The Mooon", "Mecuriy"],
    correctAnswer: 2  
  };
  const questionFour = {
    question: "Who was the legendary Benedictine monk who invented champagne?",
    choices: ["Dom Perignon", "Henry Hugh", "Walter William", "Beatrice Richard "],
    correctAnswer: 0
  };
  const questionFive = {
    question: "What kind of weapon is a falchion? ",
    choices: ["Revolver", "Crossbow", "Spear", "Sword"],
    correctAnswer: 3
  };
//   const questionSix = {
//     question: "What is another word for lexicon?",
//     answers: ["Dom Perignon", "Henry Hugh", "Walter William", "Beatrice Richard "],
//     correctAnswer: 0
//   };
//   const questionSeven = {
//     question: "Who was the legendary Benedictine monk who invented champagne?",
//     answers: ["Dom Perignon", "Henry Hugh", "Walter William", "Beatrice Richard "],
//     correctAnswer: 0
//   };
//   const questionEight = {
//     question: "Who was the legendary Benedictine monk who invented champagne?",
//     answers: ["Dom Perignon", "Henry Hugh", "Walter William", "Beatrice Richard "],
//     correctAnswer: 0
//   };
// let currentQuestion = randomIndex();
window.onload = function() {
  setup();
};
function setup() {
  $("#currentQuestioin").text(questionOne.question);
  $("#optionA").text(questionOne.choices[0]);
  $("#optionB").text(questionOne.choices[1]);
  $("#optionC").text(questionOne.choices[2]);
  $("#optionD").text(questionOne.choices[3]) ;
}
 