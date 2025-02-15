import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
