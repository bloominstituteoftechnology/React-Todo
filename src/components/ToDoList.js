import React, { Component } from "react";
import Todo from "./Todo";
class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      items: ["1st item", "2nd item"],
      newItem: ""
    };
  }

  addItem = event => {
    event.preventDefault();
    const itemsList = this.state.items;
    itemsList.push(this.state.newItem);
    this.setState({
      items: itemsList,
      newItem: ""
    });
  };

  handleItemInput = event => {
    this.setState({ newItem: event.target.value });
  };

  removeItem = index => {
    const newItemsArray = this.state.items.filter((todo, i) => index !== i);
    this.setState({ items: newItemsArray });
  };

  render() {
    return (
      <div>
        {this.state.items.map((item, i) => (
          <Todo key={i} index={i} thing={item} removeItem={this.removeItem} />
        ))}
        <form onSubmit={this.addItem}>
          <br />
          <input
            type="text"
            className="submitBox"
            onChange={this.handleItemInput}
            placeholder="Add Item Here"
            value={this.state.newItem}
          />
        </form>
      </div>
    );
  }
}

export default ToDoList;
