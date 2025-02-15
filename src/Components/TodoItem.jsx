const TodoItem = ({ todo, toggleTodo, onDelete }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        x
      </button>
    </li>
  );
};

export default TodoItem;
