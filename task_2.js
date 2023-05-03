'use strict';

const arr = [];

const generateArray = (arr) => {
  // генерируем случайное число от 0 до 10 включительно
  const randomNumber = Math.floor(Math.random() * 11);
  // добавляем его в конец массива
  arr.push(randomNumber);
  // вычисляем сумму элементов массива
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  if (sum < 50) {
    return generateArray(arr); // если сумма меньше 50, вызываем функцию снова
  } else {
    return arr; // если сумма больше или равна 50, возвращаем массив
  }
};

const result = generateArray(arr);
console.log(result);
