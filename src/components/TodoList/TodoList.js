import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./TodoList.module.css";
const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  const editTodo = (newVal) => {
    onUpdateTodo(edit.id, newVal);
    setEdit({ id: null, text: "", isCompleted: false });
  };

  const renderTodo = () => {
    if (todos.length === 0) {
      return <p>Enter Todo</p>;
    }
    return todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        onComplete={() => {
          onComplete(todo.id);
        }}
        onDelete={() => {
          onDelete(todo.id);
        }}
        onEdit={() => {
          setEdit(todo);
        }}
      />
    ));
  };
  return (
    <div>
      {edit.id ? <TodoForm onAddTodo={editTodo} edit={edit} /> : renderTodo()}
    </div>
  );
};

export default TodoList;
