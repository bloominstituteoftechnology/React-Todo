import React, { Component } from 'react';
import Todo from './todo';

class TodoList extends Component {
  constructor () {
    super();
    this.state = {
      newTodo : '',
      todos : []
    };
  }
  
  keepCurrent = (event) => {
    this.setState( { newTodo: event.target.value } );
  }

  addTodo = (event) => {
    event.preventDefault();
    const todoupdated = this.state.todos;
    todoupdated.push(this.state.newTodo);
    this.setState( { 
      todos : todoupdated,
      newTodo : '' 
    } );
  }
  
  render () {
    return (
      <div>
        {this.state.todos.map((todoitem, i) => <Todo key={i} todo={todoitem} />)}
        <form onSubmit={this.addTodo}>
          <input onChange={this.keepCurrent} placeholder="I need to..." value={this.state.newTodo} />
        </form>
      </div>
    );
  }
}

export default TodoList;