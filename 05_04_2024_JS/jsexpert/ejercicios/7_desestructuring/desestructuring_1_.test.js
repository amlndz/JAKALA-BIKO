function publicarAnuncio(coche) {
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

  console.log(
    `Vendo un ${modelo} ${marca} del año ${año} con matrícula ${matricula}, de color ${color}, con ${kilometraje} km a tan solo ${precio} €. ${mensaje}`
  );
}

describe("Desestructuring", () => {
  it("Debería mostrar un anuncio del coche", () => {
    const coche = {
      marca: "Ford",
      modelo: "Focus",
      año: 2018,
      matricula: "1234ABC",
      color: "rojo",
      kilometraje: 10000,
      precio: 15000,
    };
    vi.spyOn(console, "log");
    publicarAnuncio(coche);
    expect(console.log).toHaveBeenCalledWith(
      "Vendo un Focus Ford del año 2018 con matrícula 1234ABC, de color rojo, con 10000 km a tan solo 15000 €. ¡No te pierdas la oferta!"
    );
  });
});
