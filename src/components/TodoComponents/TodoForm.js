import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    };
  }
  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      newTodo: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ""
    });
  };
  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          style={{
            backgroundColor: "transparent",
            width: "150px",
            height: "20px",
            borderRadius: "20px",
            border: "1px solid black",
            color: "black"
          }}
          type="text"
          name="item"
          placeholder="add todo..."
          value={this.state.newTodo}
          onChange={this.handleChanges}
        />
        <div>
          <button
            style={{
              backgroundColor: "transparent",
              borderRadius: "20px",
              border: "1px solid black"
            }}
            type="submit"
          >
            Add Todo
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              borderRadius: "20px",
              border: "1px solid black"
            }}
            onClick={this.props.clearCompleted}
          >
            Clear Completed
          </button>
        </div>
      </form>
    );
  }
}
export default TodoForm;
