function sumarArrays(array1, array2) {
  const result = [
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  ];
  return result;
}

describe("Spread Operator", () => {
  it("la función sumarArrays debería devolver un array con los elementos de los dos arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const result = sumarArrays(array1, array2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
