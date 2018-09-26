import React from 'react';
import Header from './components/HeaderComponents/Header';
import ToDoList from './components/ToDoItemComponents/ToDoList';

const App = () => (
  <div>
    <h2>Todo App</h2>
  <Header />
  <ToDoList />
  </div>
);

export default App;
