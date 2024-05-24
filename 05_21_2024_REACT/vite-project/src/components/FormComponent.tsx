import React, { useState } from "react";
import styles from "./FormComponent.module.css";

type Props = {
  onAdd: (name: string) => void;
};

export const FormComponent: React.FC<Props> = ({ onAdd }) => {
  const [nombre, setNombre] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleAdd = () => {
    if (nombre.trim()) {
      onAdd(nombre);
      setNombre("");
    }
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
