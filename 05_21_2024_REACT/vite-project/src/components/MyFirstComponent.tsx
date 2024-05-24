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
    <ul className="kill-list">
      {miArray.map((elemento, index) => (
        <ItemComponent
          key={elemento}
          isDone={index === 0}
          onClick={() => imprimir(index)}
        >
          {elemento}
        </ItemComponent>
      ))}
    </ul>
  );
};
