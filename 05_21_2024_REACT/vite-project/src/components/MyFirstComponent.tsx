import { ItemComponent } from "./ItemComponent";

export const MyFirstComponent = () => {
  const miArray = [
    "elemento 1",
    "elemento 2",
    "elemento 3",
    "elemento 4",
    "elemento 5",
  ];
  const imprimir = (ItemIndex: number) => {
    console.log("Item clickado:", ItemIndex);
  };
  return (
    <ul className="my-list-class">
      {miArray.map((elemento, index) => (
        <ItemComponent
          key={elemento}
          isDone={true}
          onClick={() => imprimir(index)}
        >
          {elemento}
        </ItemComponent>
      ))}
    </ul>
  );
};
