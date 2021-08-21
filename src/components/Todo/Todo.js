import styles from "./Todo.module.css";
const Todo = ({ todo, onComplete }) => {
  return (
    <div
      className={
        todo.isCompleted
          ? `${styles.complete} ${styles.todoItem}`
          : styles.todoItem
      }
    >
      {todo.text}
      <div>
        <button>edit</button>
        <button onClick={onComplete}>completed</button>
      </div>
    </div>
  );
};

export default Todo;
