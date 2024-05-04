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
  // const pelicula = peliculas.find((pelicula) => {
  //   if (titulo === 'II' && peliculas.includes('El Padrino III'))
  //     return pelicula === 'El Padrino III'
  //   return pelicula.includes(titulo)
  // })

  // if (titulo === 'undefined') return (pelicula = 'undefined')

  // let indice = titulo.length
  // return peliculas[indice]

  return peliculas.find(() => {
    let pelicula
    titulo === undefined
      ? (pelicula = undefined)
      : (pelicula = peliculas[titulo.length])
    console.log(pelicula)
    return pelicula
  })
}

const pelicula = encontrarPelicula('I')
console.log(pelicula)
