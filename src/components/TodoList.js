import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component {
  constructor () {
    super();

    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  addTodo = (event) => {
    event.preventDefault();
    const myTodoList = this.state.todos;
    myTodoList.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: myTodoList
    });
  };

  handleTaskInput = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.todos.map(task => <Todo done={task} />)}
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleTaskInput} placeholder="Add new task" value={this.state.newTodo} />
        </form>
      </div>
    );
  }

}

export default TodoList;