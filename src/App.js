import React from 'react';
import TodoList from './components/TodoList.js';
import './App.css'

const App = () => (
  <div className="container">
    <h2 className="container-header">Todo App</h2>
    <TodoList />
  </div>
);

export default App;
