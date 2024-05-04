const notificationService = {
  enviarNotificacion: (libro) => {
    console.log(`El paquete con id ${libro.id} ha sido enviado`)
  },
}

const databaseService = {
  marcarComoEnviado: (libro) => {
    console.log(`El paquete con id ${libro.id} ha sido marcado como enviado`)
  },
}

const gestionarPaquetes = (libros) => {
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
}

describe('Array functions', () => {
  it('Necesitamos enviar y marcar como enviado los libros que sean ', () => {
    vi.spyOn(notificationService, 'enviarNotificacion')
    vi.spyOn(databaseService, 'marcarComoEnviado')
    gestionarPaquetes([
      { id: 1, contenido: 'El Apellido de la Brisa' },
      { id: 2, contenido: 'El Acuerdo de las Fragancias' },
      { id: 3, contenido: 'Memorias de Irún' },
      { id: 4, contenido: 'La Biblioteca de las Tempestades' },
      { id: 5, contenido: 'El Muchacho de los Pendientes' },
    ])
    expect(notificationService.enviarNotificacion).toHaveBeenCalledTimes(5)
    expect(databaseService.marcarComoEnviado).toHaveBeenCalledTimes(5)
  })
})
