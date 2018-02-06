//   addItem = event => {
//   removeItem = id => {
//     const temp = this.state.todos;
//     temp.splice(id, 1);
//     this.setState({todo: temp});
//   }

import React from 'react';
import TodoList from './todolist';
import './app.css';

const App = () => (
  <div className = 'container'>
    <h1>JMB's Todo App</h1>
    <TodoList />
  </div>
);

export default App