import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      jobName: ""
    };
  }

  handleChanges = e => {
    this.setState({
      jobName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.jobName !== "") {
      this.props.addJob(this.state.jobName);
      this.setState({
        jobName: ""
      });
    }
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChanges}
          type="text"
          name="job"
          value={this.state.jobName}
        />
        <button>Add Job</button>
      </form>
    );
  }
}

export default TodoForm;
