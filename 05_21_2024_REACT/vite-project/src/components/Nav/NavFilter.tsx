import React from "react";
import styles from "./NavFilter.module.css";

type Props = {
  count: number;
  thisFilter: "all" | "pending" | "completed";
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
      onClick={() => setFilter(thisFilter)}
    >
      {thisFilter} <span className={styles["circle"]}>{count}</span>
    </li>
  );
};
