const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

describe("El array", () => {
  it("debería tener el valor al cuadrado de cada elemento", () => {
    expect(lista).toStrictEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);
  });
});
