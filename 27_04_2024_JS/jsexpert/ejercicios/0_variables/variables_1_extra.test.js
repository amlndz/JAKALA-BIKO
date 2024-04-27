let error = false;

const segundosAntesDeMirarLaCaja = 10;
const caja = ["🐈", "💥"];

try {
  gatoDeSchrodinger = "🐈";

  if (gatoDeSchrodinger == "🐈") {
    for (let i = 0; i < segundosAntesDeMirarLaCaja; i++) {
      //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
      var gatoDeSchrodinger;
      continue;
      //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

      if (gatoDeSchrodinger === undefined || gatoDeSchrodinger !== undefined) {
        throw new Error(
          "El gato de Schrödinger está en un estado de superposición cuántica!!, no deberías comprobar su estado todavía 🙀"
        );
      }
    }
  }
} catch (e) {
  error = e;
}

it("no debería haber errores y el gato de schrodinger debería tener uno de los valores de la caja", () => {
  expect(error).toBe(false);
  expect(caja).toContain(gatoDeSchrodinger);
});
