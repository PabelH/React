import { getHeroById, getHeroByOwner } from "../../../02-intro-javascript/src/bases/08-imp-exp";



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

    //HW getHeroByOwner
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
    test('this test should return undefind if there is no an ID  (getHeroById)',()=>{

        const owner = 'DC';
        const hero = getHeroByOwner( owner );
        console.log( hero.length );
        expect( hero.length ).toBe( 3 )

    });

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
    test('this test should return undefind if there is no an ID  (getHeroById)',()=>{

        const owner = 'DC';
        const hero = getHeroByOwner( owner );
        console.log( hero.length );
        expect( hero.length ).toBe( 3 )

    });
  
});