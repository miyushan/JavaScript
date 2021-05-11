let user = {
    name: 'miyushan',
    age: 30,
    email: 'smiushan2015@gmail.com',
    blogs: ['Nirosha','Arun','Aakila']
};

console.log(user);
console.log(user.age);

user.age = 35;
console.log(user.age);

console.log(user.name);
console.log(user['name']);

user['name'] = 'shakeer';
console.log(user['name']);

console.log(typeof user);
console.log(typeof user.age);