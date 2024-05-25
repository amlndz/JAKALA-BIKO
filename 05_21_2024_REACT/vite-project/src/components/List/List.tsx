import { useState } from "react";
import { Item } from "../ListItem/Item";
import "./List.css";

export const List = () => {
  const miArray = ["Tywin Lannister", "Melisandre", "Beric Dondarrion"];

  const [checked, setChecked] = useState(false);
  return (
    <ul className="kill-list">
      {miArray.map((elemento) => (
        <Item
          key={elemento}
          isDone={checked}
          onChange={() => setChecked(checked ? false : true)}
        >
          {elemento}
        </Item>
      ))}
    </ul>
  );
};
