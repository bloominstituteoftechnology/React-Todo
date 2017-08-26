import React, { Component } from 'react';
import { render } from 'react-dom';

const ListItem = (props) => {
  return (
    <li onClick={props.onClick}>
      {props.item}
    </li>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [] // Need to push items into this array.
    };
  }
  addItem() {
    const item = document.getElementById('listItem').value;
    document.getElementById('listItem').value = '';
    let newList = this.state.list.slice();
    newList.push(item);
    this.setState({list: newList});
  }
  onClick(index) {
    let newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({list: newList});
  }
  render() {
    const listItems = [];
    this.state.list.forEach((item) => {
      listItems.push(<ListItem item={item} />);
    });
    return (
      <div className="todolist">
        <h1>To Do List</h1>
        <input type="text" id="listItem" placeholder="Add item" /><br />
        <button type="button" onClick={() => this.addItem()}>Add</button>
        <button type="button" onClick={() => this.onClick()}>Delete</button>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}
export default App;