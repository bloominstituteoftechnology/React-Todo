import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  state = {
    items: [],
  }

  render() {
    return (
      <div>
      <h3>Test ToDoList</h3>
      <ToDo />
      </div>
    )
  }
}

export default ToDoList;