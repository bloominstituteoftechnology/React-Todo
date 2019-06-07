import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: ""
    };
  }

  changeHandler = event => {
    this.setState({ todoItem: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addNewTodo(this.state.todoItem);
    this.setState({ todoItem: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          value={this.state.todoItem}
          placeholder="Todo"
          type="text"
          onChange={this.changeHandler}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}


export default TodoForm;
