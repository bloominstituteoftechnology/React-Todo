import React from "react";
import { render } from "react-dom";
import App from "./App";
import TodoList from "./ToDo";

// TodoInput(parent)(form & button)
//     TodoList(items)

class TodoInput extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItem: "",
      todoList: []
    };
  }

  // updates as user types todo item
  handleAddTodo = (event) => {
  	// updates state as user types a todo item
    this.setState({ todoItem: event.target.value });

    // console.log(event.target.value);
    // console.log(this.state.todoItem);
  };

  // adds new todo item to todo list
  // end of form submit - add one item at a time
	handleSubmitTodo = () => {
		// push new todo item to todoList
		const items = this.state.todoList;
		items.push(this.state.todoItem);
		// this.state.todoList.push(this.state.todoItem);
		// reset todoItem for the next todo item
		this.setState({ items, todoItem: "" });
	}

  render() {
    return (
      <div>
        <form>
          <input
            name="todoItem"
            value={this.state.todoItem}
            onChange={this.handleAddTodo}
            type="text"
            placeholder="todo list here"
          />
        </form>
        <button onClick={this.handleSubmitTodo}>add to do</button>
      </div>
    );
  }
}
export default TodoInput;
render(<App />, document.getElementById("root"));
