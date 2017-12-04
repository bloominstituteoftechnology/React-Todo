import React from 'react';
import { render } from 'react-dom';
//import App from './App';
import Todo from "./components/Todo"

const App = () => (
  <div>
    <h2>Todo App</h2>
    <Todo />

  </div>
);

render(<App />, document.getElementById('root'));