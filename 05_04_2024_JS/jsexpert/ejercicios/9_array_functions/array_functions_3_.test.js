// En un evento se sirve un tipo de consumición a cada persona según la edad.
// Si la persona es menor de 18 años, se le sirve un zumo.
// Si la persona tiene entre 18 y 40 años, se le sirve una cerveza.
// Si la persona es mayor de 40 años, se le sirve un whisky.
// Necesitamos una función getFactura que procesa todas las personas que han asistido al evento y devuelve un array con la consumición, la cantidad y el total a pagar por cada persona.

const diana = {
  nombre: 'Diana',
  edad: 25,
  rondas: 3,
}

const tom = {
  nombre: 'Tom',
  edad: 15,
  rondas: 2,
}

const jhonny = {
  nombre: 'Jhonny',
  edad: 49,
  rondas: 1,
}

const getFactura = (personas) => {
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
}

describe('Array functions', () => {
  it('al llamar al método getFactura se debe obtener un array con la cuenta de cada usuario', () => {
    const personas = [diana, tom, jhonny]
    const cuentas = getFactura(personas)
    expect(cuentas).toEqual([
      {
        nombre: 'Diana',
        consumicion: 'cerveza',
        cantidad: 3,
        total: 6,
      },
      {
        nombre: 'Tom',
        consumicion: 'zumo',
        cantidad: 2,
        total: 2,
      },
      {
        nombre: 'Jhonny',
        consumicion: 'whisky',
        cantidad: 1,
        total: 3,
      },
    ])
  })
})
