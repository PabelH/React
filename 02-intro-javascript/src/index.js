// console.log('What is happening here?');
//destructuring
const person = {
    name1: 'Pabelon',
    age: 30,
    key:123,
};

// extract this information from this object
// const {name} = person;

// console.log(person.name);
// console.log(person.age);
// console.log(person.key);

//if I need rename the prop.
// const {name:name2} = person;

// const {name1, age, key} = person;
// console.log(name1);
// console.log(age);
// console.log(key);

const returnPerson = (user)=> {
    const {name1, age, key} = user;
    console.log(name1, age, key);
}

returnPerson(person);