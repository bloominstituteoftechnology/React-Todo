import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.item);
  };

  // class property to submit form
  submitItem = e => {
    e.preventDefault();

    this.setState({ item: "" });
    this.props.addItem(e, this.state.item);
  };

  render() {
    console.log("ListForm Props:", this.props);
    return (
      <form onSubmit={this.submitItem}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Needs to Be Done</button>
      </form>
    );
  }
}

export default TodoForm;