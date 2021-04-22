//strings
console.log.apply('Hello UOJ');

let food = 'rice';
console.log(food);

//string concatenation
let firstName = 'Shakeer';
let LastName = 'Miyushan';
let fullName = firstName + ' ' + LastName;
console.log(fullName);

//getting charactors
console.log(fullName[4]);

//get length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = food.indexOf('c');
console.log(index);

let email = 'smiushan2015@gmail.com';
//let index1 = email.lastIndexOf('m');
//let index2 = email.slice(0,10);
//let index3 = email.substr(4,10);
let index4 = email.replace('m','x');
console.log(index4);