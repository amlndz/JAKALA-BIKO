import "./App.css";

// type Props = {
//   num: number;
// };

// export const MySecondComponent: React.FC<Props> = ({ num }) => {
//   return createElement(
//     "li",
//     { className: "my-list-element" },
//     `elemento ${num}`
//   );
// };

// export const MyFirstComponent = () => {
//   return createElement(
//     "ul",
//     { id: "my-list" },
//     <MySecondComponent num={1} />,
//     <MySecondComponent num={2} />,
//     <MySecondComponent num={3} />
//   );
// };

const ItemComponent = () => {
  return <li className="item-class">Elemento Lista</li>;
};

const MyFirstComponent = () => {
  return (
    <ul className="my-list-class">
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
    </ul>
  );
};

export const App = () => {
  return (
    <>
      <h1>MI LISTA</h1>
      <MyFirstComponent />
    </>
  );
};
