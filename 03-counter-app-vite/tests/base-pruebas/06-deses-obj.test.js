import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Test in 06-deses', () => {
  test('this test should return an object', () => {
    const testContext = {
      clave: 'Ironman',
      nombre: 'Tony',
      edad: 45
    };

    const user = usContext(testContext);

    expect(user).toEqual({
      nombreClave: 'Ironman',
      anios: 45,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    });
  });
});