import styles from "./NavTypesListItems.module.css";

export const NavTypesListItems = () => {
  return (
    <nav className={styles["tab-menu"]}>
      <ul className={styles["tab-container"]}>
        <li className={styles["tab tab--active"]}>
          Todos <span className={styles["circle"]}>3</span>
        </li>
        <li className={styles["tab"]}>
          Pendientes <span className={styles["circle"]}>2</span>
        </li>
        <li className={styles["tab"]}>
          Completados <span className={styles["circle"]}>1</span>
        </li>
      </ul>
    </nav>
  );
};
