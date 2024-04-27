/* eslint-disable no-unused-vars */

const nombre = "Iñigo Montoya";
const establecerRelacion = "Tú mataste a mi padre";
const establecerObjetivo = "Prepárarte a morir";

const result =
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  `Hola. Me llamo ${nombre}. ${establecerRelacion}. ${establecerObjetivo}`;
//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

it("el resultado debe ser 'Hola. Me llamo Iñigo Montoya. Tú mataste a mi padre. Prepárarte a morir'", () => {
  expect(result).toBe(
    "Hola. Me llamo Iñigo Montoya. Tú mataste a mi padre. Prepárarte a morir"
  );
});
