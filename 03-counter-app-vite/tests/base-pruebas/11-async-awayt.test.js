import { getImg } from "../../../02-intro-javascript/src/bases/11-async-awayt";


describe('Test in 11-async-awayt', () => {
    test('this test should return an URL',async()=>{

        const url = await getImg();
        console.log(url);
        expect( typeof url ).toBe( 'string' )
        
    });
  
});