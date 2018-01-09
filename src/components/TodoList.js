import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleTodoInput = (event) => {
    this.setState({newTodo: event.target.value})
  }

  addTodo = (event) => {
    event.preventDefault();
    const updateTodo = this.state.todos;
    updateTodo.unshift(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: updateTodo
    });
  }

  removeTodo = (index) => {
    let removeList = this.state.todos;
    removeList.splice(index, 1);
    this.setState({todos: removeList});
  }

  render() {
    return (
      <div>        

        
        <form onSubmit={this.addTodo}>
          <input id="test" 
            onChange={this.handleTodoInput}
            placeholder="This is Bananas"
            value={this.state.newTodo}
          /><button id="submitBut">Submit</button>
          </form>
          
          <div>
          {this.state.todos.map((todo, i) => 
            <Todo key={i} index={i} todo={todo} remove={this.removeTodo.bind(this)} />
          )}
        </div>  

          </div>
      

      
      
    );
  }
}

export default TodoList;