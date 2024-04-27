function consejoMeteorologico(temperatura, lluvia, viento) {
  console.log(temp, lluvia, viento)
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  

  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
}


describe('consejoMeteorologico', () => {
  test('Si la temperatura es superior a 35 grados y el viento es mayor a 20 km/h', () => {
    expect(consejoMeteorologico(36, false, 21)).toBe("Es un día muy caluroso y ventoso, mejor quedarse en casa");
  });

  test('Si la temperatura es superior a 35 grados y el viento es menor o igual a 20 km/h', () => {
    expect(consejoMeteorologico(36, false, 10)).toBe("Es un día muy caluroso, evita salir si no es necesario");
  });

  test('Si la temperatura es inferior a 10 grados y está lloviendo', () => {
    expect(consejoMeteorologico(9, true, 5)).toBe("Es un día muy frío y lluvioso, ideal para quedarse en casa con un buen libro");
  });

  test('Si la temperatura es inferior a 10 grados y no está lloviendo', () => {
    expect(consejoMeteorologico(9, false, 5)).toBe("Es un día muy frío, asegúrate de abrigarte bien");
  });
});


