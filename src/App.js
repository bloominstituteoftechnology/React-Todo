import React, { Component } from 'react';
import TodoList from './components/TodoComponents/todoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(input) {
    const { items } = this.state;
    this.setState({ items: [...items, input] })
  }

  render() {
    const { items } = this.state;

    return (
      <div className="App">
        <h1>Todo List: MVP</h1>
        <TodoList items={items} />
        <TodoForm onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default App;
