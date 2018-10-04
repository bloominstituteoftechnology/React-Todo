import React from 'react'
import './Todo.css'

class Todo extends React.Component {
  render() {
    return (
        <div className="Todo" onClick={(event) => this.props.completeTask(event, this.props.id)}>
          <span>{this.props.task} </span>
          <span>{this.props.completed ? 'Done' : 'Not done'}</span>
        </div>
      )
    }
}

export default Todo;