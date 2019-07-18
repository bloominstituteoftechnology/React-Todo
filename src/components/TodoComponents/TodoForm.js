import React from "react";
import "../TodoComponents/Todo.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: ""
    };
  }
  handleChange = e => {
    this.setState({ currentTask: e.target.value });
    // console.log(this.state.currentTask);
  };
  submitClick = e => {
    e.preventDefault();
    this.props.addTask(this.state.currentTask);
    this.setState({ currentTask: "" });
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Add to-do..."
        />
        <button onClick={this.submitClick}>Submit</button>
        {/* <button onClick={props.handleClear}>Clear</button> */}
      </div>
    );
  }
}

export default TodoForm;
