import "./App.css";
import { List } from "./components/List/List";
import { NavTypesListItems } from "./components/Nav/NavTypesListItems";
import { FormComponent } from "./components/FormComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <HeaderComponent />
      <main className="main main--thin">
        <section className="section">
          <h1 className="title">Mi lista de nombres</h1>
          <FormComponent />
          <NavTypesListItems />
          <List />
        </section>
      </main>
      <Footer />
    </>
  );
};
