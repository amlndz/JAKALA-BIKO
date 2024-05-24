import React, { useState } from "react";
import styles from "./FormComponent.module.css";

export const FormComponent: React.FC = () => {
  const [nombre, setNombre] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleAdd = () => {
    // Add logic to add name to list
  };

  return (
    <form className={styles["form"]}>
      <input
        type="text"
        name="nombre"
        placeholder="Joffrey Baratheon"
        aria-label="Introduce un nombre"
        className={styles["form__input"]}
        value={nombre}
        onChange={handleChange}
      />
      <button
        type="button"
        className={styles["form__button"]}
        onClick={handleAdd}
      >
        Añadir
      </button>
    </form>
  );
};
