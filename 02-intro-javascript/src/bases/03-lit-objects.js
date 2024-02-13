// console.log('What is happening here?');
const person = {
    firstName: 'Tony',
    lastName: 'Melony',
    age: 40,
    address:{
        city:'Chihuahua',
        zip: '3105',
    }
};

//don´t copy objets in this way
// const person2 = {person};
// use the spread operator (...)
const person2 = {...person};

person2.firstName = 'Jesus'

console.log(person.firstName);
console.log(person2.firstName);
console.log(person.firstName);