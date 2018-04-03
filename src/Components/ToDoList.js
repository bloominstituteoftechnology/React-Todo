import React, { Component } from 'react';
import Todo from './Todo';

 class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: "",
        };
    }

    addTodo = (event) => {
      event.preventDefault();
      const todos = this.state.todos;
      todos.push(this.state.newTodo);
      this.setState({
        newTodo: '',
        todos: todos,
      });
    };

    handleNewTodo = (event) => {
      const newTodo = event.target.value;
      this.setState({ newTodo: newTodo });
    };

    render() {
        return (
          <div>
            { this.state.todos.map((todo, i) => {
                return (
                <Todo key={i} todo={todo}  onClick = {this.clickHandler} /> 
                )
              })
            }

            <form onSubmit={ this.addTodo }>
              <input type="text" onChange={ this.handleNewTodo } placeholder="Add a task!" value={ this.state.newTodo } />
            </form>
              
          </div>
      );   
  }
}

export default TodoList;