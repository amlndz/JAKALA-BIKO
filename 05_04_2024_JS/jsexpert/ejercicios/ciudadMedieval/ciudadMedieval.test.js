import {
  calcularConsumoDiarioDeAlimentos,
  medievalCity,
  calcularProduccionDiaria,
  calcularDiasDeSupervivencia,
  simularInvierno,
} from './ciudadMedieval'

describe('Ciudad medieval', () => {
  it('calcularConsumoDiarioDeAlimentos debería calcular correctamente el consumo total de alimentos por día', () => {
    const result = calcularConsumoDiarioDeAlimentos(medievalCity)
    expect(result.consumoTotalAlimentos).toBe(320)
  })

  it('calcularProduccionDiaria debería calcular la producción diaria de recursos', () => {
    const produccionDiaria = calcularProduccionDiaria(medievalCity)
    expect(produccionDiaria.madera).toBe(280)
    expect(produccionDiaria.hierro).toBe(140)
    expect(produccionDiaria.oro).toBe(190)
    expect(produccionDiaria.alimentos).toBe(560)
  })

  it('calculateSurvivalDays debería calcular los días de supervivencia sin producción', () => {
    const survivalDays = calcularDiasDeSupervivencia(medievalCity)
    expect(survivalDays).toBeGreaterThan(0)
  })

  it('simularInvierno debería calcular los recursos restantes tras los días pasados teniendo en cuenta que en invierno se genera la mitad', () => {
    const simulacionInvierno = simularInvierno(medievalCity, 90)
    expect(simulacionInvierno.diasSupervivencia).toBe(7)
    expect(simulacionInvierno.recursosRestantes.madera).toBe(13600)
    expect(simulacionInvierno.recursosRestantes.hierro).toBe(7100)
    expect(simulacionInvierno.recursosRestantes.oro).toBe(9050)
    expect(simulacionInvierno.recursosRestantes.alimentos).toBe(2400)
  })
})
