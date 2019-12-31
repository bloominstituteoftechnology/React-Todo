import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItem: ""
    };
  }

  handleChanges = e => {
    this.setState({
      todoItem: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todoItem !== "") {
      this.props.addTask(this.state.todoItem);
      this.setState({
        todoItem: ""
      });
    }
  };
  render() {
    return (
      <section className="form-container">
        <label forhtml="to do list" hidden />
        <form id="to do list" onSubmit={this.handleSubmit} className="form">
          <input
            className="input"
            placeholder="I need to..."
            onChange={this.handleChanges}
            type="text"
            name="item"
            value={this.state.todoItem}
          />
          <button className="add-button">Add Items</button>
        </form>
      </section>
    );
  }
}

export default TodoForm;
