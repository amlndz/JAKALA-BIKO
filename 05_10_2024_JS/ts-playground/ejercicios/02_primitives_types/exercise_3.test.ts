const combinedArray: (string | number)[] = ["pera", 1, "manzana", 2];

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

const fruits = combinedArray.filter((fruit) => typeof fruit === "string");

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

fruits.forEach((fruit) => {
  console.log(typeof fruit === "string");
});
