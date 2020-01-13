import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoText: ""
    };
  }

  handleChanges = e => {
    //update state with each keystroke
    this.setState({
      toDoText: e.target.value
    });
  };

  //class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.toDoText);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          placeholder="Add task"
          value={this.state.toDoText}
          onChange={this.handleChanges}
        />
        <button>Add</button>
        <button>Clear completed</button>
      </form>
    );
  }
}

export default ToDoForm;
