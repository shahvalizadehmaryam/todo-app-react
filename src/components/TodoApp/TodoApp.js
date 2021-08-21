import styles from "./TodoApp.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { useState } from "react";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
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

  return (
    <div className="container">
      <TodoForm onAddTodo={addTodoHandler} />
      <TodoList todos={todos} onComplete={completeChangeHandler} />
    </div>
  );
};

export default TodoApp;
