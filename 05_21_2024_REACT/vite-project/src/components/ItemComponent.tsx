export const ItemComponent = () => {
  const miArray = [
    "elemento 1",
    "elemento 2",
    "elemento 3",
    "elemento 4",
    "elemento 5",
  ];

  return miArray.map((elemento, key) => (
    <li className="item-class" key={key}>
      {elemento}
    </li>
  ));
};
