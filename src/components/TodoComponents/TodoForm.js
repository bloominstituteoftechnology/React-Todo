import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  handleChanges = (e) => {
   this.setState({ [e.target.name]: e.target.value });
  }

  submitTodo = (e) => {
    e.preventDefault();
     // take the todo off of state
     // send that todo to a function defined on App.js
     this.props.addTodo(this.state.todo)
     // reset the state
     this.setState({ item: ''});
  }
  

  render() {
    return (
      <form onSubmit={this.submitTodo}>
       <input
         type='text'
         name='todo'
         value={this.state.task}
         onChange={this.handleChanges}
        />
        <button type='submit'>Add ToDo</button>
        <button>Clear Completed</button>
      </form>
    );
  };
};

export default TodoForm;

//<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.

//Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.

//Once a todo is submitted, the Todo List should re-render and show the added todo.

///////////////////////////////////////////////
//EXAMPLE
/*
import React from "react";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitItem = e => {
    e.preventDefault();
    // take the item off of state
    // send that item to a function defined on App.js
    this.props.addItem(this.state.item);
    // reset the state
    this.setState({ item: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;
*/