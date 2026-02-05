// 1
let n = -5; // задается число

if (n > 0) { //проверка условия
    console.log("positive"); // если число больше 0
} else if (n < 0) {
    console.log("negative"); // если число меньше 0
} else {
    console.log("zero"); // если равно
}

// 2
let a = 12; // 2 числа
let b = 7;

// сравниваем числа
if (a < b) {
    console.log(a); // если a меньше b
} else {
    console.log(b); // меньше b
}

// 3
let n = 15;

if (n % 3 === 0) { // остаток от деления на 3
    console.log("yes"); // если остаток 0 делится
} else {
    console.log("no"); // не делится
}

// 4
let N = 7;

let sum = 0; // переменная для хранения суммы

for (let i = 1; i <= N; i++) { // цикл от 1 до N
    sum = sum + i; // на каждом шаге прибавляем текущее число
}

// вывод итоговой суммы
console.log(sum);

// 5 
// цикл от 1 до 15
for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) { // проверяем, что число нечётное
        console.log(i);
    }
}

// 6
let count = 0;

for (let i = 1; i <= 20; i++) { // перебираем числа
    if (i % 2 === 0) { // если число чётное
        count = count + 1;
    }
}

// вывод количества
console.log(count);

// 7 
let str = "banana";
let count = 0;

for (let i = 0; i < str.length; i++) { // цикл по индексам строки
    if (str[i] === "a") { // проверяем  символ
        count = count + 1;
    }
}

// вывод  букв
console.log(count);

// 8
let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) { //с конца строки
    reversed = reversed + str[i]; // добавляем символы в новую строку
}

// вывод перевёрнутой строки
console.log(reversed);


// 9 
let num = 4;

for (let i = 1; i <= 10; i++) { // цикл от 1 до 10
    console.log(num + " * " + i + " = " + (num * i)); // умножаем num на i
}

// 10
let stars = "";

for (let i = 1; i <= 4; i++) {
    stars = stars + "*"; // добавляем звезду
    // выводим текущую строку
    console.log(stars);
}

// 11
let N = 30;
let sum = 0;

for (let i = 1; i <= N; i++) { // перебор чисел от 1 
    if (i % 3 === 0 || i % 5 === 0) { // проверяем кратность 3 или 5
        sum = sum + i;
    }
}

// вывод суммы
console.log(sum);