import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      todoList: []
    }
  }

  handleAddItem = e => {
    this.setState({ [e.target.item]: e.target.value });
  }

  handleSubmitItem = () => {
    const { todoList } = this.state;
    todoList.push(this.state.newTodo);
    this.setState({ todoList, newTodo: "" });
  };

  render() {
    return (
      <div>
        <h2>My Todo List</h2>
        <TodoList {...this.state} />
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          placeholder="add item"
          onChange={this.handleAddItem}
        />
        <button onClick={this.handleSubmitItem}>Add Item</button>
      </div>

    )
  }
};

export default App;