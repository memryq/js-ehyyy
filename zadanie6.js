// 1
let book = { title: "Мастер и Маргарита", author: "Булгаков", year: 1967 }; // создаем объект
console.log(book.title, book.author, book.year); // выводит Мастер и Маргарита Булгаков 1967

// 2
book.pages = 480; // добавляем поле pages
console.log(book.pages); // выводит 480

// 3
delete book.year; // удаляем поле year
console.log(book.year); // выводит undefined

// 4
let student = { "full name": "Алексей Петров" };
console.log(student["full name"]); // выводит Алексей Петров

// 5
let person = { name: "Ivan", age: 30 }; // объект
person.age += 1; // увеличиваем число в свойстве age на 1
console.log(person.age); // выводит 31

// 6
let car = { engine: { power: 150, type: "diesel" } }; // объект внутри объекта
console.log(car.engine.type); // выводит diesel

// 7
console.log(car.owner?.name); // если owner нет, вернет undefined без ошибки
// выводит undefined

// 8
let user = { id: 1, login: "root", isAdmin: true }; // создаем объект
for (let key in user) {  // цикл проходит по всем ключам
  console.log(key + ": " + user[key]); // выводим ключ и его значение
}
// выводит id: 1, login: root, isAdmin: true

// 9
let orders = {
  id1: { product: "Phone", price: 500 },
  id2: { product: "Laptop", price: 1500 }
}; // сложный объект с заказами
console.log(orders.id2.price); // выводит 1500

// 10
function getValue(obj, key) { // принимает объект и строку ключ
  return obj[key]; // возвращаем значение через скобочную нотацию
}
console.log(getValue(user, "login")); // выводит root