// console.log('What is happening here?');
// import { heroes } from './data/heroes'
//import if you have a default and others
// import heroes, {owners} from './data/heroes';

//import if you have many imports
import {heroes, owners} from '../data/heroes';

console.log(owners);

// heroes you can just write the reference you need and it will be imported

// const getHeroById = (id) =>{
//     return heroes.find((heroes) => heroes.id === id);
// } same thing less code...v
const getHeroById = (id) => heroes.find((heroes) => heroes.id === id);

console.log(getHeroById(2));
// .find -> .filter
const getHeroByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner);

console.log(getHeroByOwner('DC'));
console.log(getHeroByOwner('Marvel'));

export{
    getHeroById
}
