import { expect, it } from "vitest";

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

export const addTwoNumbers = (a: number, b: number) => {
  return a + b;
};

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
