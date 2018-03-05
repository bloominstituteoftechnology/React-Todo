import React, { Component } from 'react';
import Done from './Done.js';

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      list: [
        'watch pokeon',
        'Throw out the Garbage',
        'make lunch',
        'go for a walk'
      ],
      newItem: ''
    };
  }

  handleListInput = event => {
    this.setState({ newItem: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    const itemsList = this.state.list;
    itemsList.push(this.state.newItem);
    this.setState({
      newItem: '',
      list: itemsList
    });
  };

  render() {
    return (
      <div>
        {this.state.list.map(item => <Done thing={item} />)}
        <form onSubmit={this.addItem}>
          <input
            type="text"
            onChange={this.handleListInput}
            placeholder="Add a new item"
            value={this.state.newItem}
          />
        </form>
      </div>
    );
  }
}
export default TodoList;
