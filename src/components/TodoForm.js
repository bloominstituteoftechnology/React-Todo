import { render } from "@testing-library/react";
import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            textInput: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            textInput: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.textInput);
        this.setState({ textInput:"" });
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.textInput} type="text" name="task" placeholder="New task..." />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
