import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.todo;
  }

  render() {
    return (
      <div>
        <p
          id={this.state.id}
          className={this.state.completed ? 'line-through' : ''}
          onClick={this.props.toggleComplete}
        >
          {this.state.task}
        </p>
      </div>
    );
  }
}

export default Todo;
