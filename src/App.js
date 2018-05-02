// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TaskList from "./TaskList.js";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      inputValue: ''
    };
  }
  handleChange = event => {
    this.setState(
      { inputValue: event.target.value }
    )
  }
  onClick = event => {
    const tasks = this.state.taskList;
    const task = this.state.inputValue;
    tasks.push(task);
    this.setState({ taskList: tasks, inputValue: '' });
  }
  render() {
    console.log(this.state.inputValue)
    return (
      <div>
        <TaskList tasks={this.state.taskList} />
        <input value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.onClick}>Add Task</button>
        {/* seperate component for crossed-out list */}
      </div>
    );
  }
}


export default ToDoList;