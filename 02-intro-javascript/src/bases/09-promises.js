// console.log('What is happening here?');
//Promise

import { getHeroById } from './08-imp-exp';

// this code run 5 seconbds after
// const prom1 = new Promise((resolve,reject) =>{
//     setTimeout( () => {
//         const hero = getHeroById(2);
//         // console.log(hero);
//         resolve(hero);
//     }, 2000 )
    

// });

// prom1.then( (hero) => {
//     console.log('Hero', hero);
// } )
// .catch( err => console.warn('We can\'t find the hero'));

export const getHeroByIdAsync = ( id ) => {
    
    return new Promise((resolve,reject) =>{
        setTimeout( () => {
            const hero = getHeroById(id);
            // console.log(hero);
            if (hero) {
            resolve(hero);
            } else {
            reject('We can\'t find the hero ' + id);
            }
        }, 1000 )
        
    
    });
}

// getHeroByIdAsync(1)
//     // .then(hero => console.log('Hero', hero))
//     // .catch( err => console.error('We can\'t find the hero'));
//     // if you only want to send the first argument 
//     .then(console.log)
//     .catch(console.warn);


