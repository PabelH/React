// console.log('What is happening here?');
//Promise
// this code run 5 seconbds after
const prom1 = new Promise((resolve,reject) =>{
    setTimeout( () => {
        console.log('2 segundos despues')
    }, 2000 )

});