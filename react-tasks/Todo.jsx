// https://chatgpt.com/g/g-p-69aaa4e779188191b14e43b9b86bd4c2-podgotovka-k-sobesam/c/69cb7c28-876c-8329-a910-bd27cacfd6cd
import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";

// Мемоизированный TodoItem
const TodoItem = React.memo(({ todo, onToggle }) => {
  console.log("Rendering", todo.text); // видим, что перерендерился только обновлённый элемент
  return (
    <li>
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onToggle(todo.id)}>Toggle</button>
    </li>
  );
});

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy milk", done: false },
    { id: 2, text: "Write code", done: false },
    { id: 3, text: "Walk the dog", done: false },
  ]);

  // Эффект, который срабатывает при любом изменении массива todos
  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  // Callback для точечного обновления элемента
  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map(
        (todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo) // создаём новый объект только для изменённого дела
      )
    );
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
      ))}
    </ul>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoList />);
