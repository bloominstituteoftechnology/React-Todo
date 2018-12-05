import React from 'react';
import ReactDOM from 'react-dom';
// import TodoForm from './components/TodoComponents/TodoForm.js';
import List from './components/TodoComponents/TodoList.js';
import Task from './components/TodoComponents/Todo.js';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      tasks: List,
      task: ""

    }
  }

  handleUpdateState = e => {
    e.preventDefault();
    const newTasks = this.state.tasks.slice();
    newTasks.push({
      id: new Date(),
      task: this.state.task,
      completed: false
    });
    this.setState({ tasks: newTasks });
  };


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to the TODO APP!</h2>

        {this.state.tasks.map(task => (
          <Task displayTask = {task} />
        ))}

        <form onSubmit={this.handleUpdateState}>
          <button>Click to Add 2</button>
          <input name="task" 
          value={this.state.task} 
          onChange={this.handleInputChange} />
        </form>
      </div>

    )
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
