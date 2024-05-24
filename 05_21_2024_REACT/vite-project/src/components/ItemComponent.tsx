import React from "react";
import styles from "./ItemComponent.module.css";

type Props = {
  children: string;
  isDone: boolean;
  onClick: () => void;
};

export const ItemComponent: React.FC<Props> = (props) => {
  const customClass = props.isDone ? styles["isDone"] : styles["not-Done"];

  const customStyle = () =>
    props.isDone ? { color: "aquamarine" } : { color: "tomato" };

  return (
    <li
      className={`${styles.elementList} + ${customClass}`}
      onClick={props.onClick}
      style={customStyle()}
    >
      {props.children}
    </li>
  );
};
