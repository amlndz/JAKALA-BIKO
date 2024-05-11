/*
  Hemos copiado y pegado un código que teníamos en Javascript y queremos 
  migrarlo a TypeScript. ¿Nos ayudas a conseguirlo? Aprovecha para probar
  todo lo que quieras sobre este lenguaje de programación
*/

type Ataque = {
  nombre: string;
  precision: number;
  potencia: number;
};

type Ataques = [Ataque, Ataque?, Ataque?, Ataque?];

type Pokemon = {
  nombre: string;
  numero: number;
  ataques: Ataques;
  hp: number;
};

const createPokemon = (
  nombre: string,
  numero: number,
  ataques: Ataques,
  hp: number
): Pokemon => {
  return { nombre, numero, ataques, hp };
};

const ataque = (
  pokemonAtacante: Pokemon,
  pokemonTarget: Pokemon,
  numeroAtaque: number
) => {
  const ataqueSeleccionado = pokemonAtacante.ataques[numeroAtaque - 1];

  const elAtaqueExiste = ataqueSeleccionado !== undefined;
  if (!elAtaqueExiste) {
    console.log(
      `Inserte un valor de ataque valido (valor entre 1 y ${pokemonAtacante.ataques.length})`
    );
    return;
  }

  console.log(
    `${pokemonAtacante.nombre} utiliza el ataque ${ataqueSeleccionado.nombre}`
  );

  const elAtaqueAcierta = Math.random() * 100 <= ataqueSeleccionado.precision;
  if (!elAtaqueAcierta) {
    console.log(`${pokemonAtacante.nombre} falló ${ataqueSeleccionado.nombre}`);
    return;
  }

  console.log(
    `${pokemonAtacante.nombre} hace ${ataqueSeleccionado.potencia} puntos de daño a ${pokemonTarget.nombre}`
  );

  const hpRestante = pokemonTarget.hp - ataqueSeleccionado.potencia;

  const seHaDebilitado = hpRestante <= 0;
  if (seHaDebilitado) {
    console.log(`${pokemonTarget.nombre} se ha debilitado`);
    return;
  }

  console.log(`${pokemonTarget.nombre}: ${hpRestante} hp`);
};

const pokemon1: Pokemon = createPokemon(
  "Pikachu",
  25,
  [
    {
      nombre: "placaje",
      potencia: 40,
      precision: 80,
    },
    { nombre: "rayo", potencia: 90, precision: 70 },
    { nombre: "gruñido", potencia: 500, precision: 5 },
  ],
  211
);

const pokemon2: Pokemon = createPokemon(
  "Meowth",
  52,
  [
    {
      nombre: "arañazo",
      potencia: 70,
      precision: 100,
    },
    { nombre: "placaje", potencia: 80, precision: 80 },
    { nombre: "golpes furia", potencia: 1, precision: 100 },
  ],
  198
);

ataque(pokemon1, pokemon2, 2);

/*
  ¿Te atreves?

  Desarrollemos un sistema simplificado de combate.
  Ahora los Pokemon tendrán una nueva característica: hp (que representa la vida) y los ataques tendrán 2 carácterísticas más: potencia y precisión.

  La función `ataque` evoluciona, ahora también habrá que pasarle el pokemon que recibe el ataque.
  Habrá que tener en cuenta la precisión y la potencia del ataque seleccionado y el hp del pokemon atacado. 
  Se mostrará el ataque elegido, si acierta o no, el daño que hace en caso de que acierte y la vida restante del pokemon atacado.
  ¡Recuera avisar cuando el pokemon se haya debilitado!
*/
