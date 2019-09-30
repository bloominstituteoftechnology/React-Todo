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

  submitTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: ''
    });
  };


  render() {
    return (
      <>
        <form >
          <label htmlFor='Add Task'>Add Task</label>
          <input
            placeholder='Add Task'
            type='text'
            value={this.state.task}
            name='task'
            onChange={this.handleChanges}
          />
          {/* Add state-setting functionality */}
          <button onClick={this.submitTask}>Add Task</button>
        </form>

      </>
    )
  }
}


export default TodoForm;