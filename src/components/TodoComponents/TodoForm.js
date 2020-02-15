import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItem1: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    // console.log(e)
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };

  // class property to submit form
  submitItem = e => {
    e.preventDefault()
    console.log(this.props)
    this.props.addItem(e, this.state.todoItem1)
    this.setState({ todoItem1: "" })
  };

  render() {
    console.log("rendering form", this.state.todoItem);
    
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value= {this.state.todoItem1}
          placeholder="Add new task here"
          name="todoItem1"
          onChange={this.handleChanges}
        ></input>
        <button className="add-to-do-btn">
          <span>Add Todo</span>
        </button>
        <button className="clear-btn" onClick={this.props.clearPurchased}>
          <span>Clear Purchased</span>
        </button>
      </form>
    );
  }
}

export default TodoForm;
