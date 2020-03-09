import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor(props) {
    super();
    this.state = {
      task: ""
    };
  }
  handleChanges = e => {
    this.setState({
        task: e.target.value
    });
    
  };
  // class property to submit form
  submitForm = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    console.log(this.state.task);
    this.setState({
        task: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.submitForm}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChanges}
          placeholder="...todo"
        />
        <button>Add to List</button>
      </form>
    );
  }
}

export default TodoForm;
