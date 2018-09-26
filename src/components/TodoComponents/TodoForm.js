import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.taskInputRef = React.createRef();
    this.state = {
      task: ""
    };
  }

  handleInput = event => {
    this.setState({
      task: event.target.value
    });
  };

  handleAddTodo = event => {
    event.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: ""
    });
    this.taskInputRef.current.value = "";
  };

  handleClearCompleted = event => {
    event.preventDefault();
    console.log("Clear Completed");
  };

  render() {
    return (
      <form>
        <input
          onChange={this.handleInput}
          placeholder="...todo"
          ref={this.taskInputRef}
        />
        <input type="submit" value="Add Todo" onClick={this.handleAddTodo} />
        <button onClick={this.handleClearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
