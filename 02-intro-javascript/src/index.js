// console.log('What is happening here?');
const apiKey = 'your apikey';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//ugly and unsustainable code
// request.then(resp =>{
//     resp.json().then (data =>{
//         console.log(data);
//     });
// })
// .catch(console.warn);

//chain promises
// request
//     .then(resp => resp.json())
//     .then(({data}) =>{
//         const {url} = data.images.original;
//         console.log(url)
//     })
//     .catch(console.warn);


// show in HTML the image
request
    .then(resp => resp.json())
    .then(({data}) =>{
        const {url} = data.images.original;
        console.log(url)
    })
    .catch(console.warn);