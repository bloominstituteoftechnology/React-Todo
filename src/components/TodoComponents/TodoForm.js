import React from "react";

class TodoForm extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = { task: "" };

    const todoChangeHandler = event => {
      this.setState({ task: event.target.value });
    };

    const submitChange = event => {
      event.preventdefault();
      this.props.addTask(this.state.task);
    };

    return (
      <form onSubmit={this.submitChange}>
        <input placeholder="add task..." onChange={this.todoChangeHandler} />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
