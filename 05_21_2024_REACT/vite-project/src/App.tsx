import "./App.css";
import { MyFirstComponent } from "./components/MyFisrtComponent.tsx";
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

export const App = () => {
  return (
    <>
      <h1>MI LISTA</h1>
      <MyFirstComponent />
    </>
  );
};
