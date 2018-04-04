import React from 'react';
import TodoList from './components/TodoList/TodoList';

const App = () => (
  <div className="App__container">
    <h2 className="App__header">To do list</h2>
    <TodoList />
  </div>
);

export default App;
