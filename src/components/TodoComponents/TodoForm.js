import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  changeHandler = event => {
    //event.target.value
    this.setState({ inputText: event.target.value });
    //can include an object in setState and the key you want it to be
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.createNewTodoObject(this.state.inputText);
    this.setState({ inputText: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.changeHandler}
        />
        <div>
          <button type="submit">Add Todo</button>
          <button onClick={this.props.clear}>Clear Completed</button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
