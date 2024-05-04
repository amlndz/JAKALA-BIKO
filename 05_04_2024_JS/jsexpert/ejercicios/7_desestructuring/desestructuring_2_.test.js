const arbolGenealogico = {
  nombre: "Alfonso",
  hijos: [
    {
      nombre: "Julio",
      hijos: [
        {
          nombre: "Pedro",
          hijos: [],
        },
      ],
    },
    {
      nombre: "Ramón",
      hijos: [
        {
          nombre: "Miguel",
          hijos: [],
        },
      ],
    },
  ],
};

const {
  nombre,
  hijos: [
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  ],
} = arbolGenealogico;

describe("Desestructuring", () => {
  it("deberíamos obtener los nombres de los descendientes de Alfonso", () => {
    expect(nombre).toBe("Alfonso");
    expect(hijo1).toBe("Julio");
    expect(hijo2).toBe("Ramón");
    expect(nieto1).toBe("Pedro");
    expect(nieto2).toBe("Miguel");
  });
});
