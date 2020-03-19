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

  render() {
    const { todo, input } = this.state;
    return (
      <div>
        <TodoForm
          input={input}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <TodoList todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
