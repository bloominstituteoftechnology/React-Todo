import React from 'react'
import './Todo.css'

class Todo extends React.Component {

  render() {
    return (
        <div className="Todo">
        <span>{this.props.task} </span>
        <span>{this.props.completed ? 'True' : 'False'}</span>
        </div>
      )
    }
}

export default Todo;