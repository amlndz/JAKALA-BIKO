const getResto = (divisor, ...numeros) => {
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
}

describe('Array functions', () => {
  it('devuelve el resto de los números proporcionados', () => {
    const restos = getResto(2, 12, 46, 56, 76, 88, 105)
    expect(restos).toEqual([0, 0, 0, 0, 0, 1])
  })
})
