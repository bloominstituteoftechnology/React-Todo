import React from "react";
import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marked: false
    };
  }

  completedHandler = () => {
    const currentState = this.state.marked;
    this.setState({ marked: !currentState });
  };

  render() {
    return (
      <li
        className={this.state.marked ? 'completed' : null}
        onClick={this.completedHandler}>{this.props.todo.task}</li>
    );
  }
}

export default Todo;
