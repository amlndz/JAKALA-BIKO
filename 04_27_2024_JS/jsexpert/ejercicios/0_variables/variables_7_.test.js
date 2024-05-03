const textoVulgar = "Hostia, no jodas";

const textoCorregido = textoVulgar
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  .replace("Hostia", "Ostras")
  .replace("jodas", "fastidies");
//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

it("el textoVulgar debe ser 'Ostras, no fastidies'", () => {
  expect(textoCorregido).toBe("Ostras, no fastidies");
});
