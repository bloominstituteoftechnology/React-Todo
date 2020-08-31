import React, { Component } from 'react'

export default class TodoForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.submitHander}>
        <label htmlFor="todo">Todo: </label>
        <input type="text" name="todo" value={this.props.todo} onChange={this.props.changeHandler} />
        <button>
          Add todo
        </button>
      </form>
    )
  }
}
