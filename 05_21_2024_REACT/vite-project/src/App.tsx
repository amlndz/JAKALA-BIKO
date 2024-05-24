import { useState } from "react";
import "./App.css";
import { ListComponent } from "./components/List/ListComponent";
import { NavTypesListItems } from "./components/Nav/NavTypesListItems";
import { FormComponent } from "./components/FormComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";

type Item = {
  name: string;
  isDone: boolean;
};

export const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");

  const handleAddItem = (name: string) => {
    setItems([...items, { name, isDone: false }]);
  };

  const handleToggleItem = (name: string) => {
    setItems(
      items.map((item) =>
        item.name === name ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const total = items.length;
  const pending = items.filter((item) => !item.isDone).length;
  const completed = items.filter((item) => item.isDone).length;

  return (
    <>
      <HeaderComponent />
      <main className="main main--thin">
        <section className="section">
          <h1 className="title">Mi lista de nombres</h1>
          <FormComponent onAdd={handleAddItem} />
          <NavTypesListItems
            total={total}
            pending={pending}
            completed={completed}
            filter={filter}
            setFilter={setFilter}
          />
          <ListComponent
            items={items}
            onToggle={handleToggleItem}
            filter={filter}
          />
        </section>
      </main>
      <FooterComponent />
    </>
  );
};
