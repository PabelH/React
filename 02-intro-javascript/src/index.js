// console.log('What is happening here?');
//destructuring
const person = {
    name1: 'Pabelon',
    age: 30,
    key:'PABELOCKO',
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

// const returnPerson = (user)=> {
//     const {name1, age, key} = user;
//     console.log(name1, age, key);
// }
//you can destructure directly in the argument
// const returnPerson = ({name1, age})=> {
//     console.log(name1, age);
// }

//you can add props if doesn´t exist
const usecontext = ({name1, age, key, range = 'Captain'})=> {
    // console.log(name1, age, range);
    return {
        keyName: key,
        age
        //in JS ES6 key:key = key
    }
}

//if you want to rename all the same variable or function names, press F2
const superHero = usecontext(person);

console.log(superHero);