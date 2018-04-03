import React, { Component } from 'react';

const itemClick = event => {
  if (event.target.style.textDecoration !== "line-through") {
    event.target.style.setProperty('text-decoration', 'line-through');
  } else {
    event.target.style.setProperty('text-decoration', 'none');
  }
};

const ListItem = props => {
  return (
    <li onClick={itemClick}>{props.item}</li>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      items: ['Do laundry', 'Go to store', 'Walk the dog']
    };
  }

  handleAddItem = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitItem = () => {
    const { items } = this.state;
    items.push(this.state.newItem);
    this.setState({ items, newItem: '' });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map(x => <ListItem item={x} />)}
        </ul>
        <input
          type="text"
          name="newItem"
          value={this.state.newItem}
          placeholder="Add item"
          onChange={this.handleAddItem}
        />
        <button onClick={this.handleSubmitItem}>Add Item</button>
      </div>
    );
  }
}

export default App;
