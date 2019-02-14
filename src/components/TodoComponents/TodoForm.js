import React, { Component } from 'react'

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        <h1>Todo List: MVP</h1>
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Todo </button>
            <button onClick ={() => this.props.deleteAll()}>Clear Completed</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList
