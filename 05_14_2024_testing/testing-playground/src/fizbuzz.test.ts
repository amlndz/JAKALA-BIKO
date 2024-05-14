import { fizzBuzz } from "./fizzBuzz.ts";

describe(`Si el numero es múltipo de 3. debe devolver "Fizz"`, () => {
  it("Dado una cadena de numeros sin numeros multiplos de 3 ni de 5 recibe la cadena tal cual", () => {
    expect(fizzBuzz([1, 2, 4])).toBe("1, 2, 4");
  });
  it("Dado una cadena de numeros con un numero multiplo de 3 devuelve la cadena sustituyendo el numero por Fizz", () => {
    expect(fizzBuzz([3])).toBe("Fizz");
  });
  it("Dado una cadena de numeros con un numero multiplo de 5 devuelve la cadena sustituyendo el numero por Buzz", () => {
    expect(fizzBuzz([5])).toBe("Buzz");
  });
  it("Dado una cadena vacia devuelve una cadena vacia", () => {
    expect(fizzBuzz([])).toBe("");
  });
  it("Dado una cadena de numeros que contiene un numero multiplo de 3 y de 5 lo sustituye por FizzBuzz", () => {
    expect(fizzBuzz([30])).toBe("FizzBuzz");
  });
  it("Dado una cadena que contiene el numero 0 devuelve 0", () => {
    expect(fizzBuzz([0])).toBe("0");
  });
});
