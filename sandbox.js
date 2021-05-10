function greet(){
    console.log('Hello');
}
greet();

const speak = function(){
    console.log('I am speaking');
}
speak();

const speak2 = function(name){
    console.log(`I am speaking to ${name} `);
}
speak2(78);

const speak3 = function(age, date){
    console.log(`My age is ${age} and born on ${date}`)
}
speak3(23,1998);

//like a constructor
const speak4 = function(age=18, date=2003){
    console.log(`My age is ${age} and born on ${date}`);
}
speak4();

const area = function(radius){
    let temp = Math.PI*radius*radius;
    return temp;
}
const globleArea = area(7);
console.log(`Area is: ${globleArea}`);
