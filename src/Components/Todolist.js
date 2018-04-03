import React, { Component } from "react";
//import Done from "./Done";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      Todo: [],
      newTodo: ""
    };
  }

  handleAddTodo = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmitTodo = e => {
    e.preventDefault();
    const TodoList = this.state.Todo;
    TodoList.push(this.state.newTodo);
    this.setState({ Todo: TodoList, newTodo: "" });
  };

  render() {
    return (
        <div style={styles}>
            {this.state.Todo.map(todo => <div>{todo}</div>)}
            <input type="text" value={this.state.newTodo} placeholder="new task" onChange={this.handleAddTodo} />
            <button onClick={this.handleSubmitTodo}>Add Todo</button>
      </div>
    );
  }
}

export default TodoList;
