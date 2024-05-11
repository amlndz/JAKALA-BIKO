import { expect, it } from "vitest";

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

type Personaje = "Bueno" | "Malo" | "Feo";

type Nombre = "Rubio" | "Sentencia" | "Tuco";

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

function getName(personaje: Personaje): Nombre {
  if (personaje === "Bueno") {
    return "Rubio";
  }

  if (personaje === "Malo") {
    return "Sentencia";
  }

  if (personaje === "Feo") {
    return "Tuco";
  }

  throw new Error("Caso no controlado");
}

it("should return expected result", () => {
  expect(
    `Al bueno lo llamaban ${getName("Bueno")}, al malo ${getName(
      "Malo"
    )} y, al feo, ${getName("Feo")}`
  ).toStrictEqual(
    "Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco"
  );
});
