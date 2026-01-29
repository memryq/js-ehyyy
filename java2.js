// 1
function sayHello() {
    console.log("Hello, JS!"); // просто hello js
}
sayHello(); 
// вывод: Hello, JS!


// 2
function greet(name) {
    console.log("Hello, " + name); // hello но с другим именем 
}
greet("Alex"); 
// вывод: Hello, Alex


// 3
function greet(name) {
    return name ? "Hello, " + name : "Hello, stranger"; // hello с проверкой если ли имя
}
greet("Max");    
// возвращает: "Hello, Max"
greet();         
// возвращает: "Hello, stranger"


// 4
function square(x) {
    return x * x;  // возводит в квадрат
}
square(4); 
// возвращает: 16


// 5
function sumArray(arr) {
    return arr.reduce((acc, n) => acc + n, 0); // суммирует
}
sumArray([1, 2, 3, 4]); 
// возвращает: 10


// 6
function min(a, b) {
    return a < b ? a : b; // проверяет 
}
min(3, 7); 
// возвращает: 3


// 7
const double = x => {
    return x * 2; // удваивает
};
double(5); 
// возвращает: 10


// 8
function apply(fn, x) {
    return fn(x);
}
apply(n => n + 1, 5); 
// возвращает: 6


// 9
function filterByLength(words, minLen) {
    return words.filter(word => word.length > minLen); // фильтр
}
filterByLength(["hi", "hello", "world"], 3); 
// возвращает: ["hello", "world"]


// 10
function toUpperArray(arr) {
    return arr.map(str => str.toUpperCase()); // верхний регистр
}
toUpperArray(["js", "html"]); 
// возвращает: ["JS", "HTML"]


// 11
function power(base, exp = 2) {
    return base ** exp; // квадрат
}
power(3);    
// возвращает: 9
power(2, 3); 
// возвращает: 8