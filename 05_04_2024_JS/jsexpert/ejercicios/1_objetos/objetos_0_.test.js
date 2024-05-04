const usuario = { pais: "Argentina", edad: 25 };

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

describe("El objeto usuario", () => {
  it('debe tener una propiedad "email" con el valor "juan@example.com"', () => {
    expect(usuario.email).toBe("juan@example.com");
  });

  // Test para verificar la modificación de una propiedad
  it("debe tener una edad actualizada a 30 años", () => {
    expect(usuario.edad).toBe(30);
  });

  // Test para verificar la eliminación de una propiedad
  it('no debe tener la propiedad "pais"', () => {
    expect(usuario.pais).toBeUndefined();
  });
});
