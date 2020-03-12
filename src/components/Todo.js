import React from 'react';
import './Todo.css'

class Todo extends React.Component {

  render() {
    return (
      <li
        className={this.props.todo.completed? 'completed' : ''}
        onClick={event => this.props.toggleCompleted(this.props.todo.id)}
      >
        {this.props.todo.description}
      </li>
    );
  }
}

export default Todo;
