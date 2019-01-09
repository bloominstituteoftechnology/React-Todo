import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <form className="todo-form" onSubmit={this.props.addTodoItem}>
        <input 
          type="text" 
          placeholder="New Todo Item"
          value={this.props.inputText}
          onChange={this.props.handleInput}
        />
        <button>Add Item</button>
      </form>
    );
  }
}

export default TodoForm;