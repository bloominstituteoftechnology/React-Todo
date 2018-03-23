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
      this.setState({ newTodo: event.target.value });
    };

    completeTodo = (event) => {
      const items = document.getElementsByClassName('item');
      Array.from(items).forEach(item => {
        item.addEventListener('click', () => {
          item.classList.toggle("complete");
        });
      });
    }
  
    render() {
        return (
          <div>
            { this.state.todos.map((todo, i) => {
                return (
                <Todo key={i} todo={todo}  onClick = {this.completeTodo} /> 
                )
              })
            }

            <form onSubmit={ this.addTodo }>
              <input type="text" onChange={ this.handleNewTodo } placeholder="Add a task!" value={ this.state.newTodo } />
            </form>
              
          </div>
      )   
  }
}

export default TodoList;