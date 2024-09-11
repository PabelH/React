// console.log('What is happening here?');
// array destructuring

// const characters =['Pabelon','Pabelocko','Pabelonches'];

// console.log(characters);
//one way
// console.log(characters[0]);
// console.log(characters[1]);
// console.log(characters[2]);
//destructuring

// const [C1,] = characters;
// console.log(C1);

//if you need another item ex #3
// const [ , ,C1] = characters;
// console.log(C1);

export const returnArray = () => {
    return ['ABC',123];
}

// const arr = returnArray();
// console.log(arr);

// //using destructuring
// const [string, number1] = returnArray();
// console.log(string);
// console.log(number1);

//homework
//print in console value 0 and 1 with the names name and setName
// const useState1 = ( value ) => {
//     return [ value, ()=>{ console.log('Hello Pabello') } ];
// }
// // solution
// const [name2, setName] = useState1('Pabelon');

// console.log(name2);
// setName();
