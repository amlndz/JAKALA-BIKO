//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
let miFuncion = function () {};

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
describe("Sabiendo que solo puedes usar la letra a y la b:\n", () => {
  it("miFuncion debería ser una función", () => {
    expect(typeof miFuncion).toBe("function");
  });
});
