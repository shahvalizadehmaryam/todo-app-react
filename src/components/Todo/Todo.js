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
        <button onClick={onEdit} className={`${styles.btn} ${styles.editBtn}`}>edit</button>
        <button onClick={onDelete} className={`${styles.btn} ${styles.deleteBtn}`}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
