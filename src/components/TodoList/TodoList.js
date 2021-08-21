import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
const TodoList = ({ todos, onComplete }) => {
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
      />
    ));
  };
  return <div>{renderTodo()}</div>;
};

export default TodoList;
