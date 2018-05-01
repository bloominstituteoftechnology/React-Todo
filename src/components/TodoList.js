import React, { Component } from "react";
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: ['Task 1', 'Task 2']
    };
  }

  handleSubmitTodo = () => {
    const { todos } = this.state;
    todos.push(this.state.newTodo);
    this.setState({ todos, newTodo: '' });
  }

  handleAddTodo = e => {
    this.setState({ [e.target.name] : e.target.value });
  }

  render() {
    return (
      <div> 
        {this.state.todos.map((todo, index) => <Todo key={index} todo={todo}></Todo>)}

        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          placeholder="add todo"
          onChange={this.handleAddTodo}
        />
        <button onClick={this.handleSubmitTodo}>Add Todo</button>
      </div> 
    );
  }
}


export default TodoList;
