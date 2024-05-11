// Tipos primitivos y uso de typeof

if(typeof undefined === 'undefined') {
    console.log('Esto es undefined')
}

if(typeof true === 'boolean') {
    console.log('Esto es booleano')
}

if(typeof 5 === 'number') {
    console.log('Esto es un número')
}

if(typeof 'hola' === 'string') {
    console.log('Esto es una cadena de caracteres')
}

// Array
const frutas: string[] = ['pera', 'manzana', 'piña'];
const frutasError: string[] =  ['pera', 4,  'manzana', 'piña', 1, 2]; //Error de tipado
const frutasYNumeros: (string | number)[] = ['pera', 4,  'manzana', 'piña', 1, 2];

// Tuplas
const frutasYPrecios: [string, number, string, number] = ['manzana', 20, 'pera', 12];
const frutasYPreciosError: [string, number, string, number] = ['manzana', 20, 'pera', 12, 'naranja', 9]; //Error de tipado

// Funciones
type Suma = (valor1: number, valor2: number) => number;

const suma: Suma = (valor1: number, valor2: number) => {
    return valor1 + valor2
} 

const sumaErrorSalida: Suma = (valor1: number, valor2: number) => {
    return (valor1 + valor2).toString() //Error por la salida de la función
} 

const sumaErrorEntrada: Suma = (valor1: string, valor2: number) => { //Error por la entrada de la función
    return valor1 + valor2
} 

// Objetos
type Humano = {
    dni: string;
    nombre: string;
    edad: number;
    estEstudiante: boolean;
    apellidos: string[];
    modeloCoche?: string; //Esto hace referencia a que es optativa
}

const Javi: Humano = { // No da error aunque no tenga modeloCoche
    dni: '12345678S',
    nombre: 'Javi',
    edad: 34,
    estEstudiante: false,
    apellidos: ['garcia', 'perez']
}

const Juana: Humano = { // Si da error porque no tiene apellidos
    dni: '12345678S',
    nombre: 'Javi',
    edad: 34,
    estEstudiante: false,
}

const Maria: Humano = { 
    dni: '12345678S',
    nombre: 'Javi',
    edad: 34,
    estEstudiante: false,
    apellidos: ['garcia', 'perez'],
    tieneHijos: true // Da error porque no aparece en el tipado
}

// Readonly
const Mikel = {
    name: "Mikel",
    age: 23,
    country: "USA"
} as const;

// Unions
type Frutas = 'manzana' | 'pera' | 'naranja';
type FrutosSecos = 'almendras' | 'cacahuetes';

type Alergias = Frutas | FrutosSecos;

const alergia1: Alergias = 'manzana';
const alergia2: Alergias = 'almendras';
const alergiaMal: Alergias = 'polvo'; //Da error porque no está en ninguno de los dos tipados



// Intersection
type Vivienda = {
    direccion: string;
    codigoPostal: string;
    numero: number;
}

type Piso = Vivienda & {
    piso: number;
    puerta: 'Dcha' | 'Izda';
}

const casaDelPueblo: Vivienda = {
    direccion: 'Plaza Principal',
    codigoPostal: '31002',
    numero: 2
}

const apartamento: Piso = {
    direccion: 'Calle mayor',
    codigoPostal: '31002',
    numero: 2,
    piso: 5,
    puerta: 'Dcha'
}