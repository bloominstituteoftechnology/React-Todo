import React, { Component } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      complete: false,
      input: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todo: [...this.state.todo, { input: this.state.input, complete: this.state.complete, id: Date.now() }],
      input: ''
    });
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value, complete: false })
  }

  handleClear = (e) => {
    console.log("something to clear");
  }

  handleComplete = (e) => {
    console.log(e.target);
  }

  render() {
    const { todo, input } = this.state;
    return (
      <div>
        <TodoForm
          input={input}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
        />
        <TodoList
          todo={this.state.todo}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}

export default App;
