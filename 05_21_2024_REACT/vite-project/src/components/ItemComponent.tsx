import React from "react";

type Props = {
  children: string;
  isDone: boolean;
  onClick: () => void;
};

export const ItemComponent: React.FC<Props> = (props) => {
  const customClass = props.isDone ? "isDone" : "";

  return (
    <li className={customClass} onClick={props.onClick}>
      {props.children}
    </li>
  );
};
