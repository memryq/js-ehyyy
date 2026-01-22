// Задача 1
// Переменная объявлена, но значение не задано
let x;
console.log(typeof x); // выдает undefined

// Задача 2
// Число и строка — разные типы
console.log(typeof 10);    // выдает number
console.log(typeof "10");  // выдает string

// Задача 3
// Логические значения
console.log(typeof true);   // выдает boolean
console.log(typeof false);  // выдает boolean

// Задача 4
// Историческая ошибка JavaScript
console.log(typeof null); // выдает object

// Задача 5
// + со строкой выполняет склеивание
console.log("15" + 1); // выдает "151"

// Задача 6
// - приводит строку к числу
console.log("12" - 1); // выдает 11

// Задача 7
// Пустая строка — ложное значение
console.log(Boolean("")); // выдает false

// Задача 8
// Строка с пробелом не пустая
console.log(Boolean(" ")); // выдает true

// Задача 9
// Преобразование строки в число
console.log(Number(" 13 ")); // выдает 13

// Задача 10
// Проверка: число и не nan
function isNumber(v) {
  return typeof v === "number" && !isNaN(v);
}

console.log(isNumber(10));   // выдает true
console.log(isNumber(NaN));  // выдает false
console.log(isNumber("10")); // выдает false