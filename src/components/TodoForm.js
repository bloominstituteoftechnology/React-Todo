import React from "react";

class TodoForm extends React.Component {

  render() {
    return (
    <div>
        <form onSubmit={this.props.addTodo}>
        <input type="text" id="task" name="task"></input>
      <button type="submit">Add Todo</button>
      <button onClick={this.props.clearTodos}>Clear</button>
      </form>
    </div>
    )}
}

export default TodoForm;
