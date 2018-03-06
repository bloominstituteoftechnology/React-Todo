import React, { Component } from 'react';
import Completed from './Completed.js';

class ToDoList extends Component {
 constructor() {
   super();

   this.state = {
    itemsList: ['be pretty','eating healthy', 'walking'],
    newItem: '',
  };
}

addItem = event => {
    event.preventDefault();
    const list = this.state.itemsList;
    list.push(this.state.newItem);
    this.setState({
        newItem: '',
        itemsList: list
    });
};

handleListInput = event => {
    this.setState({ newItem: event.target.value });
};

    render() {
        return (
            <div>
            {this.state.itemsList.map(item => <Completed itemKey={item} />)}
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


export default ToDoList;