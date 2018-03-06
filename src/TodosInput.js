import React, { Component } from 'react';
import TodosList from './TodosList';

class TodosInput extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      todo: '',
      id: 1
    };
  }

  handleInputChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  deleteTodo = (todoItem) => {
      const newTodos = this.state.todos.filter(item => {
        return item !== todoItem;
      })
      console.log(todoItem)
      this.setState({ todos: newTodos, todo: '' });
  }

  addTodo = (event) => {
    event.preventDefault();
    const todos = this.state.todos.slice(0);
    let id = this.state.id;
    const newTodo = {text: this.state.todo, id}; // copy of current state

    todos.push(newTodo);
    this.setState({
      todos: newTodo,
      todo: '',
      id: ++id
    });
  };

  


  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleInputChange} placeholder="Add Todo" value={this.state.todo} />
        </form>
        {console.log(this.state.todos)}
        {this.state.todos.map(todo => <TodosList todo={todo} deleteTodo={this.deleteTodo} />)}
    </div>
  )
}
}

export default TodosInput;