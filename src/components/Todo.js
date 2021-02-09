import React, { Component } from 'react'

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo
    }
  }
  render() {
    return (
      <div onClick={this.props.toggleComplete} className="todo">
        {this.props.todo.task}
      </div>
    )
  }
}

export default Todo
