import React from 'react';
import TodoList from './components/TodoList';
import './index.css'
// import Todo from './components/Todo';

const App = () => (
  <div className="Todo">
    <h2>Todo App</h2>
    <TodoList />
  </div>
);

export default App;
