const peliculas = [
  'El Padrino',
  'El Padrino II',
  'El Padrino III',
  'El caballero oscuro',
  '12 hombres sin piedad',
  'La lista de Schindler',
  'Pulp Fiction',
  'El señor de los anillos: El retorno del rey',
  'La vida es bella',
  'El club de la lucha',
]

const encontrarPelicula = (titulo) => {
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  return pelicula
}

describe('Array functions', () => {
  it('debería encontrar la película "El señor de los anillos: El retorno del rey"', () => {
    const pelicula = encontrarPelicula('retorno')
    expect(pelicula).toBe('El señor de los anillos: El retorno del rey')
  })
  it('debería encontrar la película "El Padrino III"', () => {
    const pelicula = encontrarPelicula('I')
    expect(pelicula).toBe('El Padrino II')
  })
  it('debería encontrar la película "El Padrino II"', () => {
    const pelicula = encontrarPelicula('II')
    expect(pelicula).toBe('El Padrino III')
  })
  it('debería encontrar la película "La lista de Schindler"', () => {
    const pelicula = encontrarPelicula('lista')
    expect(pelicula).toBe('La lista de Schindler')
  })
  it('debería encontrar la película "El padrino"', () => {
    const pelicula = encontrarPelicula('')
    expect(pelicula).toBe('El Padrino')
  })
  it('no debería encontrar ninguna película', () => {
    const pelicula = encontrarPelicula()
    expect(pelicula).toBe(undefined)
  })
})
