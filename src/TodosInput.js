import React, { Component } from 'react';
import TodosList from './TodosList';

class TodosInput extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      todo: '',
      id: 0
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
    const newTodo = this.state.todos; // copy of current state

    //     const todoToAdd = {
    //   text: this.state.newTodo,
    //   complete: false
    // }
    
    // todosList.push(todoToAdd);

    newTodo.push(this.state.todo);
    this.setState({
      todos: newTodo,
      todo: '',
      id: ++id
    });
  };

  


  render() {
    return (
      <div>
        {console.log(this.state)}
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleInputChange} placeholder="Add Todo" value={this.state.todo} />
        </form>
        {this.state.todos.map(todo => <TodosList todo={todo} deleteTodo={this.deleteTodo} key={this.id} />)}
    </div>
  )
}
}

export default TodosInput;