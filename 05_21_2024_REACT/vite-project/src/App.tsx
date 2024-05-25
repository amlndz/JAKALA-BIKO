import "./App.css";
import { List } from "./components/List/List";
import { NavTypesListItems } from "./components/Nav/NavTypesListItems";
import { FormComponent } from "./components/FormComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { Footer } from "./components/Footer";
import { useState } from "react";

type Item = {
  name: string;
  isDone: boolean;
};

export const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");

  const handleToggleItem = (name: string) => {
    setItems(
      items.map((item) =>
        item.name === name ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const total = items.length;
  const pending = items.filter((item) => !item.isDone).length;
  const done = items.filter((item) => item.isDone).length;

  return (
    <>
      <HeaderComponent />
      <main className="main main--thin">
        <section className="section">
          <h1 className="title">Mi lista de nombres</h1>
          <FormComponent />
          <NavTypesListItems
            total={total}
            pending={pending}
            completed={done}
            filter={filter}
            setFilter={setFilter}
          />
          <List items={items} onToggle={handleToggleItem} filter={filter} />
        </section>
      </main>
      <Footer />
    </>
  );
};
