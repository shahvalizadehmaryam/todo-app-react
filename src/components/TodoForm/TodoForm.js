import { useEffect, useRef, useState } from "react";
const TodoForm = (props) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const [inputValue, setInputValue] = useState(
    props.edit ? props.edit.text : ""
  );
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
        <>
          <input
            type="text"
            value={inputValue}
            onChange={inputChangeHandler}
            placeholder={props.edit ? "update Todo ..." : "add Todo ..."}
            ref={inputRef}
          />
          <button type="submit">{props.edit ? "update" : "add"}</button>
        </>
      </form>
    </div>
  );
};

export default TodoForm;
