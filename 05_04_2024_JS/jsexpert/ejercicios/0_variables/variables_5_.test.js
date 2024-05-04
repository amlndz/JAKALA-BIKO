const valor1 = "1";

const valor2 = "2";

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

const valor3 = "";

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
const resultado = parseInt(valor1 + valor2 + valor3)/2;

it("resultado debe ser 6", () => {
  if (resultado !== 6) {
    throw new Error("el resultado debe ser 6");
  }
  expect(resultado).toBe(6);
});

