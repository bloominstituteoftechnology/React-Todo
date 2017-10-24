import React, { Component } from 'react';
import toDoList from './toDoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      itemTitle: '',
      items: []
    };
    this.handleItemTitle = this.handleItemTitle.bind(this);
    this.handleAddItemToList = this.handleAddItemToList.bind(this);
  }
  handleItemTitle(event) {
    this.setState({ itemTitle: event.target.value });
  }
  handleAddItemToList() {
    let title = this.state.itemTitle;
    const items = this.state.items;
    items.push(title);
    this.setState({ items, itemTitle: '' });
  }
  render() {
    return (
      <toDoList
        changeHandler={this.handleItemTitle}
        addToList={this.handleAddItemToList}
        title={this.state.itemTitle}
        items={this.state.items}
      />
    );
  }
}

export default App;