import { ItemComponent } from "./ItemComponent";
("./ItemComponent.tsx");

export const MyFirstComponent = () => {
  return (
    <ul className="my-list-class">
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
    </ul>
  );
};
