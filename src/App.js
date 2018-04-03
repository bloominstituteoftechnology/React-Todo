import React, { Component } from 'react';

const styles = {
  fontFamily: "sans-serif",
  margin: "50px auto",
  width: "200px",
  fontWeight: "bold",
  border: "1px solid gray",
  padding: "20px",
  paddingLeft: "40px",
  paddingBottom: "40px",
  userSelect: "none",
  backgroundColor: "beige"
};

const itemClick = event => {
  if (event.target.style.textDecoration !== "line-through") {
    event.target.style.setProperty('text-decoration', 'line-through');
  } else {
    event.target.style.setProperty('text-decoration', 'none');
  }
};

const ListItem = props => {
  return (
    <li onClick={itemClick} key={props.key}>{props.item}</li>
  );
}

const emoji = String.fromCharCode(parseInt('1F4A9',16));

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
      <div style={styles}>
        <h2>Shit List &#x1F4A9;</h2>
        <ul>
          {this.state.items.map((x, i) => <ListItem item={x} key={x + i} />)}
        </ul>
        <input
          type="text"
          name="newItem"
          value={this.state.newItem}
          placeholder="Add some shit"
          onChange={this.handleAddItem}
        />
        <button onClick={this.handleSubmitItem}>Add Shit</button>
      </div>
    );
  }
}

export default App;
