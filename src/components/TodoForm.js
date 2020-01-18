import React from "react";


class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      itemName: "Enter Todo Here"
    };
  }
  handleChanges = e => {
    this.setState({ itemName: e.target.value });
    console.log(this.state.itemName);
  };

  handleSubmit = e => {
    this.props.addItem(e, this.state.itemName);
    this.setState({ itemName: "" });
  };
  // class property to submit form

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          value={this.state.itemName}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;