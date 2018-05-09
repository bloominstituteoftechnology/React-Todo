import React from 'react';
import TodoList from './components/TodoList';

const App = () => (
  <div className="app-div">
    <h1 className="app-name">Luke and Lizzy's To-Do App</h1>
    <TodoList />
  </div>
);

export default App;