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
    this.props.addItem(e, this.state.todoItem)
    // this.setState({ todoItem: "" })
  };

  render() {
    console.log("rendering form", this.state.todoItem);
    
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          placeholder="Add new task here"
          name="todoItem"
          onChange={this.handleChanges}
        ></input>
        <button>Add Todo</button>
        <button className="clear-btn" onClick={this.props.clearPurchased}>
        Clear Purchased
      </button>
      </form>
    );
  }
}

export default TodoForm;
