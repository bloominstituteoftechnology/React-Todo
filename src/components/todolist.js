import React, { Component } from 'react';
import Todo from './todo.js';

class TodoList extends Component {
  constructor () {
    super();
    this.state = {
      currenttodo : '',
      todoitems : []
    };
  }
  
  keepCurrent = (event) => {
    this.setState( { currenttodo: event.target.value } );
  }

  addToList = (event) => {
    event.preventDefault();
    const todoupdated = this.state.todoitems;
    todoupdated.push(this.state.currenttodo);
    this.setState( { 
      todoitems : todoupdated,
      currenttodo : '' 
    } );
  }
  
  render () {
    return (
      <div>
        <div>{this.state.todoitems.map((todoitem, i) => <Todo key={i} todo={todoitem} />)}</div>
        <form onSubmit={this.addToList}>
          <input onChange={this.keepCurrent} placeholder="I need to..." value={this.state.currenttodo} />
        </form>
      </div>
    );
  }
}

export default TodoList;