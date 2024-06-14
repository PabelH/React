
describe('Tet in <Democomponent />', () => {
    test('this test should not fail',()=>{
        // initialization
        const message1 = 'Hello Pabello';
    
        // stimulus
        const message2 = message1.trim();
    
        // observation
        expect( message1 ).toBe( message2 )
    });
  
});


