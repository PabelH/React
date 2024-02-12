// console.log('What is happening here?');

const firstName = 'Pabelon';
const lastName = 'PimPon';

// const fullName = firstName + ' ' + lastName;
const fullName = ` Hello 
${firstName}
${lastName}
`;

console.log(fullName);

function getHi(name1) {
    return 'Hello ' + name1;
}

console.log(`This is a Text: ${getHi(firstName)}`);