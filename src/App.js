import React from 'react';
// import { render } from 'react-dom';
import ToDoList from './ToDoList';
import styles from './app.css';

const App = () => (
  <div class="container">
    <div class="header">Todo App | AustinFromAustin"</div>
    <div class="menu">MENU</div>
    <div class="content"><ToDoList /></div>
    <div class="footer">FOOTER</div>
  </div>
);

export default App;
