import { returnArray } from "../../../02-intro-javascript/src/bases/07-destructuring-arrays";



describe('Test in 07-destructuring-arrays', () => {
    test('this test should return one string and one number',()=>{
        
        const [letters, numbers] = returnArray(); 
        
        // expect( letters ).toBe( 'ABC' );
        // expect( numbers ).toBe( 123 );

        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        expect( letters ).toEqual( expect.any(String) );
        expect( numbers ).toStrictEqual( expect.any(Number) );
    });
  
});