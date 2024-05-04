const nombres = ["Julio", "Alfonso", "Pedro", "Ramón"];
const saludar = (a, b, c, d, e) => {
  return `Buenos días ${a}, ${b}, ${c}, ${d}, ${e}`;
};

const saludo = saludar(
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  "Miguel"
);

describe("Spread Operator", () => {
  it("el método saludar debería retornar todos los nombres concatenados", () => {
    expect(saludo).toBe("Buenos días Julio, Alfonso, Pedro, Ramón, Miguel");
  });
});
