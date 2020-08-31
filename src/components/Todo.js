import React, { Component } from 'react'

export default class Todo extends Component {

  render() {
    return (
      <div>
        <em>Title: {this.props.todo.task}</em> <br />
        ID: {this.props.todo.id}<br />
        {this.props.todo.completed ? "Done" : "Pending"} <br />
        <button
          onClick={() => this.props.markComplete(this.props.todo.id)}>
          Mark Complete
        </button> <br /><br />
      </div>
    )
  }
}
