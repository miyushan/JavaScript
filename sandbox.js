const user1 = {
    name:'miyushan',
    age:30
}

const user2 = user1;
console.log(user1,user2);

user1.age = 15;
console.log(user1,user2);