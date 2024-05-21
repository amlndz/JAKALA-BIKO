import React from "react";

type Props = {
  elemento: String;
  key: number;
};

export const ItemComponent: React.FC<Props> = ({ elemento, key }) => {
  return (
    <li className="item-class" key={key}>
      {elemento}
    </li>
  );
};
