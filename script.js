'use strict';
/*
//72. Selecting and Elements Manipulation

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number🎉';
// console.log(document.querySelector('.number'));
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = '!';
// console.log(document.querySelector('.number').textContent);

// console.log(document.querySelector('.guess'));
// console.log(document.querySelector('.guess').value, '<==value');
// document.querySelector('.guess').value = 27;
// console.log(document.querySelector('.guess').value, '<==value');





// 73. Handeling Click Events

// console.log(document.querySelector('.check'));
// console.log(document.querySelector('.guess'));
// console.log(document.querySelector('.guess').value);
// const guessValue = document.querySelector('.guess').value;
// console.log(guessValue);
// console.log(typeof guessValue);

// console.log(Number(guessValue));//falsy value

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent = 'Correct Number🎉';
// });





//74. Implementing the Game Logic
const random = function () {
  return Math.trunc(Math.random() * 20 + 1);
};
let number = random();
let score = 20;
let highscore = 0;
console.log('random number= ', number); //random number between 1 to 20

document.querySelector('.again').addEventListener('click', function () {
  // window.location.reload();Start guessing...
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  number = random();
  console.log('Number after clicking again= ', number);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  // console.log(guess, typeof guess);

  if (!guess || guess > 20 || guess < 0) {
    document.querySelector('.message').textContent = '⛔Wrong Number!⛔';
  } else if (guess > number) {
    document.querySelector('.message').textContent =
      '👆Your Number Is Higher!👆';
    document.querySelector('.number').textContent = '📈';
    score--;
  } else if (guess < number) {
    document.querySelector('.message').textContent =
      '👇Your Number Is Lower!👇';
    document.querySelector('.number').textContent = '📉';
    score--;
  } else {
    document.querySelector('.message').textContent = '🎉Correct Number🎉';

    document.querySelector('.number').textContent = '🏆';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
  }
  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;
});

// console.log(document.querySelector('body').style.backgroundColor);
// document.querySelector('body').style.backgroundColor = 'green';



*/

//78. Refactoring Our Code: The DRY Principle
const random = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

const classTextContentCreator = function (className, messageInput) {
  document.querySelector(className).textContent = messageInput;
};

let number = random();
let score = 20;
let highscore = 0;
console.log('random number= ', number);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  classTextContentCreator('.message', 'Start guessing...');
  classTextContentCreator('.score', score);
  classTextContentCreator('.number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  number = random();
  console.log('Number after clicking again= ', number);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess || guess > 20 || guess < 0) {
    classTextContentCreator('.message', '⛔Wrong Number!⛔');
  } else if (guess > number) {
    classTextContentCreator('.message', '👆Your Number Is Higher!👆');
    classTextContentCreator('.number', '📈');
    score--;
  } else if (guess < number) {
    classTextContentCreator('.message', '👇Your Number Is Lower!👇');
    classTextContentCreator('.number', '📉');
    score--;
  } else {
    classTextContentCreator('.message', '🎉Correct Number🎉');
    classTextContentCreator('.number', '🏆');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highscore) {
      classTextContentCreator('.highscore', score);
      highscore = score;
    }
  }
  document.querySelector('.guess').value = '';
  classTextContentCreator('.score', score);
});
