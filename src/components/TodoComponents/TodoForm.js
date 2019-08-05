import React from "react";

export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.task);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitItem}>
          <input
            type="text"
            placeholder="list here"
            value={this.task}
            name="task"
            onChange={this.handleChanges}
          />
          <button onClick={this.submitItem}>Add ToDo!</button>
        </form>
      </div>
    );
  }
}
