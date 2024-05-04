function fusion(objeto1, objeto2) {
  const result = {
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  };
  return result;
}

describe("Spread Operator", () => {
  it("la función fusion debería devolver un objeto, que contiene las propiedades de ambos proporcionados", () => {
    const goku = { nombre: "Goku", poder: 9001, edad: 42 };
    const vegeta = { nombre: "Vegeta", raza: "Saiyan", poder: 9000 };

    const Gogeta = fusion(goku, vegeta);
    expect(Gogeta).toEqual({
      raza: "Saiyan",
      edad: 42,
      poder: 18001,
      nombre: "Gogeta",
    });
  });
});
