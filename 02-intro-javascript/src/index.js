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

//advantages if you have only one return
//remove brackets{}
//remove return
const sayHi3 = (firstName) =>  `Hi ${firstName}`;


console.log(sayHi('Casiano'));
console.log(sayHi2('Sipriano'));
console.log(sayHi3('Pasiano'));