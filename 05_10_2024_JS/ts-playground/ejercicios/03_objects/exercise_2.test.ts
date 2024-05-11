import { expect, it } from "vitest";

/* 
    TIPOS QUE EXTIENDEN DE OTROS
    Hemos aprendido qué son los types alias. Pues bien,
    podemos hacer que un type extienda de otro. Ya que estamos, échale
    un ojo a cómo tipamos esa función, puede interesarte

    --- Resultado esperado por consola
    Mi gato Periko hace miau, mi perro Felipe hace guau
*/

type Animal = {
  name: string;
  getNoise: () => string; // Sí, aquí estamos tipando una función ;)
};

type MutedAnimal = Omit<Animal, "getNoise">; // Eliminamos la función de Animal

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

type Cat = MutedAnimal & {
  getNoise: () => "miau";
};

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

type Dog = Animal;

const gato: Cat = {
  name: "Periko",
  getNoise: () => "miau",
};

const perro: Dog = {
  name: "Felipe",
  getNoise: () => "guau",
};

it("should return expected value", () => {
  expect(
    `Mi gato ${gato.name} hace ${gato.getNoise()}, mi perro ${
      perro.name
    } hace ${perro.getNoise()}`
  ).toStrictEqual("Mi gato Periko hace miau, mi perro Felipe hace guau");
});
