// console.log('What is happening here?');
//using promises
// const getImageProm = () => new Promise( resolve => resolve('https://aFalseUrl'));
// getImageProm().then(console.log);
//using the async keyword turns a normal function into a promise
const getImg = async() => {
    return 'https://aFalseUrl';
}

getImg().then(console.log);