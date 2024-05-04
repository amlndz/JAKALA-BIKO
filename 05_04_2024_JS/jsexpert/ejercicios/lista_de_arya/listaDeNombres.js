let boton = document.getElementById('addButton')
let listaNombres = document.getElementById('nameList')
let inputNombre
// let todosList = []
// let pendientesList = []
// let completadosList = []
// const personaje = { nombre: 'Arya', completed: false }
const array = []

let inputNombreSpace
let checkboxes
let input
const validarNombre = () => {
  inputNombreSpace = document.getElementById('nameInput')
  inputNombre = inputNombreSpace.value
  inputNombre !== ''
    ? introducirNombre(inputNombre)
    : alert('ingresa un nombre')
}

const introducirNombre = (inputNombre) => {
  let li = document.createElement('li')
  li.textContent = inputNombre
  li.className = 'list-item'
  input = document.createElement('input')
  input.type = 'checkbox'
  input.className = 'checkbox'
  input.onclick = presionarCheckbox
  li.appendChild(input)
  listaNombres.appendChild(li)
  array.push({ nombre: inputNombre, completed: false })
  //   todosList.push(inputNombre)
  //   pendientesList.push(inputNombre)
  contar()
  inputNombreSpace.value = ''
  console.log(checkboxes)
}

totalNames.addEventListener('click', () => marcarActivo(totalNames))

boton.addEventListener('click', validarNombre)

totalNames = document.getElementById('totalNames')
pendingNames = document.getElementById('pendingNames')
completedNames = document.getElementById('completedNames')

pendingNamesSpan = document.querySelector('#pendingNames span')
totalNamesSpan = document.querySelector('#totalNames span')
completedNamesSpan = document.querySelector('#completedNames span')

const filtrosListas = [totalNames, pendingNames, completedNames]

// gatito muerto
const marcarActivo = (activo) => {
  console.log(activo)
  filtrosListas.forEach((element) => {
    if (element === activo) {
      console.log('dentro del if')
      activo.classList.remove('filter-button-disabled')
      element === totalNames
        ? (lista = todosList)
        : element === pendingNames
        ? (lista = pendientesList)
        : (lista = completadosList)
      console.log(lista)
      mostrarLista(lista)
    } else {
      element.classList.add('filter-button-disabled')
    }
  })
}

totalNames.addEventListener('click', () => marcarActivo(totalNames))
pendingNames.addEventListener('click', () => marcarActivo(pendingNames))
completedNames.addEventListener('click', () => marcarActivo(completedNames))

let totalCounter = totalNamesSpan.innerHTML
let pendientesTotal = totalNamesSpan.innerHTML
let completadosTotal = completedNamesSpan.innerHTML

const contarTotal = () => {
  totalCounter = totalNamesSpan.innerHTML = totalCounter
}

const contarPendientes = () => {
  completadosTotal = array.filter((personaje) => !personaje.completado)
  pendingNamesSpan.innerHTML = pendientesTotal
}

const contarCompletados = () => {
  completadosTotal = array.filter((personaje) => personaje.completado)
  completedNamesSpan.innerHTML = completadosTotal.length
}
const contar = () => {
  contarTotal()
  contarPendientes()
  contarCompletados()
}

const mostrarLista = (lista) => {
  while (listaNombres.hasChildNodes())
    listaNombres.removeChild(listaNombres.firstChild)

  lista.forEach((elemento) => {
    let li = document.createElement('li')
    li.textContent = elemento
    li.className = 'list-item'
    input = document.createElement('input')
    input.type = 'checkbox'
    input.className = 'checkbox'
    input.onclick = presionarCheckbox
    input.setAttribute(onclick, () => console.log('hola'))
    li.appendChild(input)
    listaNombres.appendChild(li)
  })
}
const eliminarElemento = (listElement, elemento) => {
  return listElement.filter((pendiente) => pendiente !== elemento)
}

const marcarCompletado = (task) => {
  completadosList.push(task)
  pendientesList = eliminarElemento(pendientesList, task)
  contar()
}

const maracarNOCompletado = (task) => {
  pendientesList.push(task)
  completadosList = eliminarElemento(completadosList, task)
  contar()
}
const presionarCheckbox = (e) => {
  if (e.target.checked === true) {
    marcarCompletado(e.target.parentNode.textContent)
    console.log(e.target.parentNode.textContent)
  } else {
    maracarNOCompletado(e.target.parentNode.textContent)
  }
}
