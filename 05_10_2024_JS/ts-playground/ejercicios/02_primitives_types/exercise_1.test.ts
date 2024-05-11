/* 
    DECLARANDO VARIABLES
    Parece que este código falla... ¿Qué está pasando?

    Más información: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

    --- Resultado esperado por consola
    5    
 */

import { expect, it } from "vitest";
import { aN } from "vitest/dist/reporters-yx5ZTtEV.js";

let aNumber: number;

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

aNumber = Number("5");

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

it("should return typof aNumber as number", () => {
  expect(typeof aNumber).toBe("number");
});
