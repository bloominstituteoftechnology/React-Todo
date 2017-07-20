import React, { Component } from 'react';
import ShowTodo from './showTodo';

class todoListMain extends Component {
  constructor(props) {
    super(props)
      this.state = {
        todoItems: []
      };
  }
  addItem(task) {
    const todoItems = this.state.todoItems;
    todoItems.push(
      {
        text: this.textInput.value,
        key: Date.now()
      }
    );
    this.setState({
      items: todoItems
    });
    this.textInput.value = "";
    task.preventDefault();
  } 
  render() {
      return (
        <div className="todoListMain">
          <div>
            <form onSubmit={this.addItem}>
              <input placeholder="Enter task..." ref={ (input) =>  this.textInput = input }></input>
              <button type="submit"> add task</button>
            </form>
          </div>
            <ShowTodo entries={this.state.todoItems} />
        </div>
      );
  }
}

export default todoListMain;
