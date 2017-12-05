import React from 'react';
import TodoList from './Components/TodoList/TodoList';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App__todo-list">
    <div className="todo-list__header">
    <h2>Todo List</h2>
    </div>
    <TodoList />
    </div>
  </div>
);

export default App;
