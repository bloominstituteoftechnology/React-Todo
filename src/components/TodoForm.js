import React, { Component } from 'react'

export default class TodoForm extends Component {

  render() {
    return (
      <>
        <h1>Todos</h1>
        <form onSubmit={this.props.submitHander}>
          <label htmlFor="todo">Todo: </label>
          <input type="text" name="todo" onChange={this.props.changeHandler} value={this.props.inputValue} /><br />
          <button>
            Add todo
        </button>
        </form>
        <button onClick={this.props.clearAll}>Clear all</button>
      </>
    )
  }
}
