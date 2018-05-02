import React from 'react';
import TodoList from './components/TodoList';


const App = () => (
  <div>
    <h2> Todo App </h2>
    
    <TodoList className="todo" display="flex"/>
    <button className="btn" display="flex" ></button>
  </div>
);

export default App;
