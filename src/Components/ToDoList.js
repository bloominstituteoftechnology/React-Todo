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
      console.log("TODOS", todos);
      todos.push(this.state.newTodo);

      this.setState({
        newTodo: '',
        todos: todos,
      });
    };

    handleNewTodo = (event) => {
      this.setState({ newTodo: event.target.value });
    };

  
    render() {
        return (
          <div>
            { this.state.todos.map((todo, i) => {
              return (
              <Todo key={i} todo={todo}/> 
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