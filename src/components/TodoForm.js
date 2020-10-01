import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTask: ''
    }
  }
    handleChanges = (event) => {
      this.setState({...this.state, newTask: event.target.value})
    }

    submitTask = (event) => {
      event.preventDefault()
      this.props.addTask(this.state.newTask)
      this.setState({...this.state, newTask:''})
    }

  
  render() {
    return(
      <>
      <form onSubmit={this.submitTask}>
      <input 
        id='input'
        type='text'
        name='task'
        value={this.state.newTask}
        onChange={this.handleChanges}
      />
      <button>Add</button>
      </form>
      </>
    )
  }
}

export default TodoForm;