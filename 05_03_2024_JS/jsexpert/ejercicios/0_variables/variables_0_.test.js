
//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
let edad = 34;

console.log(`Edad actual: ${edad}`);

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

// esto es un try catch, me pregunto si podría darnos alguna pista sobre lo que está pasando 🤔
try{

  // 👀
  edad = edad + 1;

}catch{}

it('la edad debe ser 35', () => {
  expect(edad).toBe(35);
})

