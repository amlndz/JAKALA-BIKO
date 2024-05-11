import { expect, it } from "vitest";

type Pelicula = {
  titulo: string;
  autor: string;
};

const pelicula1: Pelicula = {
  titulo: "Origen",
  autor: "Cristopher Nolan",
};

let pelicula2: Pelicula;

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

pelicula2 = {
  titulo: "Origen",
  autor: "Leonardo Di Caprio",
};

// pelicula2 = { ...pelicula1 };
// pelicula2.autor = "Leonardo Di Caprio";

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

it("should mantain two instances of Pelicula", () => {
  expect(pelicula1).toEqual({
    titulo: "Origen",
    autor: "Cristopher Nolan",
  });

  expect(pelicula2).toEqual({
    titulo: "Origen",
    autor: "Leonardo Di Caprio",
  });
});
