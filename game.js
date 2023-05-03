'use strict';

const guessNumber = (min, max) => {
  const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  alert(`Загадано число от ${min} до ${max}. Попробуйте угадать!`);

  const game = () => {
    const userNumber =
    prompt(`Введите число от ${min} до ${max}, для выхода нажмите "Отмена"`);
    if (userNumber === null) {
      alert('Игра окончена');
      return;
    }

    const number = parseInt(userNumber);

    if (isNaN(number)) {
      alert('Введите число!');
      game();
    } else if (number < min || number > max) {
      alert(`Число должно быть в диапазоне от ${min} до ${max}`);
      game();
    } else if (number < secretNumber) {
      alert('Загаданное число больше');
      game();
    } else if (number > secretNumber) {
      alert('Загаданное число меньше');
      game();
    } else {
      alert(`Вы угадали! Загаданное число: ${secretNumber}`);
    }
  };
  game();
  const playAgain = confirm('Сыграем ещё раз?');
  if (playAgain) {
    guessNumber(min, max);
  } else {
    alert('До новых встреч!');
  }
};

guessNumber(1, 100);

