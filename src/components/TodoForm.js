import React from "react";

class TodoForm extends React.Component {
  state = {
    activity: "",
  };

  handleChanges = (e) => {
    this.setState({
      activity: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addActivity(this.state.activity);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="activity"
          value={this.state.activity}
          onChange={this.handleChanges}
        />
        <button>Add Activity</button>
      </form>
    );
  }
}

export default TodoForm;
