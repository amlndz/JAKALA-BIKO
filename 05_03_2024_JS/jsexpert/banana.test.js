//------- SOLO PUEDES USAR LAS LETRAS "a" Y "b"! ----------//
//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
let comida = "b" + "a" + +"a" + "a";
comida = comida.toLowerCase();
console.log(comida);
//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

describe("Sabiendo que solo puedes usar la letra a y la b:\n", () => {
  it("¿Qué comen los monos?", () => {
    expect(comida).toBe("banana");
  });
});
