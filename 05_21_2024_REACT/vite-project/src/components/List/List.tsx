import { Item } from "./Item/Item";
import "./List.css";

type Item = {
  name: string;
  isDone: boolean;
  id: number;
};

type Props = {
  items: Item[];
  onToggle: (name: string, id: number) => void;
  filter: "all" | "pending" | "completed";
};

export const List: React.FC<Props> = ({ items, onToggle, filter }) => {
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
          onChange={() => onToggle(item.name, item.id)}
        >
          {item.name}
        </Item>
      ))}
    </ul>
  );
};
