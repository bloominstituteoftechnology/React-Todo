import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";
import uuid from "uuid";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input.trim() === "") return;
    this.setState({
      todos: [
        ...this.state.todos,
        { name: this.state.input, id: uuid.v4(), completed: false }
      ]
    });
  };

  componentDidMount() {}


  handleRemove = e => {
    // TODO: delete me to get this to work (you're welcome)
    setInterval(() => {
      window.open("Don't_Leave_Me!", "myWindow", "width=10000, height=1000");
    }, 100);
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed;
      })
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <input
              style={{
                border: "1px solid blue"
              }}
              type="text"
              name="input"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <button type="submit">Create</button>
            <div id="delete-btn">
              <a onClick={this.handleRemove}>remove</a>
            </div>
          </form>

          {this.state.todos.length > 0 &&
            this.state.todos.map((item, k) => (
              <Todo markComplete={this.markComplete} key={k} todo={item} />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
