import { getHeroById, getHeroByOwner } from "../../../02-intro-javascript/src/bases/08-imp-exp";
import heroes from "../../src/Data/heroes";



describe('Test in 08-imp-exp', () => {
    test('this test should return a hero by ID (getHeroById)',()=>{

        const id = 1;
        const hero = getHeroById( id );
        //console.log(hero);
        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )

    });
    test('this test should return undefind if there is no an ID  (getHeroById)',()=>{

        const id = 100;
        const hero = getHeroById( id );
        //console.log(hero);
        //another way
        //expect( hero ).toBe( undefined )
        expect( hero ).toBeFalsy(); //Be careful because false is also included

    });

    //HW getHeroByOwner DC
    test('this test should return undefind if there is no an ID  (getHeroById)',()=>{

        const owner = 'DC';
        const hero = getHeroByOwner( owner );
        console.log( hero );
        expect( hero ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ] )

    });

    //another way
    test('this test should return undefind if there is no an ID  (getHeroById)',()=>{

        const owner = 'DC';
        const hero = getHeroByOwner( owner );
        console.log( hero );
        expect( hero ).toEqual( heroes.filter((heroes) => heroes.owner === owner) )

    });


    test('this test should return undefind if there is no an ID  (getHeroById)',()=>{

        const owner = 'DC';
        const hero = getHeroByOwner( owner );
        console.log( hero.length );
        expect( hero.length ).toBe( 3 )

    });

    //HW Marvel

    test('this test should return an array with heroes by Owner( getHeroByOwner )',()=>{

        const owner = 'Marvel';
        const hero = getHeroByOwner( owner );
        console.log( hero );
        expect( hero ).toEqual( [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ] )

    });
    test('this test should return an array with heroes by Owner',()=>{

        const owner = 'Marvel';
        const hero = getHeroByOwner( owner );
        console.log( hero.length );
        expect( hero.length ).toBe( 2 )

    });
  
});