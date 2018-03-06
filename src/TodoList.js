import React, { Component } from 'react';
import Done from './Done.js';

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      list: [{
        text: 'watch pokeon',
        clicked: false
        }
        /*'watch pokeon',
        'Throw out the Garbage',
        'make lunch',
        'go for a walk'*/
      ],
      newItem: {
        text: '',
        clicked: false,
      }
    };
  }

  handleListInput = event => {
    this.setState({ newItem: {
      text: event.target.value,
      clicked: false
    }});
  };

  addItem = event => {
    event.preventDefault();
    const itemsList = this.state.list;
    itemsList.push(this.state.newItem);
    this.setState({
      newItem: {
        text: '',
        clicked: false,
      },
      list: itemsList
    });
  };

  childFunc = (index) => {
    this.setState({
      selected: index
    });
  }

  render() {
    return (
      <div>
        {this.state.list.map((item, i) => <Done k={i} index={i} thing={item} action={this.childFunc}/>)}
        <form onSubmit={this.addItem}>
          <input
            type="text"
            onChange={this.handleListInput}
            placeholder="Add a new item"
            value={this.state.newItem.text}
          />
        </form>
      </div>
    );
  }
}
export default TodoList;
