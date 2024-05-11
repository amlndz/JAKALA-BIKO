import { expect, it } from "vitest";

let testValue: any = 42;
let result: string;

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

if (typeof testValue === "number") {
  result = "It is a number";
} else {
  result = "It is not a number";
}

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

// Test cases for the type guard function

it("should return 'It is a number!' if passed argument is a number", () => {
  expect(result).toBe("It is a number");
});
