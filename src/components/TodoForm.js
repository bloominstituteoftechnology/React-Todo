import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="type TODO here"
          onChange={(event) => this.props.handleInputChange(event.target.value)}
        />
        <div>
          <button onClick={() => console.log("Add")}>Add</button>
          <button onClick={() => console.log("Delete")}>Remove</button>
        </div>
      </div>
    );
  }
}

export default TodoForm;
