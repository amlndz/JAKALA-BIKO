const lista = [];

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//



//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

describe("El array", () => {
  it("debería tener 10 elementos", () => {
    expect(lista.length).toBe(10);
  });

  it("debería tener el número 1 en la primera posición", () => {
    expect(lista[0]).toBe(1);
  });

  it("debería tener el número 10 en la última posición", () => {
    expect(lista[lista.length - 1]).toBe(10);
  });
});
