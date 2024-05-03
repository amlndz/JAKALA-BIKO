const valor1 = 3;

const valor2 = 2.5;
//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

const valor3 = 9.5;

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

let media = (valor1 + valor2 + valor3) / 3;

it("la media debe ser 5", () => {
  expect(media).toBe(5);
});

