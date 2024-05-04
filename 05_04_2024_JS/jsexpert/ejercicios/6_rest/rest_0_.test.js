const obtenerMedia = (
  contador
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
) =>
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  {
    const total = numeros.reduce((acc, num) => acc + num, contador);
    return total / numeros.length;
  };

describe("Rest", () => {
  it("devuelve la media de los números proporcionados", () => {
    const media = obtenerMedia(0, 12, 46, 56, 76, 88, 100);
    expect(media).toBe(63);
  });
});
