import React from 'react';
import TodoList from './components/TodoList.js';

const App = () => (
  <div className="todo-title">
    <h2>Todo App</h2>
    < TodoList {...TodoList} />
  </div>
);

export default App;
