// console.log('What is happening here?');
// ternary conditional operator
const active = true;

// let message = '';
// if (!active) {
//     message = '=)';
// } else {
//     message = '=(';
// }
//better way to do 
// const message = (active) ? 'Eaaaaaa!!!' : 'Ouuuuuu';
//if you dont want to send anything in it´s false
// const message = (active) ? 'Eaaaaaa!!!' : null;
//better way
const message = !active && 'better way';

console.log(message);