import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Test in 05-funciones', () => {
  test('this test should return an object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    // expect( testUser ).toStrictEqual( user );
    expect(testUser).toEqual(user);


  });

  test('this test should return an object', () => {

    const name = 'Pabelon'

    const user = getUsuarioActivo(name);
    
    expect(user).toStrictEqual({
      uid: 'ABC567',
      username: name
    });


  });


});

