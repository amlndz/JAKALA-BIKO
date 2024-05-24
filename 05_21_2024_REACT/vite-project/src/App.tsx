import "./App.css";
import { ListComponent } from "./components/ListComponent";
import { NavTypesListItems } from "./components/NavTypesListItems";
export const App = () => {
  return (
    <>
      <h1>MI LISTA DE NOMBRES</h1>
      <NavTypesListItems />
      <ListComponent />
    </>
  );
};
