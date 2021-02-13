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
      <form className='d-flex flex-column justify-content-center' onSubmit={this.submitTask}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.changeHandler}
          placeholder="input your goal"
          style={{
            boxShadow: "-1rem -1rem 1rem #362819	",
            color: "white",
            backgroundColor: "black",
            borderRadius: '10px',
            textAlign: 'center,',
            padding: '1.5rem 0',
            fontSize: '1.2rem'
          }}
        />
        <button className='btn' type="submit">
          {" "}
          +{" "}
        </button>
        <span style={{padding: '3rem'}}>Touch your goal then press the goal accomplished button to clear it away</span>
      </form>
    );
  }
}

export default TodoForm;
