/* eslint-disable no-unused-vars */
// Crear una variable
const variableEjemplo = 10 // Número
const cadenaEjemplo = 'Hola' // String
const arregloEjemplo = [1, 2, 3] // Array
const funcionEjemplo = function () {
  console.log('Hola')
} // Función

// Uso de if
if (variableEjemplo > 5) {
  console.log('La variable es mayor que 5')
}

// Crear un objeto
const objetoEjemplo = {
  // Objeto
  nombre: 'Ejemplo', // Propiedad
  // En la propiedad "edad", la clave es "edad" y el valor es 30
  edad: 30,
  // En la propiedad "multiplicar", la clave es "multiplicar" y el valor es una función que multiplica dos números
  multiplicar: function (a, b) {
    return a * b
  },
}

// Función por declaración
function funcionDeclarada() {
  console.log('Esta es una función declarada')
}

// Función de flecha con un solo argumento y paréntesis
const funcionFlechaConParentesis = (a) => {
  console.log('Función de flecha con paréntesis:', a)
}

// Función de flecha con un solo argumento sin paréntesis
const funcionFlechaSinParentesis = (a) => {
  console.log('Función de flecha sin paréntesis:', a)
}

// Función de flecha con múltiples argumentos
const funcionFlechaMultiplesArgs = (a, b, c) => {
  console.log('Función de flecha con múltiples argumentos:', a, b, c)
}

// Función de flecha con llaves
const funcionFlechaConLlaves = (a, b) => {
  const resultado = a + b
  console.log('Función de flecha con llaves:', resultado)
  return resultado
}

// Función de flecha con return implícito
const funcionFlechaReturnImplicito = (a, b) => a + b
