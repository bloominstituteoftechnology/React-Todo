import React from "react";
import "./Todo.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }

  //synthetic event: that react has created
  handleChanges = e => {
    console.log("event:", e.target.value);
    // update the task property on state
    this.setState({ [e.target.name]: e.target.value });
  };

  //empty string clears the added todo in the input
  submitTodo = e => {
    this.setState({
      todo: ""
    });
    this.props.addTodo(e, this.state.todo);
  };

  render() {
    return (
      //IMP step: have to wrap it in an anonymous function like this
      <form onSubmit={this.submitTodo}>
        <input
          className="text"
          value={this.state.todo}
          onChange={this.handleChanges} // onChange takes in a function definition -- when the user types, React calls the function, and passes in the event -> props.updateName(event)
          placeholder="...add new todo"
          type="text"
          name="todo"
        />
        <button className="button">Add Todo</button>
        <button className="button">Clear</button>
      </form>
    );
  }
}

export default TodoForm;
