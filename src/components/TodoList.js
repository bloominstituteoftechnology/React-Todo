import React, { Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: []
    }
  }

  handleListInput = e => {
    this.setState({ newTodo: e.target.value }
  )};


  addTodo = e => {
    e.preventDefault();
    const updatedTodos = this.state.todos;
    updatedTodos.push(this.state.newTodo);   
    this.setState({
      newTodo: '',
      todos: updatedTodos
    }); 
  };
   

  render() {
    return (
      <div>
    {this.state.todos.map((todo, i) => <Todo key = {i} todo={todo} />)}
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleListInput} placeholder="What do you need to do?" value={this.state.newTodo} />
        </form>
      </div>
    );
  }
}

  

export default TodoList; 