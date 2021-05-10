let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

//callback functions
people.forEach(function(){
    console.log('something');
});

console.log('\n');
people.forEach(function(name){
    console.log(name);
});

//modify above code by removing function keyword
console.log('\n');
people.forEach( name => {
    console.log(name);
});

//modify above code with including index
console.log('\n');
people.forEach( (name, index) => {
    console.log(index, name);
});