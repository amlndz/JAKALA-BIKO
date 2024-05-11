// Asignación de tipos a una variable
const variableEjemplo: number = 10;
const cadenaEjemplo: string = "hola";
const arrayEjemplo: number[] = [1, 2, 3];

// Para saber el tipo de una variable
let otraVariable = "Prueba";

type nuevoTipo = typeof otraVariable;

// Opciones de tipado de una función
const funcionEjemplo = (arg1: string): string => {
  return `${arg1}`;
};

type FuncionEjemplo = (arg: string) => string;

const funcionEjemploBis: FuncionEjemplo = (arg1) => {
  return `${arg1}`;
};

// Tipado de objetos
type Libro = {
  titulo: string;
  autor: string;
  paginas: number;
};

const libro: Libro = {
  titulo: "Lorem ipsum",
  autor: "Lorem ipsum",
  paginas: 200,
};

// Uniones
type Dia =
  | "Lunes"
  | "Martes"
  | "Miercoles"
  | "Jueves"
  | "Viernes"
  | "Sabado"
  | "Domingo";

// Intersecciones
type LibroDeTexto = Libro & {
  enseñanza: true;
};

// Exclusiones de elementos de un tipo
type LibroAnonimo = Omit<Libro, "autor">;
type DiaEntreSemana = Exclude<Dia, "Sabado" | "Domingo">;

// Enums
// ! Generalmente lo que se quiera hacer con un enum se puede hacer con una union de literales
// ! Hay que tener cuidado al declararlo para no tener comportamientos inesperados
enum Puesto {
  primero,
  segundo,
}

enum Variantes {
  light = "claro",
  dark = "oscuro",
}

// Sacar las opcioens de las claves de un tipo
type OpcionesVariantes = keyof typeof Variantes;

// Sacar los valores de las claves de un objeto
type ValoresVariantes = `${Variantes}`;

// Genericos
type GenericNumber<Type> = {
  zeroValue: Type;
  add: (x: Type, y: Type) => Type;
};

let stringNumeric: GenericNumber<string> = {
  zeroValue: "0",
  add: (a, b) => a + b,
};
