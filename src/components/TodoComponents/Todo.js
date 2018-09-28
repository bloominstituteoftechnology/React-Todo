import React from 'react';
import './Todo.css';



class Todo extends React.Component {
  render() {

    const todoHandler = (props) => {
    this.props.clickHandler(this.props.todo.id);
  }

    return (
      <li className={this.props.todo.completed ? 'completedTask': null} onClick={todoHandler}>{this.props.todo.task}</li>
    )
  }
}

export default Todo;