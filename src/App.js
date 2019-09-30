import React from 'react';
import ReactDom from "react-dom";

import TodoList from "./components/TodoComponents/TodoList";
const todoData = [
    {
        task: "Go to Gym",
        id: Date.now(),
        completed: false
    },
    {
        task: "Do Laundry",
        id: Date.now(),
        completed: false
    },
    {
        task: "Prepare Dinner",
        id: Date.now(),
        completed: false
    },
    {
        task: "Code",
        id: Date.now(),
        completed: false
    }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: todoData,
    };
  }

  toggleList = id => {
    console.log(id);

    this.setState({
      task: this.state.task.map(activity => {
        if (activity.id === id) {
          return {
            ...activity,
            completed: !activity.completed
          };
        } else {
            return activity;
          }
        })
    });
  };


  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      task: [...this.state.task, newTask]
    });
  };

  render() {
    return (
      <div className= "App">
        <div className= "header">
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoList
          task={this.state.task}
          toggleList={this.toggleList}
        />
      </div>
    );
  }
}

export default App;
