import React from 'react';
import { render } from 'react-dom';
//import App from './App';
import TodoList from "./components/TodoList"

const App = () => (
  <div>
    <h2>Todo App</h2>
    <TodoList />

  </div>
);

render(<App />, document.getElementById('root'));