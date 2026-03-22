//1
let language = "JavaScript"; //исходная строка
console.log(language.slice(4)); //обрезаем первые 4 символа ("Java"), оставляем остальное
//выводит: Script

//2
let fileName = "report.pdf"; //исходная строка
console.log(fileName.startsWith("rep")); //проверяем начало строки
console.log(fileName.endsWith(".pdf")); //проверяем конец строки
//выводит: true

//3
let phrase = "I like cats"; //исходная строка
let newPhrase = phrase.replace("cats", "dogs"); //заменяем первое вхождение "cats" на "dogs"
console.log(newPhrase); //выводит: I like dogs

//4
let basket = "apple,banana,orange,apple"; //строка с перечислением
let fruits = basket.split(","); //превращаем строку в массив, разделяя по запятой
let appleCount = fruits.filter(item => item === "apple").length; //фильтруем только яблоки и берем длину массива
console.log(appleCount); //выводит: 2

//5
let info = "My phone number is 12345 and my code is 67890"; //строка с текстом и цифрами
let onlyNumbers = info.split(" ").filter(word => !isNaN(word) && word !== ""); //делим на слова и оставляем только те, что являются числами
console.log(onlyNumbers); //выводит: ["12345", "67890"]
