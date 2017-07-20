import React, { Component } from 'react';
import TodoListMain from './todoListMain';

class showTodo extends Component {
  render() {
    const todoEntries = this.props.entries;
    
    const createTask = (item) => {
      return <li key={item.key}>{item.text}</li>
    }
    const listItems = todoEntries.map(createTasks);
    return (
      <ul className="list">
        {listItems}
      </ul>
    );
  }
}

export default showTodo;