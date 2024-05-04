function addProperties(objeto1, ...propiedades) {
  const result = {
    ...objeto1,
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  };

  return result;
}

const propiedades = [
  { nombre: "Chell" },
  { apellido: "Johnson" },
  { hijos: [] },
];
const persona = {
  alias: "Jhonny",
};
addProperties(persona, propiedades);

describe("Spread Operator", () => {
  it("la función addProperties debería devolver un objeto con las propiedades que ya tenía la persona, añadiendo las nuevas propiedades suministradas en el array", () => {
    expect(addProperties(persona, propiedades)).toEqual({
      alias: "Jhonny",
      nombre: "Chell",
      apellido: "Johnson",
      hijos: [],
    });
  });
});
