import React, { Component } from "react";
import Title from "./Footer";

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
           title: "Welcome to TodoApp",
           todo: "",
           valp: "",
           todos: ""
        };
    }

    handleNameChange = event => {
        this.setState({[event.target.name]: event.target.value});
    
    };

    handleSubmitTodo = () => {
        const todos = this.state.todos;
        const todo = { name: this.state.todo, id: this.state.todo + todos.length};
        todos.push(todo);
        this.setState({ todos: todos, todo: ""})
    }

    render() {
        return (
          <div>
            <h1>{this.state.title}</h1>
            <TodosList todos={this.state.todos} />
            <input
              name="char" // should be known as the state.value of the thing we update
              onChange={this.handleNameChange}
              value={this.state.todo} // should be bound to the state.value of thing we update
              placeholder="todo list"
            />
            <button onClick={this.handleSubmitChar}>Addtodo</button>
          </div>
        );
      }
} 