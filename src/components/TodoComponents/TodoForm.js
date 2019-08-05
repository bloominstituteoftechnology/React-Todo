import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
  }

  // handleChanges = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  submitTodo = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
  };

  render() {
    return (
      <form onSubmit={submitTodo}>
        <input
          type="text"
          value=""
          name="todo"
          // onChange=
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
