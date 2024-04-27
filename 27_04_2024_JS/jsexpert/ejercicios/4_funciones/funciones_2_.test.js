/* eslint-disable no-unused-vars */

const clientes = {
  juan: {
    nombre: "Juan",
    apellido: "Gómez",
    edad: 34,
    email: "juan@example.com",
    pedidos: [
      { id: 3, producto: "Zapatos", precio: 60 },
      { id: 1, producto: "Camiseta", precio: 20 },
      { id: 2, producto: "Pantalón", precio: 40 }
    ],
    localizacion: {
      ciudad: "Madrid",
      country_code: "es"
    }
  },
  pedro: {
    nombre: "Pedro",
    apellido: "Pérez",
    edad: 28,
    email: "pedro@example.com",
    pedidos: [
      { id: 1, producto: "Camiseta", precio: 20 },
      { id: 3, producto: "Zapatos", precio: 60 },
      { id: 4, producto: "Pantalón", precio: 40 }
    ],
    localizacion: {
      ciudad: "Buenos Aires",
      country_code: "ar"
    }
  },
  maria: {
    nombre: "María",
    apellido: "López",
    edad: 32,
    email: "maria@example.com",
    pedidos: [
      { id: 1, producto: "Camiseta", precio: 20 },
      { id: 2, producto: "Pantalón", precio: 40 },
      { id: 3, producto: "Zapatos", precio: 60 }
    ],
    localizacion: {
      ciudad: "Ciudad de México",
      country_code: "mx"
    }
  }, 
}

const countries = {
  es: "España",
  ar: "Argentina",
  mx: "México"
}

let getNombreCompletoEnMayusculas;
let getNombreDePais;
let getNumeroDePedidos;

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//


//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

function getClienteFormateado(cliente) {
  const nombre = getNombreCompletoEnMayusculas(cliente);
  const pais = getNombreDePais(cliente);
  const pedidos = getNumeroDePedidos(cliente);
  return `${nombre}, ${pedidos} pedidos, ${pais}`;
}

it("obtenerDatosDeClienteFormateados debería devolver un string con los datos del cliente", () => {
  expect(getClienteFormateado(clientes.juan)).toBe("JUAN GÓMEZ, 3 pedidos, España");
  expect(getClienteFormateado(clientes.pedro)).toBe("PEDRO PÉREZ, 3 pedidos, Argentina");
  expect(getClienteFormateado(clientes.maria)).toBe("MARÍA LÓPEZ, 3 pedidos, México");
});
