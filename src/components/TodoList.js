import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
  state = {
    list: [],
    newItem: '',
  };

  addToList = (event) => {
    event.preventDefault();
    const listCopy = this.state.list;
    listCopy.push(this.state.newItem);
    this.setState({
      newItem: '',
      listCopy: listCopy,
    });
  }

  handleNewItemInput = (event) => {
    this.setState({ newItem: event.target.value });
  };

  render() {
    return (
      <div className='todo-list'>
        <ul>
          {this.state.list.map((item, i) => {
            return <Todo key={i} todo={item} />;
          })}
        <form onSubmit={this.addToList}>
          <input type="text" onChange={this.handleNewItemInput} placeholder="Write something" value={this.state.newItem} />
        </form>
        </ul>  
      </div>
    );
  }
}

export default TodoList;
