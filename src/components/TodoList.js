import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
  state = {
    list: [],
    newItem: '',
  }

  addToList = (event) => {
    event.preventDefault();
    const listCopy = this.state.list;
    listCopy.push(this.state.newItem);
    this.setState({
      newItem: '',
      list: list,
    });
  }

  handleNewItemInput = (event) => {
    this.setState({ newItem: event.target.value });
  };

  render() {
    return (
      <div className='todo-list'>
        <Todo {...Todo} />
      </div>
    )
  }
}

export default TodoList;
