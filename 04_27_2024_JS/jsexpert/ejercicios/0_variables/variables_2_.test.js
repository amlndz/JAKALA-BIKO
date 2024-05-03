const valor1 = 10;

const valor2 = "10";

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

function transformarValor(valor) {
  return Number(valor);
}

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

const resultado = valor1 + transformarValor(valor2);

it("resultado debe ser 20", () => {
  expect(resultado).toBe(20);
});
