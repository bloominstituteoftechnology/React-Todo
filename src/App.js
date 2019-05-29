import React from 'react';

import Todo from "./components/TodoComponents/Todo"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: [],
      taskName: '',
      idNumber: '',
      completed: ''
    };
  }

  addTask = event => {
    event.preventDefault();
    const newTask = {
      taskName: this.state.taskName,
      idNumber: this.state.idNumber,
      completed: this.state.completed
    };
    this.setState({
      taskList: [...this.state.taskList, newTask], //New array with an added task
      taskName: '',
      idNumber: '',
      completed: ''
    });
  };

  handleChanges = event => {
    console.log(event.target.value);

    //save on state, message
    this.setState({
      [event.target.name]: event.target.value
    });
  };

//   this.setState({taskName: event.target.value});
// };

  render() {
    console.log(this.state.name);
    return (
      <div className='App'>
        <h2>Welcome to your Todo Nightmare!</h2>

        <div className="todo-list">
          {this.state.taskList.map(taskFromMap => (
            <Todo todoOnProps={taskFromMap} />
          ))}
        </div>

        <form onSubmit={this.addTask}>
            <input
              placeholder="task name"
              onChange={this.handleChanges}
              value={this.state.taskName}
              name="taskName" 
              />

            <input
              placeholder="id number"
              onChange={this.handleChanges}
              value={this.state.idNumber}
              name="idNumber" 
              />

            <input
              placeholder="completed"
              onChange={this.handleChanges}
              value={this.state.completed}
              name="completed" 
              />
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}

export default App;
