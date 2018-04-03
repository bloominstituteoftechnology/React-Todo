import React, { Component } from 'react';
import TodosList from './TodosList';

class TodosInput extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      todo: '',
      id: 0,
    };
  }

  handleInputChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  deleteTodo = (todoItem) => {
      const newTodos = this.state.todos.filter(item => {
        return item !== todoItem;
      });
      this.setState({ todos: newTodos, todo: ''});
  }

  addTodo = (event) => {
    event.preventDefault();
    let id = this.state.id;
    const todoList = this.state.todos; // copy of current state

    const newTodo = {
      text: this.state.todo,
      id: ++id,
      complete: false
    }

    todoList.push(newTodo);
    this.setState({
      todos: todoList,
      todo: '',
      id: id
    });
  };

  


  render() {
    return (
      <div>
        {console.log(this.state)}
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleInputChange} placeholder="Add Todo" value={this.state.todo} />
        </form>
        {this.state.todos.map(element => <TodosList todo={element} deleteTodo={this.deleteTodo} key={element.id} />)}
    </div>
  )
}
}

export default TodosInput;