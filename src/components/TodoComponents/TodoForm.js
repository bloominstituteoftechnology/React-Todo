import React from "react"

class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      newTodo: ""
    }
  }

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    })
  }

  handleSubmit = e => {
    console.log("executed handleSubmit", this, this.state.newTodo)
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.props.remTodo();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        >
        </input>
        <button >Add Todo</button>
        <button onClick={this.clearCompleted}>Clear completed</button>
      </form>
    )
  }
}

export default TodoForm;
