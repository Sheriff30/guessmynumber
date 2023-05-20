'use strict';
let highscore = 0;
let number = Math.trunc(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let score = Number(document.querySelector('.score').textContent);
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number ⛔');
  } else if (guess === number) {
    displayMessage('Correct number 🎉');
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number ? 'Too high number!⚡' : 'Too low number ❗'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 😢');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('audio').style.opacity = '1';
      document.querySelector('audio').style.visibility = 'visible';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);

  Number((document.querySelector('.score').textContent = 20));
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  Number((document.querySelector('.guess').value = ''));
  displayMessage('Start guessing...');
});
