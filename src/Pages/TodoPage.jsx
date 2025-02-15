import { useState, useEffect } from "react";
import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";
import AllDoneMessage from "../Components/AllDoneMessage"; 

const TodoPage = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

 
  const allDone = todos.length > 0 && todos.every((todo) => todo.completed);

  return (
    <div className="todo-page">
      <h1 className="todo-title">TO-DO LIST</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} onDelete={deleteTodo} />
      {allDone && <AllDoneMessage />} {/* Visa meddelandet när alla är klara */}
    </div>
  );
};

export default TodoPage;
