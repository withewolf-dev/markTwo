var readlineSync = require("readline-sync");
const chalk = require("chalk");

console.log("Welcome to the " + chalk.bold("F.R.I.E.N.D.S ") + "quiz!");

var userName = readlineSync.question("Enter Your Name ");

console.log("Hi " + userName + "!");
console.log(chalk.red.bold("Instruction -----"));
console.log(chalk.green("One question will appear at a time"));
console.log(chalk.cyan("hit ENTER and the options appears for the question"));
console.log(chalk.magentaBright("Give the right option no. as the answer"));
console.log("---------------------------");

var score = 0;

var heighestScore = {
  name: "joey",
  score: 10,
};
var mcqList = [
  {
    options: ["twice", "three times", "five times", "six times"],
    question: "How many times was Ross legally divorce? ",
    answer: 1,
  },
  {
    options: ["gym", "work", "central perk", "At Work"],
    question: "where did carol first met susan",
    answer: 0,
  },
  {
    options: ["hi", "mom", "bye", "dumb"],
    question: "what were ben's first word",
    answer: 0,
  },
  {
    options: ["julie", "mona", "emily", "jill"],
    question:
      "Rachel had a one night stand with Paolo after Ross break starts dating who? ",
    answer: 0,
  },
  {
    options: ["Paul Stevens", "Pete Becker", "Richard Burke", "Mark Robinson"],
    question:
      "Which one of Rachel’s exes came back in Season 10 to offer her a job in Paris?",
    answer: 3,
  },
  {
    options: [
      "A history professor",
      "A fashion designer",
      "A marketing executive",
      "A soap opera actor",
    ],
    question: "What was Gunther’s job before he worked at Central Perk?",
    answer: 3,
  },
];

function quiz(options, question, answer) {
  let userAnswer = readlineSync.question(chalk.blueBright(question));
  let opt = readlineSync.keyInSelect(options);

  if (opt == answer) {
    console.log("You are Right.");
    score = score + 2;
    console.log(userName + " current " + score);
  } else {
    console.log("You are Wrong.");
  }
}

for (var i = 0; i < mcqList.length; i++) {
  quiz(mcqList[i].options, mcqList[i].question, mcqList[i].answer);
  console.log("--------------------------------");
}

console.log("Total score is " + score);

if (score > heighestScore.score) {
  console.log(chalk.bold.rgb(10, 100, 200)`you scored the highest`);
}
