const miArray = [
  {
    nombre: 'Juan',
    edad: 30,
    profesion: 'abogado',
  },
  {
    nombre: 'Pedro',
    edad: 25,
    profesion: 'ingeniero',
  },
  {
    nombre: 'Ana',
    edad: 45,
    profesion: 'medico',
  },
]

const miPosibleNombre = miArray
  .map((persona) => persona.nombre)
  .filter((nombre) => nombre.length > 3)
  .find((nombre) => nombre.includes('a'))
  ?.toUpperCase()

miPosibleNombre
