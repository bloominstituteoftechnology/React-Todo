import React, { Component } from "react";
import ItemToDo from "./ItemToDo";

class List extends Component {
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

  removeItem() {}

  render() {
    return (
      <div>
        {this.state.items.map((item, i) => <ItemToDo key={i} thing={item} />)}
        <form onSubmit={this.addItem}>
          <input
            type="text"
            onChange={this.handleItemInput}
            placeholder="add todo item"
            value={this.state.newItem}
          />
        </form>
      </div>
    );
  }
}

export default List;
