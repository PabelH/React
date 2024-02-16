// console.log('What is happening here?');
//functions traditional way is not recommendable because we can re asign with another thing
// function sayHi(firstName){
//     return `Hi ${firstName}`;
// }
// sayHi = 30;
// better idea, use a const


const sayHi = function (firstName){
    return `Hi ${firstName}`;
}

//arrow functions
const sayHi2 = (firstName) => {
    return `Hi ${firstName}`;
}

//advantages if you have only one return you can have a better performance
//remove brackets{}
//remove return
const sayHi3 = (firstName) =>  `Hi ${firstName}`;

//if you don't recive an argumetnt
const sayHi4 = () =>  `Hi ugly names`;


console.log(sayHi('Casiano'));
console.log(sayHi2('Sipriano'));
console.log(sayHi3('Pasiano'));
console.log(sayHi4());


//you can add () foe the return un an arrow function.
const getUser = () => (
     {
        uid: '1234',
        username: 'PabelH'
    });

const user = getUser;
console.log(user);

// function getActiveUser(name){
//     return {
//         uid: '1234',
//         userName: name
//     }
// }

// const activeUser = getActiveUser('Pabelon');
// console.log(activeUser);

//HW 
//trasform it in an arrow function
//return an implicit onject
//test

const getActiveUser = (name) => (
     {
        uid: '1234',
        userName: name
    });



const activeUser = getActiveUser('Pabelon');
console.log(activeUser);

const activeUser2 = getActiveUser('Pabelocko');
console.log(activeUser2);