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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="item"
            placeholder="Add task"
            value={this.state.toDoText}
            onChange={this.handleChanges}
          />
          <button>Add</button>
        </form>
        <button className="clear-btn" onClick={this.props.clearCompleted}>
          Clear completed tasks
        </button>
      </div>
    );
  }
}

export default ToDoForm;
