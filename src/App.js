import React from 'react';
import { render } from "react-dom";
import Todo from "./Todo";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
    super();
    this.state = {
      newTodo: "",
      tasks: [],
    };

    handleAddTodo = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmitTodo = () => {
      const { tasks } = this.state;
      tasks.push(this.state.newTodo);
      this.setState({ tasks, newTodo: "" });
    };

  render() {

    return (
      <div>
        <h2>My To Do List</h2>
        <TodoList {...this.state} />
        <input
          type="text"
          name="newTasks"
          value={this.state.newTodo}
          placeholder="add tasks"
          onChange={this.handleAddTodo}
        />
        <button onSubmit={this.handleSubmitTodo}>Add Todo</button>

      </div>
    );
  };
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
