//Todo.js

import React from 'react'
import "./Todo.css"


class Todo extends React.Component {
  render() {
    const message = this.props.todo.completed ? 'done' : 'not done'
    const myClickyHandler = () => {
      this.props.handleClick(this.props.todo.id)
    }

    return (
      <div onClick={myClickyHandler}>
        {this.props.todo.task} is {message}
      </div>
    )
  }
}



export default Todo