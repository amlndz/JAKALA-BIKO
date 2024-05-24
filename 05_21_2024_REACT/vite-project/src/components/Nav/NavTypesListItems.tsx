import React from "react";
import styles from "./NavTypesListItems.module.css";

type Props = {
  total: number;
  pending: number;
  completed: number;
  filter: "all" | "pending" | "completed";
  setFilter: (filter: "all" | "pending" | "completed") => void;
};

export const NavTypesListItems: React.FC<Props> = ({
  total,
  pending,
  completed,
  filter,
  setFilter,
}) => {
  return (
    <nav className={styles["tab-menu"]}>
      <ul className={styles["tab-container"]}>
        <li
          className={`${styles["tab"]} ${
            filter === "all" ? styles["tab--active"] : ""
          }`}
          onClick={() => setFilter("all")}
        >
          Todos <span className={styles["circle"]}>{total}</span>
        </li>
        <li
          className={`${styles["tab"]} ${
            filter === "pending" ? styles["tab--active"] : ""
          }`}
          onClick={() => setFilter("pending")}
        >
          Pendientes <span className={styles["circle"]}>{pending}</span>
        </li>
        <li
          className={`${styles["tab"]} ${
            filter === "completed" ? styles["tab--active"] : ""
          }`}
          onClick={() => setFilter("completed")}
        >
          Completados <span className={styles["circle"]}>{completed}</span>
        </li>
      </ul>
    </nav>
  );
};
