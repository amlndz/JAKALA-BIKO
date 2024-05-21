import { ItemComponent } from "./ItemComponent";

export const MyFirstComponent = () => {
  const miArray = [
    "elemento 1",
    "elemento 2",
    "elemento 3",
    "elemento 4",
    "elemento 5",
  ];
  return (
    <ul className="my-list-class">
      {miArray.map((elemento) => (
        <ItemComponent key={elemento} isDone={true}>
          {elemento}
        </ItemComponent>
      ))}
    </ul>
  );
};
