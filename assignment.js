/***********

Problem 1:

Write a program that uses a loop to print out (using console.log()) the multiplication table (12 levels) of a provided number

Variables Required (feel free to add your own variables if needed):
baseNumber (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    baseNumber = 2

   Result:
    0
    2
    4
    6
    8
    10
    12
    14
    16
    18
    20
    22
    24
************/
console.log('Problem 1:')

// Add your code below this line

let result =''
let j = 2

for(let i=0;i<=12;i++){
    result += (i * j)+ ' ';
}
console.log(result)

// Add your code above this line

console.log('')
console.log('-----------------')

/***********

Problem 2:

Write a program that prints (using console.log()) the largest number in a given array

Variables Required (feel free to add your own variables if needed):
numbers (array)
currentLargestNumber (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    values = [57, 13, 4, 38]

   Result: 57

2. Given the following:
    values = [3, 48, 29, 12, 18]

   Result: 48

************/

console.log('Problem 2:')

// Add your code below this line
let values = [57,13,4,38]

console.log(Math.max.apply(null, values))

let valuesTwo = [3,48,29,12,18]

console.log(Math.max.apply(null, valuesTwo))

// Add your code above this line

console.log('')
console.log('-----------------')

/***********

Problem 3:

Write a program that prints out (using console.log()) the winner of a rock paper scissors game between two players

- if the playerA chooses scissors and playerB chooses rock, playerB wins
- if the playerA chooses scissors and playerB chooses scissors, game is a tie
- if the playerA chooses paper and playerB chooses rock, playerA wins
- if the playerA chooses rock and playerB chooses paper, playerB wins
- etc (program should account for all available scenarios)

Variables Required (feel free to add your own variables if needed):
playerAChoice (string)
playerBChoice (string)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    playerAChoice = "rock"
    playerBChoice = "paper"

   Result: "playerB wins"

2. Given the following:
    playerAChoice = "scissors"
    playerBChoice = "scissors"

   Result: "tie"

3. Given the following:
    playerAChoice = "scissors"
    playerBChoice = "paper"

   Result: "playerA wins"
************/

console.log('Problem 3:')

// Add your code below this line

//GAME 1
let playerAChoiceOne = 'rock'
let playerBChoiceOne = 'paper'

  if (playerAChoiceOne === playerBChoiceOne) {
    console.log('It is a tie yo!')
  }
  if (playerAChoiceOne === 'rock') {
    if (playerBChoiceOne === 'paper') {
      // Paper beats Rock
      console.log('Player B wins!')
    }
    else {
      // Rock beats scissors
      console.log('Player A wins!')
    }
  }

  if (playerAChoiceOne === 'paper') {
    if (playerBChoiceOne === 'scissors') {
      // Scissors beats paper
      console.log('Player B wins!')
    }
    else {
      // Paper beats rock
      console.log('Player A wins!')
    }
  }

  if (playerAChoiceOne === 'scissors') {
    if (playerBChoiceOne === 'rock') {
      // Rock beats scissors
      console.log('Player B wins!')
    }
    else {
      // Scissors beats paper
      console.log('Player A wins!')
    }
}

// GAME 2

let playerAChoiceTwo = 'scissors'
let playerBChoiceTwo = 'scissors'

  if (playerAChoiceTwo === 'rock') {
    if (playerBChoiceTwo === 'paper') {
      // Paper beats Rock
      console.log('Player B wins!')
    }
    if (playerAChoiceTwo === playerBChoiceTwo) {
      console.log('It is a tie yo!')
    }
    else {
      // Rock beats scissors
      console.log('Player A wins!')
    }
  }
  if (playerAChoiceTwo === 'paper') {
    if (playerBChoiceTwo === 'scissors') {
      // Scissors beats paper
      console.log('Player B wins!')
    }
    if (playerAChoiceTwo === playerBChoiceTwo) {
      console.log('It is a tie yo!')
    }
    else {
      // Paper beats rock
      console.log('Player A wins!')
    }
  }
  if (playerAChoiceTwo === 'scissors') {
    if (playerBChoiceTwo === 'rock') {
      // Rock beats scissors
      console.log('Player B wins!')
    }
    if (playerAChoiceTwo === playerBChoiceTwo) {
      console.log('It is a tie yo!')
    }
    else {
      // Scissors beats paper
      console.log('Player A wins!')
    }
}

// Game 3

let playerAChoiceThree ="scissors"
let playerBChoiceThree ="paper"

  if (playerAChoiceThree === playerBChoiceThree) {
    console.log('It is a tie yo!')
  }
  if (playerAChoiceThree === 'rock') {
    if (playerBChoiceThree === 'paper') {
      // Paper beats Rock
      console.log('Player B wins!')
    }
    else {
      // Rock beats scissors
      console.log('Player A wins!')
    }
  }
  if (playerAChoiceThree === 'paper') {
    if (playerBChoiceThree === 'scissors') {
      // Scissors beats paper
      console.log('Player B wins!')
    }
    else {
      // Paper beats rock
      console.log('Player A wins!')
    }
  }
  if (playerAChoiceThree === 'scissors') {
    if (playerBChoiceThree === 'rock') {
      // Rock beats scissors
      console.log('Player B wins!')
    }
    else {
      // Scissors beats paper
      console.log('Player A wins!')
    }
}


// Add your code above this line

console.log('')
console.log('-----------------')
