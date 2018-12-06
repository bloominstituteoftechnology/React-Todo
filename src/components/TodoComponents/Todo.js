import React from 'react';
import './Todo.css';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div onClick={e => this.props.toggle(e)} className={`todo-item${this.props.complete ? ' completed' : ''}`} data-id={this.props.value}>{this.props.todoText}</div>
    )
  }
}

export default Todo;