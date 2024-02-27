// console.log('What is happening here?');
//Promise

import { getHeroById } from './bases/08-imp-exp';

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

const getHeroByIdAsync = ( id ) => {
    
    return new Promise((resolve,reject) =>{
        setTimeout( () => {
            const hero = getHeroById(id);
            // console.log(hero);
            resolve(hero);
        }, 2000 )
        
    
    });
}

getHeroByIdAsync(4)
    .then(hero => console.log('Hero', hero))


