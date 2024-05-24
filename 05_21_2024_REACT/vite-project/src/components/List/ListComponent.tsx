import React from "react";
import { ItemComponent } from "./ItemComponent";
import "./ListComponent.css";

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
        <ItemComponent
          key={item.name}
          isDone={item.isDone}
          onChange={() => onToggle(item.name)}
        >
          {item.name}
        </ItemComponent>
      ))}
    </ul>
  );
};
