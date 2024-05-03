const conjuros = [
  {
    nombre: 'Bola de fuego',
    nivel: 3,
    id: 'bola-de-fuego',
    escuela: 'evocación',
  },
  {
    nombre: 'Rayo de hielo',
    nivel: 2,
    id: 'rayo-de-hielo',
    escuela: 'evocación',
  },
  {
    nombre: 'Escudo de fe',
    nivel: 1,
    id: 'escudo-de-fe',
    escuela: 'abjuración',
  },
  {
    nombre: 'Círculo de muerte',
    nivel: 6,
    id: 'circulo-de-muerte',
    escuela: 'abjuración',
  },
  {
    nombre: 'Invisibilidad',
    nivel: 2,
    id: 'invisibilidad',
    escuela: 'abjuración',
  },
  {
    nombre: 'Teletransporte',
    nivel: 5,
    id: 'teletransporte',
    escuela: 'abjuración',
  },
  {
    nombre: 'Curar heridas leves',
    nivel: 1,
    id: 'curar-heridas-leves',
    escuela: 'curación',
  },
  {
    nombre: 'Controlar clima',
    nivel: 7,
    id: 'controlar-clima',
    escuela: 'curación',
  },
  { nombre: 'Levitar', nivel: 2, id: 'levitar', escuela: 'curación' },
  {
    nombre: 'Rayo abrasador',
    nivel: 2,
    id: 'rayo-abrasador',
    escuela: 'evocación',
  },
]

const encontrarConjuro = ({ nivel, escuela }) => {
  return conjuros
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
}

describe('Array functions', () => {
  it('debería encontrar los conjuros de nivel 2 de la escuela de abjuración', () => {
    const conjurosEncontrados = encontrarConjuro({
      nivel: 2,
      escuela: 'evocación',
    })
    expect(conjurosEncontrados.map((conjuro) => conjuro.nombre)).toEqual([
      'Rayo de hielo',
      'Rayo abrasador',
    ])
  })
  it('debería encontrar todos los conjuros de nivel 1', () => {
    const conjurosEncontrados = encontrarConjuro({
      nivel: 1,
    })
    expect(conjurosEncontrados.map((conjuro) => conjuro.nombre)).toEqual([
      'Escudo de fe',
      'Curar heridas leves',
    ])
  })
  it('debería encontrar todos los conjuros de la escuela de abjuración', () => {
    const conjurosEncontrados = encontrarConjuro({
      escuela: 'abjuración',
    })
    expect(conjurosEncontrados.map((conjuro) => conjuro.nombre)).toEqual([
      'Escudo de fe',
      'Círculo de muerte',
      'Invisibilidad',
      'Teletransporte',
    ])
  })
})
