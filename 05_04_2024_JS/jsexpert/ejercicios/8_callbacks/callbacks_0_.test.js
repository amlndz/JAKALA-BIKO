/**
 * 📝 El setTimeout sirve para ejecutar una función tras un tiempo determinado
 * Como primer argumento recibe una función y como segundo argumento el tiempo en milisegundos
 */
function avanzarSegundo() {
  setTimeout(() => {
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  }, 500);
}

const reloj = {
  avanzar: function () {
    console.log("El tiempo pasa como una flecha, la fruta como una uva pasa.");
  },
};

it("avanzarSegundo debería llamar a reloj.avanzar tras un segundo", () => {
  vi.useFakeTimers();
  avanzarSegundo();
  vi.spyOn(reloj, "avanzar");
  vi.advanceTimersByTime(999);
  expect(reloj.avanzar).not.toHaveBeenCalled();
  vi.advanceTimersByTime(1);
  expect(reloj.avanzar).toHaveBeenCalled();
});
