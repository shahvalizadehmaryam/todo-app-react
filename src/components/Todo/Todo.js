import styles from "./Todo.module.css";
const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={styles.todoItem}>
      <div
        onClick={onComplete}
        className={todo.isCompleted ? `${styles.complete}` : ""}
      >
        {todo.text}
      </div>

      <div>
        <button onClick={onEdit}>edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
