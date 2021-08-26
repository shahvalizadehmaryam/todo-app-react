import { useState } from "react";
import Select from "react-select";
const NavBar = ({ unCompleteTodo, onFilterTodo }) => {
  const [selectVal, setSelectVal] = useState("");
  const options = [
    { value: "", label: "All" },
    { value: "Uncompleted", label: "Uncompleted" },
    { value: "Completed", label: "Completed" },
  ];
  const selectChangeHandler = (selectedOption) => {
    setSelectVal(selectedOption.value);
    onFilterTodo(selectedOption.value);
  };

  if (!unCompleteTodo) return <span>set ypur today todos!</span>;
  return (
    <div>
      <header>
        <>
          <Select
            value={selectVal}
            onChange={selectChangeHandler}
            options={options}
          />
          <span>{unCompleteTodo}</span>
          <h2>todos are not completed!</h2>
        </>
      </header>
    </div>
  );
};

export default NavBar;
