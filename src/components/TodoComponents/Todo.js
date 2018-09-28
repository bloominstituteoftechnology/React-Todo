import React , {Component} from 'react';



class Todo extends React.Component {
  render() {
    const message = this.props.todo.completed ? 'done' : 'not done'

    const todoClick = () => {
      this.props.todoClick(this.props.todo.id)
    }

    return (
      <div onClick={todoClick}>
        {this.props.todo.task} is {message}
      </div>
    )
  }
}

export default Todo
