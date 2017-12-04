/*eslint no-unused-vars: "off"*/
import React from 'react';
import { render } from 'react-dom';
// You'll want to import the necessary components you want the App component to render
import TodoList from './components/todoList.js';

const App = () => (
  /* Replace this div with whatever components you want the App root component to render */
  <TodoList/>
);

render(<App />, document.getElementById('root'));