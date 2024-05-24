import React from "react";

type Props = {
  children: string;
  isDone: boolean;
  onClick: () => void;
};

export const ItemComponent: React.FC<Props> = (props) => {
  const customClass = props.isDone ? "isDone" : "notDone";

  const customStyle = (statusStyle: boolean) =>
    statusStyle ? { color: "aquamarine" } : { color: "tomato" };

  return (
    <li
      className={customClass}
      onClick={props.onClick}
      style={customStyle(props.isDone)}
    >
      {props.children}
    </li>
  );
};
