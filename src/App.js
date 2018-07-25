import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos : []
    }
  }
  handleAddTodo = e => {
    const todos = this.state.todos.slice();
    todos.push({
      id: Date.now(),
      task: e,
      completed: false
    });
    this.setState({ todos: todos })
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm handleAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}


