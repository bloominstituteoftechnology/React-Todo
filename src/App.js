import React, { Component } from 'react';
import TodoList from "./components/ToDoList";
import TaskList from "./components/TaskList";

// const App = () => (
//   <div>
//     <h2>Todo App</h2>
//       < ToDoList />
//   </div>
// );

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      taskList: []
    }
  }
    addTask = () => {
      if (!this.state.inputValue) {
        alert('Youre good');
      } else {
        this.setState({
          inputValue: '',
          taskList: [{
            task: this.state.inputValue,
            id: Date.now(),
            completed: false,
            ID: Date.now(),
          },
          ...this.state.taskList]
        });
      }
    }
    handleChange = ev => {
      this.setState(
        { inputValue: ev.target.value }
      )
    }
    onClick = event => {
      const tasks = this.state.taskList;
      const task = this.state.inputValue;
      tasks.push(task);
      this.setState({ taskList: tasks, inputValue: '' });
    }

    render() {
      return (
        <div>
          <TaskList tasks={this.state.taskList} />
          <input value={this.state.inputValue} onChange={this.handleChange} />
          <button onClick={this.onClick}>Just do it</button>
        </div>
      );
    }
  }
  export default App;
