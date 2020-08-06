import React from 'react';
import ReactDOM from "react-dom";

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo.css';

const tasks = [
  {
    task: 'Wake Up';
    id: Date.now();
    completed: false;
  }
  {
    task: 'Kiss Nena';
    id: Date.now();
    completed: false;
  }
  {
    task: 'Apply for that job';
    id: Date.now();
    completed: false;
  }
  {
    task: 'Feed the dogs';
    id: Date.now();
    completed: false;
  }
  {
    task: 'Cook dinner';
    id: Date.now();
    completed: false;
  }
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



  render() {
    return (
      <div>
        <h2>To-Do List: MVP</h2>
      </div>
    );
  }
}

export default App;
