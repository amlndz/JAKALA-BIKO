// Obtener un elemento por su ID
// Ejemplo: Obtener un contenedor por su ID
const container = document.getElementById('containerId')

// Obtener un elemento usando un selector CSS
// Ejemplo: Obtener el primer elemento con la clase 'active'
const activeElement = document.querySelector('.active')

// Crear un nuevo elemento HTML
// Ejemplo: Crear un nuevo elemento div
const newDiv = document.createElement('div')

// Establecer el tipo de un input
// Ejemplo: Crear un input de tipo texto
const inputText = document.createElement('input')
inputText.type = 'text'

// Añadir un evento a un elemento
// Ejemplo: Añadir evento click que ejecuta una función
const button = document.createElement('button')
button.onclick = function () {
  console.log('Clicked!')
}

// Modificar el contenido de texto de un elemento
// Ejemplo: Establecer el texto de un div
newDiv.textContent = 'Hello World!'

// Añadir un elemento hijo a un elemento padre
// Ejemplo: Añadir un div a un contenedor
container.append(newDiv)

// Añadir una clase CSS a un elemento
// Ejemplo: Añadir la clase 'new-class' a un div
newDiv.className = 'new-class'

// Añadir un elemento al DOM
// Ejemplo: Añadir un div al cuerpo del documento
document.body.appendChild(newDiv)

// Limpiar el valor de un input
// Ejemplo: Limpiar un input de texto
inputText.value = ''

// Filtrar elementos basados en una condición
// Ejemplo: Filtrar divs que contienen la clase 'active'
const activeDivs = Array.from(document.querySelectorAll('div')).filter((div) =>
  div.classList.contains('active')
)

// Cambiar el estilo de un elemento
// Ejemplo: Cambiar el color de fondo de un div
newDiv.style.backgroundColor = 'blue'

// Alternar una clase en un elemento basado en una condición
// Ejemplo: Alternar la clase 'hidden' en un div basado en una condición
newDiv.classList.toggle('hidden', someCondition)

// Añadir un evento a un elemento que escucha por clicks
// Ejemplo: Ejecutar una función cuando se hace click en un botón
button.addEventListener('click', function () {
  alert('Button clicked!')
})

// Añadir un evento que responde a teclas específicas
// Ejemplo: Ejecutar una función cuando se presiona la tecla 'Enter'
document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    console.log('Enter key pressed!')
  }
})

// Ejemplos más complejos
// Ejemplo: Crear un nuevo párrafo y añadirlo al cuerpo del documento con texto y una clase
const newParagraph = document.createElement('p')
newParagraph.textContent = 'Este es un nuevo párrafo'
newParagraph.className = 'text-class'
document.body.appendChild(newParagraph)

// Ejemplo: Crear un botón, asignarle un evento de click que cambia su texto y añadirlo al cuerpo del documento
const newButton = document.createElement('button')
newButton.textContent = 'Click me!'
newButton.addEventListener('click', function () {
  newButton.textContent = 'Clicked!'
})
document.body.appendChild(newButton)

// Ejemplo: Crear un input de tipo texto, limpiar su valor al hacer focus y añadirlo al cuerpo del documento
const newInput = document.createElement('input')
newInput.type = 'text'
newInput.value = 'Escribe aquí'
newInput.addEventListener('focus', function () {
  newInput.value = ''
})
document.body.appendChild(newInput)

// Ejemplo: Crear una lista de elementos y filtrar aquellos que contengan la clase 'active', luego cambiar su color de fondo
const itemList = document.createElement('ul')
for (let i = 0; i < 5; i++) {
  const item = document.createElement('li')
  item.textContent = `Item ${i + 1}`
  if (i % 2 === 0) {
    // Añadir clase 'active' a elementos en posiciones pares
    item.classList.add('active')
  }
  itemList.appendChild(item)
}
document.body.appendChild(itemList)

const activeItems = Array.from(itemList.querySelectorAll('li')).filter((item) =>
  item.classList.contains('active')
)
activeItems.forEach((item) => {
  item.style.backgroundColor = 'green'
})

// Ejemplo: Alternar la clase 'highlight' en todos los elementos 'li' cuando se hace click en ellos
itemList.querySelectorAll('li').forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('highlight')
  })
})
