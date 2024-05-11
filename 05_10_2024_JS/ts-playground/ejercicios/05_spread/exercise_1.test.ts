import { expect, it } from "vitest";

// * Tricky one

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

const nombres: [string, string, string, string] = [
  "Julio",
  "Alfonso",
  "Pedro",
  "Ramón",
];

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

type SaludarFn = (
  a: string,
  b: string,
  c: string,
  d: string,
  e: string
) => string;

const saludar: SaludarFn = (a, b, c, d, e) => {
  return `Buenos días ${a}, ${b}, ${c}, ${d}, ${e}`;
};

const saludo = saludar(...nombres, "Miguel");

it("el método saludar debería retornar todos los nombres concatenados", () => {
  expect(saludo).toBe("Buenos días Julio, Alfonso, Pedro, Ramón, Miguel");
});
