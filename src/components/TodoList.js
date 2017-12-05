import React, { Component } from 'react';
import Input from './Input/Input';
import Todo from './Todo/Todo';

class TodoList extends Component {

  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: "",
    };

    if (window.localStorage.todos !== null) {
      this.state.todos = JSON.parse(window.localStorage.todos);
    }
  }
  
  updateTodoOnChange = (event) => {
    event.preventDefault();

    this.setState({
      todos: this.state.todos,
      newTodo: event.target.value
    });
  }

  addTodo = (event) => {
    event.preventDefault();
    
    const newTodo = {
      text: this.state.newTodo,
      completed: false
    };

    const list = this.state.todos;
    list.push(newTodo);

    this.setState({
      todos: list, 
      newTodo: "" 
    });

    this.updateLocalStorage();
  }

  markComplete = (index) => {
    const list = this.state.todos;
    list[index].completed = !list[index].completed;

    this.setState({
      todos: list
    });

    this.updateLocalStorage();
  };

  deleteTodo = (index) => {
    const list = this.state.todos;
    list.splice(index, 1);

    this.setState({
      todos: list
    });

    this.updateLocalStorage();
  };

  updateLocalStorage = () => {
    window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <div>
        <Input onSubmit={this.addTodo} onChange={this.updateTodoOnChange} value={this.state.newTodo} />
        {this.state.todos.map((thisTodo, i) => (
            <Todo key={i} 
                  index={i} 
                  todo={thisTodo.text} 
                  completed={thisTodo.completed} 
                  onClick={this.markComplete}
                  onDelete={this.deleteTodo} />
          )
        )}
        
      </div>
    );
  }

}

export default TodoList;