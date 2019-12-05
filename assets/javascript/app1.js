const questions = [
  {
    question: "What religion is the most practiced one in India?",
    choices: ["Shinto", "Budhism", "Hiduism", "Islam"],
    correctAnswer: 1
  },
  {
    question: "What's the largest freshwater lake in the world?",
    choices: ["Lake Huron", "Lake Superior", "Lake Victoria", "Lake Michigan "],
    correctAnswer: 1
  },
  (question = {
    question: "Where would you find the Sea of Tranquility?",
    choices: ["Mars", "Earth", "The Mooon", "Mercury"],
    correctAnswer: 2
  }),
  (question = {
    question: "Who was the legendary Benedictine monk who invented champagne?",
    choices: ["Dom Perignon", "Henry Hugh", "Walter William", "Beatrice Richard "],
    correctAnswer: 0
  }),
  (question = {
    question: "What kind of weapon is a falchion? ",
    choices: ["Revolver", "Crossbow", "Spear", "Sword"],
    correctAnswer: 3
  }),
  (question = {
    question: "What is another word for lexicon?",
    answers: ["Dom Perignon", "Henry Hugh", "Walter William", "Beatrice Richard "],
    correctAnswer: 0
  }),
  (question = {
    question: "Who was the legendary Benedictine monk who invented champagne?",
    answers: ["Dom Perignon", "Henry Hugh", "Walter William", "Beatrice Richard "],
    correctAnswer: 0
  }),
  (question = {
    question: "Who was the legendary Benedictine monk who invented champagne?",
    answers: ["Dom Perignon", "Henry Hugh", "Walter William", "Beatrice Richard "],
    correctAnswer: 0
  })
];
var currentQuestionIndex = 0;
let counter = 30;
let intervalId = 00;

window.onload = function() {
  // $("#radioA").click(function() {
  //   radioBtnChecked(0);
  //   this.checked = false;
  // });
  // $("#radioB").click(function() {
  //   radioBtnChecked(1);
  //   this.checked = false;
  // });
  // $("#radioC").click(function() {
  //   radioBtnChecked(2);
  //   this.checked = false;
  // });
  // $("#radioD").click(function() {
  //   radioBtnChecked(3);
  //   this.checked = false;
  // });

  $("#startBtn").click(showNextQuestion);

  $("#submit").on("click", function() {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (choice === correctAnswer) {
      $("#correct").html("<h4>" + "Correct" + "</h4>");
    } else {
      $("#correct").html("Wrong, The Correct Answer was: " + questions[currentQuestionIndex].choices[correctAnswer]);
    }
    currentQuestionIndex++;
    showNextQuestion();
  });
};
function getSelectedChoice() {
  var choice = -1;

  return choice;
}
function showNextQuestion() {
  startTimer();
  $("#question").text(questions[currentQuestionIndex].question);
  $("#choiceA").text(questions[currentQuestionIndex].choices[0]);
  $("#choiceB").text(questions[currentQuestionIndex].choices[1]);
  $("#choiceC").text(questions[currentQuestionIndex].choices[2]);
  $("#choiceD").text(questions[currentQuestionIndex].choices[3]);
}
// function radioBtnChecked(choice) {
//   const correctAnswer = questions[currentQuestionIndex].correctAnswer;
//   if (choice === correctAnswer) {
//     $("#correct").html("<h4>" + "Correct" + "</h4>");
//   } else {

//     $("#correct").html("Wrong, The Correct Answer was: " + questions[currentQuestionIndex].choices[correctAnswer]);
//   }
//   currentQuestionIndex++;
//   showNextQuestion();

// }
//timer
function startTimer() {
  counter = 30;
  $("#timer").html("<h2>" + "00:" + counter + "</h2>");
  clearInterval(intervalId);
  intervalId = setInterval(countDown, 1000);
}

function countDown() {
  counter--;
  $("#timer").html("<h2>" + counter.toTimer() + "</h2>");
  if (counter === 0) {
    stop();
    // alert("Time Up!");
  }
}
function stop() {
  clearInterval(intervalId);
}

//number extension method
Number.prototype.toTimer = function() {
  return "00:" + ("0" + this).slice(-2);
};

//submit quiz

//
