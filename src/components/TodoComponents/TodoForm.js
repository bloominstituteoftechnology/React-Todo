import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.item}
            name="item"
            placeholder="add todo"
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
      </>
    );
  }
}
export default TodoForm;
