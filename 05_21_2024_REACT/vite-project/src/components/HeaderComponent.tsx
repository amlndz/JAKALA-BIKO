import React from "react";
import styles from "./HeaderComponent.module.css";

export const HeaderComponent: React.FC = () => {
  return (
    <header className={styles["topbar"]}>
      <nav className={styles["menu"]}>
        <ul className={styles["menu-list"]}>
          <li>
            <a href="./index.html" className={styles["menu-list__item"]}>
              Inicio
            </a>
          </li>
          <li>
            <a href="./list.html" className={styles["menu-list__item"]}>
              Lista
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
