import React from "react";
import TodoList from "./components/TodoList";
import "./style.css";

const App = () => (
  <div className="container">
    <h2>Reactive Todo App</h2>
    <TodoList />
  </div>
);

export default App;
