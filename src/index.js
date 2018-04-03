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
  handleAddTodo = event => {
    this.setState({ todoItem: event.target.value });

    // console.log(event.target.value);
    // console.log(this.state.todoItem);
  };

  // adds new todo item to todo list
    handleSubmitTodo = () => {

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
