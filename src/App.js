import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      todo: '',
    };
  }

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

  updateTodo = e => {
    if (this.state.todo.match(/\S/)) {
      const list = this.state.list.slice();
      list.push({ task: this.state.todo, id: Date.now(), completed: false });
      this.setState({ list });
    }
    this.setState({ todo: '' });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <TodoList
          list={this.state.list} />
        <TodoForm
          value={this.state.todo}
          handleChange={this.handleInputChange}
          submitTodo={this.updateTodo} />
      </div>
    );
  }
}

export default App;
