import React, { Component } from 'react'

export default class TodoForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.submitHander}>
        <label htmlFor="todo">Todo: </label>
        <input type="text" name="todo" onChange={this.props.changeHandler} value={this.props.inputValue} />
        <button>
          Add todo
        </button>
      </form>
    )
  }
}
