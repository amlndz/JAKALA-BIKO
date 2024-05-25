import React, { useState } from "react";
import styles from "./Form.module.css";

type Props = {
  addItem: (name: string) => void;
};

export const FormComponent: React.FC<Props> = ({ addItem }) => {
  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onClickAtAddItem = () => {
    if (name !== "") {
      addItem(name);
      setName("");
    } else {
      alert("Debes introducir un nombre");
    }
  };

  return (
    <form className={styles["form"]} onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Joffrey Baratheon"
        aria-label="Introduce un nombre"
        className={styles["form__input"]}
        value={name}
        onChange={handleChange}
      />
      <button
        type="submit"
        className={styles["form__button"]}
        onClick={onClickAtAddItem}
      >
        Añadir
      </button>
    </form>
  );
};
