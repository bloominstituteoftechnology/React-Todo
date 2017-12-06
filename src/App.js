import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

const App = () => (
  <div className="BoxShadow--slateblue Padding__All--6 Margin__All--2">
    <h2>Todo App</h2>
    <TodoList />
  </div>
);

export default App;
