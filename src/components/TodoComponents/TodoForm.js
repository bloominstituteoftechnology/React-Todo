import React from "react";

class TodoForm extends React.Component {
  // First make a constructor with state

  constructor() {
    super();
    this.state = {
      todoText: "",
    };
  }
  //update state every time something is typed in the form
  handleChanges = e => {
    this.setState({
      todoText: e.target.value,
    });
  };

  //call addItem from App once the form is submitted

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.todoText);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.todoText}
          onChange={this.handleChanges}
        />
        <button>Add Item</button>
      </form>
    );
  }
}

export default TodoForm;
