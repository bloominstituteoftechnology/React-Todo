import React, { Component } from 'react'

class Todo extends Component {
  render() {
    return (
      <div>
        <input 
          type="checkbox"
          // checked={this.props.todos.completed}
          onChange = {() => this.props.handleChange(this.props.todo.id)}
        />
        {/* {this.props.todos.task} */}
        <button onClick={() => this.props.removeTodo(this.props.todo.id)}>
          Remove
        </button>
      </div>
    )
  }
}
export default Todo