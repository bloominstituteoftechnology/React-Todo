import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  //   Handling changes

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //   Handleing Submit

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ item: "" });
    this.props.addItem(e, this.state.item);
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          placeholder="Add a new task?"
          onChange={this.handleChanges}
        />
        <button>Add to List</button>
      </form>
    );
  }
}

export default TodoForm;
