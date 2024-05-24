import React from "react";
import styles from "./ItemComponent.module.css";
import "./MyFirstComponent.css";
type Props = {
  children: string;
  isDone: boolean;
  onClick: () => void;
};

export const ItemComponent: React.FC<Props> = (props) => {
  // const customClass = props.isDone ? styles["isDone"] : styles["not-Done"];

  // const customStyle = () =>
  //   props.isDone ? { color: "aquamarine" } : { color: "tomato" };

  return (
    <li className={styles["kill-list__item"]}>
      <label className={styles["kill-list__input"]}>
        {props.children}
        <input type="checkbox" checked={props.isDone} />
      </label>
    </li>
  );
};
