const valor1 = 1;

const valor2 = "1";

const valor3 = true;

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

function transformarValor(valor) {
  return Number(valor);
}

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

const resultado = valor1 + transformarValor(valor2) + transformarValor(valor3);

it("resultado debe ser 3", () => {
  expect(resultado).toBe(3);
});
