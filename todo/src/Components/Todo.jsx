import React, { useState } from "react";
import { addTodo, toggleComplete, deleteTodo } from "../TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="center-wrapper">
      <div className="todo-container">
        <h1 className="todo-title">Redux Todo</h1> {/* Title added here */}
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          className="todo-input"
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTodo} className="todo-button">Add Todo</button>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
              <span>{todo.text}</span>
              <div className="action-buttons">
                <button
                  onClick={() => handleToggleComplete(todo.id)}
                  className="complete-btn"
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
