import React from 'react'
import './Todo.css'

class Todo extends React.Component {
  render() {
    return (
        <div className={"Todo " + (this.props.completed ? 'line-through' : '')} onClick={(event) => this.props.completeTask(event, this.props.id)}>
          <span>{this.props.task} </span>
        </div>
      )
    }
}

export default Todo;