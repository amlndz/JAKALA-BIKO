/*
 * Por inferencia sabemos que el objeto tiene unas propiedades que son de tipo string, pero no sabemos cual queremos elegir al desconocer el valor.
 * ¿Qué le hace falta al objeto para que nos sugiera los valores?
 */

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

const spaces = {
  xs: "10px",
  s: "14px",
  m: "16px",
  l: "20px",
} as const;

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

const valueA: string = spaces.xs; // Atajo de mostrar sugerencias para verificar el correcto funcionamiento
