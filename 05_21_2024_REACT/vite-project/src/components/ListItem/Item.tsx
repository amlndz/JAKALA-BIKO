import React from "react";
import styles from "./Item.module.css";

type Props = {
  children: string;
  isDone: boolean;
  onChange: () => void;
};

export const Item: React.FC<Props> = (props) => {
  return (
    <li className={styles["kill-list__item"]}>
      <label className={styles["kill-list__input"]}>
        {props.children}
        <input
          type="checkbox"
          checked={props.isDone}
          onChange={props.onChange}
        />
      </label>
    </li>
  );
};
