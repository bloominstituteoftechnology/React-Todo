import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }
  render() {
    return (
      <div className="todo-form">
        <form onSubmit={e => this.submitTodo(e)}>
          <input
            id="todo-input"
            type="text"
            onChange={e => this.inputChangeHandler(e)}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }

  inputChangeHandler = e => {
    this.setState({ todo: e.target.value });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    document.getElementById("todo-input").value = "";
  };

  clearCompleted = () => {};
}

export default TodoForm;
