import styles from "./TodoApp.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { useState } from "react";
import NavBar from "../NavBar.js/NavBar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
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
  const onFilterTodo = (selectedValue) => {
    switch (selectedValue) {
      // case "":
      //   setFilterTodos(todos);
      //   break;
      case "Uncompleted":
        // const filteredUnCompletedTodos = todos.filter(
        //   (todo) => !todo.isCompleted
        // );
        setFilterTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      case "Completed":
        // const filteredCompletedTodos = todos.filter((todo) => todo.isCompleted);
        setFilterTodos(todos.filter((todo) => todo.isCompleted));
        break;
      default:
        setFilterTodos(todos);
    }
  };

  return (
    <>
      <div className="container">
        <NavBar unCompleteTodo={unCompletedTodos} onFilterTodo={onFilterTodo} />
        <TodoForm onAddTodo={addTodoHandler} />
        <TodoList
          todos={todos}
          onComplete={completeChangeHandler}
          onDelete={deleteHandler}
          onUpdateTodo={editHandler}
        />
      </div>
    </>
  );
};

export default TodoApp;
