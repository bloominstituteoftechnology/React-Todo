import React from 'react';
import ReactDOM from 'react-dom';

const todoList = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList
    };
  };

  toggleItem = (taskId) => {
    console.log("Item", taskId);
    this.setState({
      todoList: this.state.todoList.map((task) => {
        if(taskId === task.id) {
          return {
            ...task,
            completed: !task.completed 
          };
        }
        return task;
      })
    });
  };

  addTask = (taskName) => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state, 
      todoList: [ ...this.state.todoList, newTask]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
