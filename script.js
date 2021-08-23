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



*/

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

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  score = 20;
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
