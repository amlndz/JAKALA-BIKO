import React, { useState } from "react";
import styles from "./FormComponent.module.css";

type Prop = {
  onClick: () => void;
};

export const FormComponent: React.FC<Prop> = ({ onClick }) => {
  const [nombre, setNombre] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
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
        onClick={onClick}
      >
        Añadir
      </button>
    </form>
  );
};
