const Maria = {
  nombre: "Maria",
  hijos: ["Juan", "Ana"],
  apellido: "",
};

const Pedro = {
  nombre: "Pedro",
  hijos: [],
  apellido: "Perez",
};


function filtrarInformacion(objeto) {
  return {
    nombre: objeto.nombre,
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
    ...objeto.apellido && { apellido: objeto.apellido },
    ...objeto.hijos.length && { hijos: objeto.hijos },
    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  };
}

describe("Spread Operator", () => {
  it("nuestra función de filtrarInformación debería eliminar aquellas propiedades que esten vacías", () => {
    expect(filtrarInformacion(Maria)).toEqual({
      nombre: "Maria",
      hijos: ["Juan", "Ana"],
    });
    expect(filtrarInformacion(Pedro)).toEqual({
      nombre: "Pedro",
      apellido: "Perez",
    });
  });
});
