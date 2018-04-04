import React, { Component } from 'react';
import ToDoList from './ToDoList.js'

class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      todos: []
    };
  }

  handleSubmitTodo = () => {
    const { todo } = this.state.todos;
    this.state.todos.push(this.state.newItem);
    this.setState({ todo, newItem: "" });
  }

  handleAddItem = (event) => {
    const myElement = [event.target.name];
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="Todo__container">
        <ToDoList {...this.state} />
        <input
          type="text"
          name="newItem"
          value={this.state.newItem}
          placeholder="add item"
          onChange={this.handleAddItem}
        />
        <button onClick={this.handleSubmitTodo}>Add</button>
      </div>
    );
  }
}

export default ToDo;