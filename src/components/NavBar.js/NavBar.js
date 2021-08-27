import { useState } from "react";
import Select from "react-select";
import styles from "./NavBar.module.css";
const NavBar = ({ unCompleteTodo, onSelect, selectVal }) => {
  const options = [
    { value: "", label: "All" },
    { value: "Uncompleted", label: "Uncompleted" },
    { value: "Completed", label: "Completed" },
  ];

  if (!unCompleteTodo)
    return <h3 className={styles.message}>set your today todos!</h3>;
  return (
    <div className={styles.headerPart}>
      <header className={styles.header}>
        <>
          <Select
            value={selectVal}
            onChange={onSelect}
            options={options}
            className={styles.select}
          />
          <div className={styles.todoCount}>
            <span>{unCompleteTodo}</span>
            <h2>unCompleted todos</h2>
          </div>
        </>
      </header>
    </div>
  );
};

export default NavBar;
