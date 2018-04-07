import React from 'react';
import TodoList from './components/TodoList/TodoList';

const App = () => (
  <div className="App__container">
    <h2 className="App__header">Simple To-do App</h2>
    <TodoList />
  </div>
);

export default App;
