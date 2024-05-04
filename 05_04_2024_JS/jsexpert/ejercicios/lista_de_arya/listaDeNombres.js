let boton = document.getElementById('addButton')
let listaNombres = document.getElementById('nameList')
let inputNombre
// let todosList = []
// let pendientesList = []
// let completadosList = []
// const personaje = { nombre: 'Arya', completed: false }
const array = []
let li
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
  li = document.createElement('li')
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
      mostrarLista(element)
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
  totalNamesSpan.innerHTML = array.length
}

const contarPendientes = () => {
  pendientesTotal = array.filter((personaje) => !personaje.completado)
  pendingNamesSpan.innerHTML = pendientesTotal.length
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

const esActivo = (filtro) => {
  if (!filtro.classList.contains('filter-button-disabled')) 
    return true
}
const introducirPersonaje = (element) => {
  li = document.createElement('li')
    li.textContent = element.nombre
    li.className = 'list-item'
    input = document.createElement('input')
    input.type = 'checkbox'
    input.className = 'checkbox'
    if (element.completado) input.setAttribute('checked', true)
    input.onclick = presionarCheckbox
    li.appendChild(input)
    listaNombres.appendChild(li)
}

const mostrarLista = (lista) => {
  while (listaNombres.firstChild) {
    listaNombres.removeChild(listaNombres.firstChild);
  }
  
  array.forEach((element) => {
    if (esActivo(totalNames) ||
        (esActivo(pendingNames) && !element.completado) ||
        (esActivo(completedNames) && element.completado)) {
      introducirPersonaje(element);
    }
  });
}



const marcarCompletado = (task) => {
  array.forEach((element) => { if (element.nombre === task) element.completado = true})
  contar()
  mostrarLista()
}

const maracarNOCompletado = (task) => {
  array.forEach((element) => { if (element.nombre === task) element.completado = false})
  contar()
  mostrarLista()
}
const presionarCheckbox = (e) => {
  if (e.target.checked === true) {
    marcarCompletado(e.target.parentNode.textContent)
    console.log(e.target.parentNode.textContent)
  } else {
    maracarNOCompletado(e.target.parentNode.textContent)
  }
}
