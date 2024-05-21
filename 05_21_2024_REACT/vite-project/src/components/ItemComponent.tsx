import React from "react";

type Props = {
  children: string;
  key: string;
  isDone: boolean;
};

export const ItemComponent: React.FC<Props> = (props) => {
  const customClass = props.isDone ? "isDone" : "";

  const imprimir = () => {
    console.log(`Funciona: ${props.children}`);
  };

  return (
    <li className={customClass} onClick={imprimir}>
      {props.children}
    </li>
  );
};
