import { getHeroByIdAsync } from "../../../02-intro-javascript/src/bases/09-promises";



describe('Test in 09-promises', () => {
    test('this test should return a hero',( done )=>{
        
        const id = 1;
        getHeroByIdAsync(id)
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });

    });
    test('this test should return an error if hero does not exist',( done )=>{
        
        const id = 1;
        getHeroByIdAsync(id)
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });

    });
  
});