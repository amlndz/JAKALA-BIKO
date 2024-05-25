import React from "react";
import styles from "./NavFilter.module.css";

type Props = {
  count: number;
  thisFilter: string;
  filter: "all" | "pending" | "completed";
  setFilter: (filter: "all" | "pending" | "completed") => void;
};

export const NavFilter: React.FC<Props> = ({
  count,
  thisFilter,
  filter,
  setFilter,
}) => {
  return (
    <li
      className={`${styles["tab"]} ${
        filter === thisFilter ? styles["tab--active"] : ""
      }`}
      onClick={() => setFilter("all")}
    >
      Todos <span className={styles["circle"]}>{count}</span>
    </li>
  );
};