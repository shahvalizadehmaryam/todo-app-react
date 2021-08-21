import { useState } from "react";
import styles from "./TodoForm.module.css";
const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      alert("please enter todo!");
      return;
    }
    props.onAddTodo(inputValue);
    setInputValue("");
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input type="text" value={inputValue} onChange={inputChangeHandler} />
        <button type="submit">AddTodo</button>
      </form>
    </div>
  );
};

export default TodoForm;
