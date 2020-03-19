import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      complete: false,
      input: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todo: [
        ...this.state.todo,
        {
          input: this.state.input,
          complete: this.state.complete,
          id: Date.now()
        }
      ],
      input: ""
    });
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleClear = () => {
    this.setState(
      state =>
        (state.todo = this.state.todo.filter(filter => {
          return filter.complete === false;
        }))
    );
  };

  handleComplete = e => {
    this.state.todo.filter(list => {
      return (list.complete =
        Number(list.id) === Number(e.target.id) ? true : false);
    });
    console.log(e.target.id);
  };

  render() {
    const { input, id, complete } = this.state;
    return (
      <div>
        <TodoForm
          input={input}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
        />
        <TodoList
          id={id}
          complete={complete}
          todo={this.state.todo}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}

export default App;
