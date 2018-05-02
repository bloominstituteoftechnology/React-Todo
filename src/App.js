import React from 'react';
import TodoList from './components/TodoList';


const App = () => (
  <div>
    <h2> Todo App </h2>
    
    <TodoList className="todo" />
    <button className="btn"></button>
  </div>
);

export default App;
