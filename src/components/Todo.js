import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChange(this.props.todo.id)}
        />
        {this.props.todo.task}
      </div>
    );
  }
}
export default Todo;
