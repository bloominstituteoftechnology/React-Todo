import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  addTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.task)
  };

  // Clear Completed function
  clearCompleted = e => {
    e.preventDefault();

  }

  render() {
    return (
      <>
        <form >
          <label htmlFor='Add Task'>Add Task</label>
          <input
            placeholder="add task"
            type='text'
            value={this.task}
            name='task'
            onChange={this.handleChanges}
          />
          {/* Add state-setting functionality */}
          <button onClick={this.addTask}>Add Task</button>
          <button onClick={this.clearCompleted}>Clear Completed</button>
        </form>

      </>
    )
  }
}


export default TodoForm;