import React from "react";
import styles from "./NavFilter.module.css";
import { NavFilter } from "./NavFilter";

type Props = {
  total: number;
  pending: number;
  completed: number;
  filter: "all" | "pending" | "completed";
  setFilter: (filter: "all" | "pending" | "completed") => void;
};

type Filter = {
  name: "all" | "pending" | "completed";
  count: number;
};
export const NavFilterList: React.FC<Props> = ({
  total,
  pending,
  completed,
  filter,
  setFilter,
}) => {
  const navFilters: Filter[] = [
    { name: "all", count: total },
    { name: "pending", count: pending },
    { name: "completed", count: completed },
  ];
  return (
    <nav className={styles["tab-menu"]}>
      <ul className={styles["tab-container"]}>
        {navFilters.map((filterElement) => (
          <NavFilter
            count={filterElement.count}
            thisFilter={filterElement.name}
            filter={filter}
            setFilter={setFilter}
          ></NavFilter>
        ))}
      </ul>
    </nav>
  );
};
