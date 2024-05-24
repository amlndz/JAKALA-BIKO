import { ItemComponent } from "./ItemComponent";
import "./ListComponent.css";

export const ListComponent = () => {
  const miArray = ["Tywin Lannister", "Melisandre", "Beric Dondarrion"];
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
