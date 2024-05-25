import "./App.css";
import { List } from "./components/List/List";
import { NavFilterList } from "./components/Nav/NavFilterList";
import { FormComponent } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
  isDone: boolean;
};

export const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");

  const onClickAtAddItem = (name: string) => {
    const newItem: Item = {
      id: Math.random() * 100,
      name: name,
      isDone: false,
    };
    setItems((preItem) => preItem.concat(newItem));
    // setItems([...items, newItem]);
  };

  const handleToggleItem = (name: string, id: number) => {
    setItems((preItem) =>
      preItem.map((item) =>
        item.name === name && item.id === id
          ? { id: id, name: name, isDone: !item.isDone }
          : item
      )
    );
  };

  const total = items.length;
  const pending = items.filter((item) => !item.isDone).length;
  const done = items.filter((item) => item.isDone).length;

  return (
    <>
      <Header />
      <main className="main main--thin">
        <section className="section">
          <h1 className="title">Mi lista de nombres</h1>
          <FormComponent addItem={onClickAtAddItem} />
          <NavFilterList
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
