import { ModuleNode } from "vite";

export const invertirParentesis = (message: string): string => {
  let newMessage: string = "";
  let messageReverse: string = "";
  let openParentesis: boolean = false;
  let contadorOpen: number = 0;
  for (let i = 0; i < message.length; i++) {
    if (message.charAt(i) === "(") {
      openParentesis = true;
    }

    if (!openParentesis && message.charAt(i) !== ")") {
      newMessage += message.charAt(i);
    }

    if (
      openParentesis &&
      message.charAt(i) !== ")" &&
      message.charAt(i) !== "("
    ) {
      messageReverse += message.charAt(i);
    }

    if (message.charAt(i) === ")") {
      newMessage += messageReverse.split("").reverse().join("");
      messageReverse = "";
      openParentesis = false;
    }
  }
  return newMessage;
};


(hola(mundo)) - (holaodnum) - mundoaloh


aloh mundo

odnum hola

