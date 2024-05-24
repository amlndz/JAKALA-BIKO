import React from "react";
import styles from "./FooterComponent.module.css";

export const FooterComponent: React.FC = () => {
  return (
    <footer className={styles["footer"]}>
      <p>FOOTER</p>
    </footer>
  );
};
