import React from "react";
import "./ItemComponent.css";

type Props = {
  children: string;
  isDone: boolean;
  onClick: () => void;
};

export const ItemComponent: React.FC<Props> = (props) => {
  const customClass = props.isDone ? "isDone" : "notDone";

  const customStyle = () =>
    props.isDone ? { color: "aquamarine" } : { color: "tomato" };

  return (
    <li className={customClass} onClick={props.onClick} style={customStyle()}>
      {props.children}
    </li>
  );
};
