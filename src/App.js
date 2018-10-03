import React, { Component } from 'react';
import TodoList from './components/TodoComponents/todoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [] };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(input) {
    const { todoList } = this.state;
    let todo = {
      task: input,
      id: Date.now().toString(),
      completed: false
    }
    console.log(todo);
    this.setState({ todoList: [...todoList, todo] })
  }

  render() {
    const { todoList } = this.state;

    return (
      <div className="App">
        <h1>Todo List: MVP</h1>
        <TodoList todoList={todoList} />
        <TodoForm onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default App;
