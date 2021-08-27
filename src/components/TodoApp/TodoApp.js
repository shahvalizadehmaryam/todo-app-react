import styles from "./TodoApp.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { useState, useEffect } from "react";
import NavBar from "../NavBar.js/NavBar";

const TodoApp = () => {
  const [selectVal, setSelectVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  useEffect(() => {
    filterTodo(selectVal);
  }, [todos]);
  const selectChangeHandler = (selectedOption) => {
    setSelectVal(selectedOption.value);
    filterTodo(selectedOption.value);
  };

  const addTodoHandler = (todoText) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todoText,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completeChangeHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const editHandler = (id, newVal) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newVal;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const unCompletedTodos = todos.filter((todo) => !todo.isCompleted).length;
  const filterTodo = (selectedValue) => {
    switch (selectedValue) {
      case "Uncompleted":
        setFilterTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      case "Completed":
        setFilterTodos(todos.filter((todo) => todo.isCompleted));
        break;
      default:
        setFilterTodos(todos);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <NavBar
          unCompleteTodo={unCompletedTodos}
          onSelect={selectChangeHandler}
          selectVal={selectVal}
        />
        <TodoForm onAddTodo={addTodoHandler} />
        <TodoList
          todos={filterTodos}
          onComplete={completeChangeHandler}
          onDelete={deleteHandler}
          onUpdateTodo={editHandler}
        />
      </div>
    </>
  );
};

export default TodoApp;
