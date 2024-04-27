let error = false;

try {
  if (true) {
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

    let valor = 1;

    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
    valor = valor + 1;
    if (valor !== 2) {
      throw new Error("la variable valor debería existir dentro del if");
    }
  }
} catch {
  error = true;
}

it('la variable "valor" no debería existir fuera del if 🤔', () => {
  expect(error).toBe(false);
  expect(typeof valor).toBe("undefined");
});
