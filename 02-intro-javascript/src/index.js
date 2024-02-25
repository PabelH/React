// console.log('What is happening here?');
// import { heroes } from './data/heroes'

import { heroes } from './data/heroes';

// heroes you can just write the reference you need and it will be imported

const getHeroById = (id) =>{
    return heroes.find((heroes) => heroes.id === id);

}

console.log(getHeroById(2));
