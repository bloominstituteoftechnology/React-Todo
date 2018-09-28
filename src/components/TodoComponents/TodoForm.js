import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input value={this.props.todo} onChange={this.props.inputChange} />
          <button type="submit" onClick={this.props.addTodo}>
            Add Todo
          </button>
          <button onClick={this.props.clear}>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
