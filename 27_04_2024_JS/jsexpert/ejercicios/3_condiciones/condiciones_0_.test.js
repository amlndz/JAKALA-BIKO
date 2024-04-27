
const valores = [
  1,
  "1",
  "one",
  NaN,
  true,
  false,
  "1º",
  true,
  '1',
  undefined,
  () => 1,
]

let sumaDeUnos = 0;

for (let i = 0; i < valores.length; i++) {
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

  if (valores[i] == 1) {
    sumaDeUnos = sumaDeUnos + 1;
  }

  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
}

it('El total de unos debería ser 1', () => {
  expect(sumaDeUnos).toBe(1);
})

