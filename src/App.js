import React, { Component } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      input: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(state => {
      return (state.todo.push(state.input),
        state.input = ''
      )
    });
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
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
