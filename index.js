readlinesync = require("readline-sync")
var score = 0

var username =
  readlinesync.question("What's your name? ");

console.log("Welcome " + username + " in our Spider-Man quiz.");

function play(question, answer) {

  var userAnswer = readlinesync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You are Right")
    score = score + 1
  } else {
    console.log("you are wrong")
    score = score - 1
  }
  console.log("current score: " + score)
  console.log("----------------")
}

var Questions = [{
  question: " 1- The most famous Spider-Man quote- With great power there must also come great responsibility” is attributed to what character? ",
  answer: "Uncle Ben"
},

{
  question: " 2- What actress plays Mary Jane Watson opposite Tobey Maguire in Spider-Man 1, 2 and 3? ",
  answer: "Kirsten Dunst"
},

{
  question: " 3- Peter Parker’s aunt who always offers sage advice is named after... ? ",
  answer: "May"
},

{
  question: " 4- What is the name of the newspaper where Peter Parker gets a job as a photographer? ",
  answer: "The Daily Bugle"
},

{
  question: " 5- How did the Spider-Man super-villain Dr. Octopus obtain his special powers? ",
  answer: "Accidental radiation leak"
},]


for (var i = 0; i < Questions.length; i++) {

  var currentquestion = Questions[i]

  play(currentquestion.question, currentquestion.answer)
}

console.log("Correctanswers:")

console.log("1-Uncle Ben", "2-Kirsten Dunst", "3-May", "4-The Daily Bugle", "5-Accidental radiation leak")


console.log("check out the high scores")

var highScores = [
  {
    name: "Ayush",
    score: "4"
  },
  {
    name: "Harsh",
    score: "2"
  }
]
highScores.map(score =>
  console.log(score.name, ":", score.score))

console.log("Thanks " + username + " hope you enjoy the quiz")