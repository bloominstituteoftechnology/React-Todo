// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from "react";

class Header extends Component {
  constructor () {
    super();
    this.state = {
    title: 'To Do List',
    todo: '',
    todos: [ 
      {
        task: 'Exercise',
        id: 1, 
        completed: false
      },
      {
        task: 'Grocery Shopping',
        id: 2, 
        completed: false
      },
      {
        task: 'Pick up Kids',
        id: 3, 
        completed: false
      }
    ]}
  }

  inputToDo = event => {    
    this.setState({ [event.target.name]: event.target.value });
  }; 

  addToDo = () => {    
    const todos = this.state.todos;
    const todo = { name: this.state.todo, id: this.state.todo + todos.length };
    todos.push(todo);
    this.setState({ todos: todos, todo: "" });
  };

  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
        {/* 
          take the chars data from state, 
          loop over that data, 
          for each item in chars array, return a dom element 
        */}
        <ul> 
          {this.state.todos.map((todo, i) => <ListToDo key={i} todo={todo} />)};
        </ul>

        <ListToDo todos={this.state.todos} />

        <input
          name="todo" // should be known as the state.value of the thing we update
          onChange={this.inputToDo}
          value={this.state.todo} // should be bound to the state.value of thing we update
          placeholder="type to do list"
        />
        <button onClick={this.addToDo}>Add To Do List</button>
      </div>
    );
  }
}
