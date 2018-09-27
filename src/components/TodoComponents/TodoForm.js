import React from 'react';
import "./Todo.css"


class TodoForm  extends React.Component  {
  render () {



  
  
  
  return (
    <form className="todoForm">
      <input className="todoInput" type="text" value={this.props.value} />
      <input
        type="button"
        className="addTodo"
        onClick={this.props.handleClick}
        text="Add Todo"
        value="Add Todo"
      /> <input
        type="button"
        className="clearCompleted"
        onClick={this.props.handleClick}
        text="Clear Completed"
        value="Clear Completed"
      />
    </form>
  )
}
}

export default TodoForm;
