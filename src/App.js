import React from 'react';
import TodoList from './components/TodoList.js';

const App = () => (
  <div className="todo-app">
    <h2>Todo App</h2>
    <TodoList todos={[{ text: "foo" }, { text: "bar" }]}/>
  </div>
);

export default App;
