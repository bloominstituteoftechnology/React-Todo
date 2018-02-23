//left to do http://html5doctor.com/storing-data-the-simple-html5-way-and-a-few-tricks-you-might-not-have-known/
//https://stackoverflow.com/questions/44831916/how-to-delete-a-todo-item-onclick-in-react
import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
    this.delTodo = this.delTodo.bind(this);
    //let localStorage.todos = JSON.stringify(todos);
    //let todos = JSON.parse(localStorage.todos);
  }

  handleTodoInput = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  addTodo = (event) => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: todoList
    });
  }

  delTodo = (event) => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.pop(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: todoList
    });
  }

  render() {

    let buttonStyle = {
        marginLeft: 10,
        backgroundColor:"blue"
    };
    return (
      <div>
        {this.state.todos.map((todo, i) => <Todo key={i} thing={todo} delTodo={this.delTodo} />)}
        <form onSubmit={this.addTodo}>
          <input onChange={this.handleTodoInput} placeholder="Add a todo" value={this.state.newTodo} />
          <button style={buttonStyle}>submit</button>
        </form>
      </div>
    );
  }
}

export default TodoList;
