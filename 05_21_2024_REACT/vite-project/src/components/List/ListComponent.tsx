import { useState } from "react";
import { ItemComponent } from "./ItemComponent";
import "./ListComponent.css";

export const ListComponent = () => {
  const miArray = ["Tywin Lannister", "Melisandre", "Beric Dondarrion"];

  const [checked, setChecked] = useState(false);
  return (
    <ul className="kill-list">
      {miArray.map((elemento) => (
        <ItemComponent
          key={elemento}
          isDone={checked}
          onChange={() => setChecked(checked ? false : true)}
        >
          {elemento}
        </ItemComponent>
      ))}
    </ul>
  );
};
