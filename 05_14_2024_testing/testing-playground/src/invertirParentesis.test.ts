import { invertirParentesis } from "./invertirParentesis";

describe("invertirParentesis", () => {
  it("Dada una cadena vacia devuelve una cadena vacia ", () => {
    const result = invertirParentesis("");
    expect(result).toBe("");
  });
  it("Dada una cadena sin parentesis devuelve la misma cadena", () => {
    const result = invertirParentesis("Hello world!");
    expect(result).toBe("Hello world!");
  });
  it("Dado solo un parentesis el codigo devuelve una cadena vacia", () => {
    const result = invertirParentesis("( )");
    expect(result).toBe(" ");
  });
  it("Dado un mensaje con un solo parentesis invierte su contenido", () => {
    const result = invertirParentesis("Hello (dlrow), yuju!");
    expect(result).toBe("Hello world, yuju!");
  });
  it("Dado un mensaje con un solo parentesis invierte su contenido", () => {
    const result = invertirParentesis("Hello ((world)), yuju!");
    expect(result).toBe("Hello world, yuju!");
  });
});
