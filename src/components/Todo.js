import React, { Component } from 'react'
import './Todo.css'
export default class Todo extends Component {

  render() {
    return (
      <div className={this.props.todo.completed ? "done" : ''}>
        <em>Title: {this.props.todo.task}</em> <br />
        ID: {this.props.todo.id}<br />
        Status: {this.props.todo.completed ? "Done" : "Pending"} <br />
        {!this.props.todo.completed &&
          <button
            onClick={() => this.props.markComplete(this.props.todo.id)}>
            Mark Complete
        </button>} <br /><br />
      </div>
    )
  }
}
