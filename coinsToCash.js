// Once you have given yourself a large stash of coins in your piggybank, look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named dollarAmount.

const piggyBank = { quarters: 342, dimes: 356, nickels: 45, pennies: 10234 };
let dollarAmount = 0;

function calcDollarAmnt() {
  let numQuarters = piggyBank.quarters;
  let numDimes = piggyBank.dimes;
  let numNickels = piggyBank.nickels;
  let numPennies = piggyBank.pennies;

  let totalMoney = numQuarters / 4;
  totalMoney += numDimes / 10;
  totalMoney += numNickels / 20;
  totalMoney += numPennies / 100;
  console.log(`$ ${totalMoney.toFixed(2)}`);
}
calcDollarAmnt();

// Now do the reverse!

function calcCoins(dollars) {
  let numQuarters = Math.floor(dollars / 0.25);
  let leftovers = dollars % 0.25;
  let numDimes = Math.floor(leftovers / 0.1);
  leftovers = leftovers % 0.1;
  let numNickels = Math.floor(leftovers / 0.05);
  leftovers = leftovers % 0.05;
  let numPennies = Math.round(leftovers / 0.01);

  console.log("# quarters", numQuarters);
  console.log("leftovers", leftovers);
  console.log("# dimes", numDimes);
  console.log("# nickels", numNickels);
  console.log("# pennies", numPennies);

  let piggyBank2 = [];
  piggyBank2.quarters = numQuarters;
  piggyBank2.dimes = numDimes;
  piggyBank2.nickels = numNickels;
  piggyBank2.pennies = numPennies;
  console.table(piggyBank2);
}

calcCoins(27.41);

//Loop over an array of student grades (values from 50-100) and keep track of how many students get each grade in an object named grades.

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];
let grades = {}; // You'll need to change this line of code
grades.A = 0;
grades.B = 0;
grades.C = 0;
grades.D = 0;
grades.F = 0;

for (let i = 0; i < scores.length; i++) {
  switch (true) {
    case scores[i] > 90:
      grades.A += 1;
      break;

    case scores[i] > 80:
      grades.B += 1;
      break;

    case scores[i] > 70:
      grades.C += 1;
      break;

    case scores[i] > 60:
      grades.D += 1;
      break;

    default:
      grades.F += 1;
  }
}

console.log(grades);

// How many of each grade?
for (grade in grades) {
  console.log(`There are ${grades[grade]} ${grade}'s`);
}

// What is lowest score?
scores.sort();
console.log(`The lowest score was a ${scores[0]}`);

// What is the highest score?
scores.sort();
scores.reverse();
console.log(`The highest score was a ${scores[0]}`);

// Which grade had most student achieve it?
let currentGradeCount = 0;
for (let grade in grades) {
  if (grades[grade] >= currentGradeCount) {
    console.log(`${grades[grade]} of ${grade}`);
  }
}

for (let grade in grades) {
  if (grades[grade] >= 3) {
    console.log(
      `Therefore, ${grade} had the highest number of student achieve it: ${
        grades[grade]
      }`
    );
  }
}
