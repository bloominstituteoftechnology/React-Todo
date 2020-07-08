import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super();
    this.state = {
      todo: ""
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
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* clear input after 'enter' */}
          <input 
            type="text" 
            name="todo" 
            value={this.state.todo} 
            onChange={this.handleChanges}
            placeholder="Todo"
          />
          <button>
            Add todo
          </button>
          <button
            onClick={this.props.clearCompleted}
          >
            Clear Completed
          </button>
        </form>
      </div>
    )
  }
}

export default TodoForm;