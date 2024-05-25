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

type Item = {
  name: string;
  isDone: boolean;
};

type Props = {
  items: Item[];
  onToggle: (name: string) => void;
  filter: "all" | "pending" | "completed";
};

export const ListComponent: React.FC<Props> = ({ items, onToggle, filter }) => {
  const filteredItems = items.filter((item) => {
    if (filter === "pending") return !item.isDone;
    if (filter === "completed") return item.isDone;
    return true;
  });

  return (
    <ul className="kill-list">
      {filteredItems.map((item) => (
        <Item
          key={item.name}
          isDone={item.isDone}
          onChange={() => onToggle(item.name)}
        >
          {item.name}
        </Item>
      ))}
    </ul>
  );
};
