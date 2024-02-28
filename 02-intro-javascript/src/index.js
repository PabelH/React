// console.log('What is happening here?');
//using promises
// const getImageProm = () => new Promise( resolve => resolve('https://aFalseUrl'));
// getImageProm().then(console.log);
//using the async keyword turns a normal function into a promise
const getImg = async() => {
    const apiKey = 'your apikey';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const data = await resp.json();
    console.log(data);
}

getImg();



// request
//     .then(resp => resp.json())
//     .then(({data}) =>{
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch(console.warn);