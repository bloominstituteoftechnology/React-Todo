import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.todo;
  }

  render() {
    return (
      <div>
        <h3
          id={this.state.id}
          className={this.state.completed ? 'checked' : ''}
          onClick={this.props.toggleComplete}
        >
          {this.state.task}
        </h3>
      </div>
    );
  }
}

export default Todo;
