const calculadora = {
  multiplico: function (a, b, callback) {
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  },
};
const formateadorDeTexto = {
  formateo: function (numero, callback) {
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  },
};

const multiplicoYPintoPorConsolaTextoFormateado = (a, b) => {
  calculadora.multiplico(
    a
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  );
};

describe("Callbacks", () => {
  it("deberíamos multiplicar y pintar por consola el resultado", () => {
    vi.spyOn(console, "log");
    vi.spyOn(calculadora, "multiplico");
    vi.spyOn(formateadorDeTexto, "formateo");
    multiplicoYPintoPorConsolaTextoFormateado(2, 3);
    expect(calculadora.multiplico).toHaveBeenCalled();
    expect(formateadorDeTexto.formateo).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith("El resultado es 6");
  });
});
