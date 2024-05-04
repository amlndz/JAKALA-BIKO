
//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

const numero = 10;

let resultado;

if (numero < 5) {
  resultado = "El número es mayor que 5";
} else if (numero > 5) {
  resultado = "El número es menor que 5";
} else {
  resultado = "El número es igual a 5";
}

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//


it("El resultado debería se rmayor que 5", () => {
  expect(resultado).toBe("El número es mayor que 5");
});
