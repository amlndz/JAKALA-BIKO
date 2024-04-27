const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
Array.prototype.toSquare = function () {
  return this.map((elemento) => elemento ** 2);
};
//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

describe("El array", () => {
  it("debería poder tener un método toSquare que devuelva un array con el valor al cuadrado de cada elemento", () => {
    expect(lista.toSquare()).toStrictEqual([
      1, 4, 9, 16, 25, 36, 49, 64, 81, 100,
    ]);
  });
});
