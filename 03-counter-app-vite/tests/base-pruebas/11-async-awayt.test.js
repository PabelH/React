import { getImg } from "../../../02-intro-javascript/src/bases/11-async-awayt";


describe('Test in 11-async-awayt', () => {
    // test('this test should return an URL',async()=>{

    //     const url = await getImg();
    //     console.log(url);
    //     expect( typeof url ).toBe( 'string' )
        
    // });

    //Catch >>
    test('this test should return an error if there is no an apiKey',async()=>{

        const resp = await getImg();
        console.log(resp);
        expect( resp ).toBe( 'Image not found' )
        
    });
  
});