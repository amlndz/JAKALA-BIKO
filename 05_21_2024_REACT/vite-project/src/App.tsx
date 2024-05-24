import "./App.css";
import { ListComponent } from "./components/List/ListComponent";
import { NavTypesListItems } from "./components/Nav/NavTypesListItems";
import { FormComponent } from "./components/FormComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";

export const App = () => {
  return (
    <>
      <HeaderComponent />
      <main className="main main--thin">
        <section className="section">
          <h1 className="title">Mi lista de nombres</h1>
          <FormComponent />
          <NavTypesListItems />
          <ListComponent />
        </section>
      </main>
      <FooterComponent />
    </>
  );
};
