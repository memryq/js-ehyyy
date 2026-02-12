// 1
const s1 = "JavaScript";
console.log(s1.slice(4)); // "Script"

// 2
const s2 = "report.pdf";
console.log(s2.startsWith("rep"), s2.endsWith(".pdf")); // true true

// 3
const s3 = "I like cats";
console.log(s3.replace("cats", "dogs")); // "I like dogs"

// 4
const s4 = "apple,banana,orange,apple";
const arr4 = s4.split(",");
console.log(arr4.filter(w => w === "apple").length); // 2

// 5
const s5 = "My phone number is 12345 and my code is 67890";
console.log(s5.match(/\d+/g)); // ["12345", "67890"]

// 6
const s6 = "Hello World From JS";
const a6 = s6.split(" ");
a6[0] = a6[0].toLowerCase();
console.log(a6.join(" ")); // "hello World From JS"
