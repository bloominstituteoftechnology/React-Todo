import React from 'react';
import ReactDom from 'react-dom';

import TodoForm from './ToDoForm';
import ToDoList from './ToDoList'

import './App.css';

const todos = [
  {
    name: "Research the industries I want to work in",
    id: 123,
    complete: false
  },
  {
    name: "Make birthday card for friend",
    id: 124,
    complete: false
  },
  {
    name: "Clean room",
    id: 1235,
    complete: false
  },
  {
    name: "Read new book",
    id: 1246,
    complete: false
  },
  
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      name: task,
      id: Date.now(),
      complete: false
    };
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };

  toggleTask = (taskId) => {
    console.log(taskId);
    //So, map over the array
    //Once we find the task with an id that matches, toggle the completed field
    //If it doens't match, return the task unchanged
    this.setState({
      todos: this.state.todos.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            complete: !task.complete
          };
        }
        return task;
      })
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    // If the task is complete, then filter it out
    this.setState({
      todos: this.state.todos.filter((task) => !task.complete)
    });
  };

  render() {
    console.log("Rendering....");
    return(
      <div>
        <h1>To-Do List</h1>
        <TodoForm addTask = {this.addTask}/>
        <ToDoList 
          todos = {this.state.todos}
          toggleTask = {this.toggleTask}
          clearCompleted = {this.clearCompleted}
        />
      </div>
    )
  }

}

export default App;
