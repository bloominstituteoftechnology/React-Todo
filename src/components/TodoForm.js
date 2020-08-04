import React from "react";
import "../components/Todo.css";

class TodoForm extends React.Component {
  // you always extend from React.Component in React
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ todoText: e.target.value });
  };
  submitTask = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({
      todoText: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.submitTask} className="form-field">
        <input
          type="text"
          name="todoText"
          placeholder="Add Something Here"
          value={this.state.todoText}
          onChange={this.changeHandler}
        />
        <button> Add Todo</button>
        <button className="clear-btn" onClick={this.props.clearTodo}>
          Clear
        </button>
      </form>
    );
  }
}

export default TodoForm;