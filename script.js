'use strict';
/*
//72. Selecting and Elements Manipulation

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number🎉';
console.log(document.querySelector('.number'));
console.log(document.querySelector('.number').textContent);
document.querySelector('.number').textContent = '!';
console.log(document.querySelector('.number').textContent);

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 27;
console.log(document.querySelector('.guess').value);




*/

// 73. Handeling Click Events

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent = 'Correct Number🎉';
// });

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
});
