import React, { Component } from "react";
import { Button, Input } from "@material-ui/core";
import "./TodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super();
    this.state = {
      todo: "",
    };
  }

  handleChanges = e => {
    console.log("sh TodoForm.js: " + e.target.value)
    this.setState({ todo: e.target.value })
  }

  handleSubmit = e => {
    //prevent default refresh
    e.preventDefault();
    this.props.addTodo(this.state.todo)
    //reset input
    this.setState({ todo: "" });
  }

  determineSomething = e => {
    if (e.target.name === "button") {
      if (e.target.value === "Add Todo") {
        e.target.onClick = this.handleSubmit
      }
      else {
        e.target.onClick = this.props.clearCompleted
      }
    }
  }
  
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <Input 
            type="text" 
            name="todo" 
            value={this.state.todo} 
            onChange={this.handleChanges}
            placeholder="Todo"
            className="input"
            color="secondary"
          />
        </form>
        {/* formatted this way as easy fix to avoid some bugs I was experiencing 
            I keep submit on enter, and full button functionality, without annoying quirks
            In Kemp's code, the clear button and add button were in seperate files.
        */}
        <div className="form-buttons">
          <Button color="primary" variant="contained" onClick={this.handleSubmit}>
            Add Todo
          </Button>
          <Button color="secondary" variant="contained" onClick={this.props.clearCompleted}>
            Clear Completed
          </Button>
        </div>
      </div>
    )
  }
}

export default TodoForm;


// bugs
// with no <form onSubmit={this.handleSubmit}>
  // <input type="submit" value="Add Todo" onClick={this.handleSubmit} />
  // <input type="submit" value="Clear Completed" onClick={this.props.clearCompleted}
  // Clear button will remove entire list (regardless of <button> or <input> tag used)
// solution
  // to remove a list item without flushing the input value, I have moved the clear button 
  // outside of the scope of the form
  // example:
    /* if I fill the input with 'f' and then click clear it will default to the onSubmit 
    function. If I have 'f' as an item already, it just clears the input and keeps 'f' in the list -- when 'f' is 
    selected, if not selected, it adds another 'f'. Removing it from form fixes all bugs. */