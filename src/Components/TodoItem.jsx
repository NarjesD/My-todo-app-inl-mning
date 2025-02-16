const TodoItem = ({ todo, toggleTodo, onDelete }) => {
  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={{ flex: 1, textAlign: "left" }}>{todo.text}</span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="todo-checkbox"
      />
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        x
      </button>
    </li>
  );
};

export default TodoItem;
