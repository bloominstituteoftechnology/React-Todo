import React, { Component } from 'react';
import Todo from './Todo.js'

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: { text: '' },
    };

  }

  addTodo = (event) => {
    event.preventDefault();
    console.log('addTodo');
    
    const todos = this.state.todos.slice(0);
    todos.push(this.state.newTodo);

    this.setState({
      todos,
      newTodo: { text: '' },
    });

    event.stopPropagation();
  }

  handleNewTodo = (event) => {
    event.preventDefault();

    console.log('handleNewTodo');
    const newTodo = {};
    newTodo.id = event.target.value.length;
    newTodo.text = event.target.value;
    newTodo.completed = false;
    
    this.setState({ newTodo });

    event.stopPropagation();
  }

  toggleCompleted(id) {
    console.log('toggleCompleted')
    console.log(id);
    // console.log(id);
    // console.log(event);
    // console.log(event.Handler);
    let thisTodo;
    const todos = this.state.todos.slice(0);
    todos.forEach(todo => {
      // console.log(todo.id);
      // if (todo.id === id) thisTodo = todo;
    });
    // const thisTodo = todos[index];

    // console.log(thisTodo);
    // event.stopPropagation();
  }

  deleteTodo() {
    console.log('delete');
    // e.stopPropagation()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleNewTodo} placeholder="Add new task" value={this.state.newTodo.text} />
          <button onClick={this.addTodo}>Submit</button>
        </form>
        <br />
        {this.state.todos.map((todo, i) => {
          return (
            <Todo key={i}
            id={i}
            todo={todo}
            toggleCompleted={this.toggleCompleted.bind(this)}
            deleteTodo={this.deleteTodo.bind(this)} />
          );
        })}
      </div>
    );
  }
}

export default TodoList;