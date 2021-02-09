import React, { Component } from 'react'

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskText: "",
    }
  }
  render() {
    return (
      <div>
        <form >
          <input  placeholder="Enter New Todo" />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    )
  }
}

export default TodoForm
