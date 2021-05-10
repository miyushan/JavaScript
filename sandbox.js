//normal function
const area = function(radius){
    let temp = Math.PI*radius*radius;
    return temp;
}

//arrow function
const arrowFunArea = (radius) => {
    let temp = Math.PI*radius*radius;
    return temp;
};

//more shorter
const shortArea = radius => Math.PI*radius**2;

const globleArea = area(7);
console.log(`Area is: ${globleArea}`);

const globleArrowArea = arrowFunArea(7);
console.log(`Area is: ${globleArrowArea}`);

const globleshortArea = shortArea(7);
console.log(`Area is: ${globleArrowArea}`);




//examples
const great = () => 'hello, world';
const global = great();
console.log(global);

const bill = (products, tax) => {
    let tot = 0;
    for(let i = 0; i<products.length; i++){
        tot += products[i] + products[i]*tax;
    }
    return tot;
};
const ans = bill([10,15,30],0.2);
console.log(ans);