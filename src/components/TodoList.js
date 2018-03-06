import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: ""
      // clicked: false
    };
  }

  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked });
  // }
// this is when it is clicked, changes state to opposite whatever clicked is because !
// so when you click again it uncrosess like toggle
  handleInput = event => {
    console.log("event.target.value", event.target.value);
    this.setState({ newTodo: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({
      todos: todoList,
      newTodo: ""
    });
  };

  render() {
    // const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
    // ternary operator
    return (
      <div>
        {this.state.todos.map(item => 
        <Todo items = {item}/>
        )}
        {/* The .map is iterating through each item in the “ToDo” array and passes each element to the “ToDo.js” file as the variable “items”. */}
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            onChange={this.handleInput}
            placeholder="Add a new item"
            value={this.state.newTodo}
          />
        </form>
      </div>
   );
  }
}




export default TodoList;