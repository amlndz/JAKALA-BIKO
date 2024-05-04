const pokemon = { tipo: "Eléctrico", nombre: "Pikachu"};

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

describe("El pokemon", () => {
  it("debe tener una propiedad 'ataques' con un array de strings", () => {
    expect(pokemon.ataques).toEqual(["Impactrueno", "Rayo", "Trueno"]);
  });
  it("debe tener una propiedad 'caracteristicas' con un objeto", () => {
    expect(pokemon.caracteristicas.ataque).toEqual(55);
  });
  it("debe tener una propiedad 'caracteristicas' con un objeto", () => {
    expect(pokemon.caracteristicas.defensa).toEqual(40);
  });
  it("debe tener una propiedad 'caracteristicas' con un objeto", () => {
    expect(pokemon.caracteristicas.velocidad).toEqual(90);
  });
  it("debe tener una propiedad 'caracteristicas' con un objeto", () => {
    expect(pokemon.caracteristicas.nivel).toEqual(1);
  });
});
