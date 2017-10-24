import React , { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
    <ul>
      {this.props.todos.map((todo) => {
        return <li>{todo}</li>
      })}
    </ul>)
  }
}

export default TodoList;
