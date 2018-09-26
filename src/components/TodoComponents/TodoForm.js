import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <input />
        <button onClick={this.handleClick}>Add todo</button>
        <button>clear completed</button>
      </div>
    );
  }
}

export default TodoForm;