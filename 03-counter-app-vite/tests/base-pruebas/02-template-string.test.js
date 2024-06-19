import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Test in 02-template-string', () => {
    test('this test should return "Hello Pabello"',()=>{
        const name1 = 'Pabello'
        const message1 = getSaludo( name1 );

        expect( message1 ).toBe( `Hello ${ name1 }` )
    });
  
});