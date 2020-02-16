import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addItem(this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="task"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <button type="submit" onClick={this.props.addItem()}>
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
