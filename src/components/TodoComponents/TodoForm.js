import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemText: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addItem(this.state.itemText, event);
    this.setState({ itemText: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="itemText"
          value={this.state.itemText}
          onChange={this.changeHandler}
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
