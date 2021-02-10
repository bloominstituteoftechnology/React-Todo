import React from 'react';

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      task: '',
    }
  }

  handleChanges = evt => {
    this.setState({ 
      task: evt.target.value 
    })
  }

  submitTask = evt => {
    evt.preventDefault();
    this.setState({ task: '' });
    this.props.addTask(this.state.task, evt)
  }

  render(){
    return(
      <form onSubmit={this.submitTask}>
        <input
          type='text'
          name='task'
          value={this.state.task}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    )
  }
}

export default TodoForm
