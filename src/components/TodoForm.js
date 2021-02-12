import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }
  changeHandler = (e) => {
    console.log(e.target.value);
    this.setState({ task: e.target.value });
  };

  submitTask = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ ...this.state, task: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.changeHandler}
          placeholder="input your goal"
          style={{
            boxShadow: "-1rem -1rem 1rem #362819	",
            color: "lightblue",
            backgroundColor: "black",
            borderRadius: '10px'
          }}
        />
        <button className='btn' type="submit">
          {" "}
          +{" "}
        </button>
      </form>
    );
  }
}

export default TodoForm;
