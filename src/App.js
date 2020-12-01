import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      item: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];
    console.log(newItem);
    this.setState({
      items: updatedItems,
      item: "",
      id: Date.now(),
      editItem: false,
    });
  };
  render() {
    return (
      <div>
        hello from main App
        <TodoForm
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList items={this.state.items}/>
      </div>
    );
  }
}
