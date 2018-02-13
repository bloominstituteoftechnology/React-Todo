import React from 'react';
import App from './App.css'
import TodoList from './components/TodoList';

const Application = () => (
  <div>
    <h1 className="application">To Do App</h1>
    <div className="box"><TodoList /></div>
  </div>
);

export default Application;