import React, { Component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoItem from "./components/TodoComponents/TodoItem";
import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
  inputElement = React.createRef();
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Create a Todo App</h1>
        <TodoList />
        <TodoForm
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItem entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
