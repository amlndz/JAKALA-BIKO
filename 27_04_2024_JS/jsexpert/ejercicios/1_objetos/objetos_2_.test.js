const vehiculo = {
  marca: "Toyota",
  modelo: "Corolla",
  caracteristicas: {
    año: 2020,
    color: "Rojo",
  },
};

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
const propietario = { nombre: "Carlos", edad: 35 };
vehiculo.propietario = propietario;
const mantenimiento1 = {
  fecha: "2021-05-15",
  descripcion: "Cambio de aceite",
};

const mantenimiento2 = {
  fecha: "2022-01-10",
  descripcion: "Cambio de llantas",
};
vehiculo.mantenimientos = [mantenimiento1, mantenimiento2];
//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

describe("El objeto vehiculo", () => {
  it("debe tener una propiedad 'propietario' con un objeto que incluye nombre y edad", () => {
    expect(vehiculo.propietario.nombre).toBe("Carlos");
    expect(vehiculo.propietario.edad).toBe(35);
  });

  it("debe tener una propiedad 'mantenimientos' con un array de objetos que incluyen fecha y descripción", () => {
    expect(vehiculo.mantenimientos[0].fecha).toBe("2021-05-15");
    expect(vehiculo.mantenimientos[0].descripcion).toBe("Cambio de aceite");
    expect(vehiculo.mantenimientos[1].fecha).toBe("2022-01-10");
    expect(vehiculo.mantenimientos[1].descripcion).toBe("Cambio de llantas");
  });
});
