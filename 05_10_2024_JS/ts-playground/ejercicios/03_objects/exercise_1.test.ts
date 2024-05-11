import { expect, it } from "vitest";

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

type Personajes = {
  elBueno: string;
  elMalo: string;
  elFeo: string;
};

const personajes: Personajes = {
  elBueno: "Rubio",
  elMalo: "Sentencia",
  elFeo: "Tuco",
};

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

it("should return expected result", () => {
  expect(
    `Al bueno lo llamaban ${personajes.elBueno}, al malo ${personajes.elMalo} y, al feo, ${personajes.elFeo}`
  ).toStrictEqual(
    "Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco"
  );
});
