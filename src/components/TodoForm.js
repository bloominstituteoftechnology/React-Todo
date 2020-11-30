import React from "react";

export default class TodoForm extends React.Component {
  //CCR
  constructor() {
    super();
    this.state = {
      newItem: "",
    };
  }

  handleChanges = (event) => {
    this.setState({
      newItem: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddItem(this.state.newItem);
    this.setState({ newItem: "" });
  };
  handleClear = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.clearItems();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Need To-Do..."
            onChange={this.handleChanges}
            value={this.state.newItem}
          />
          <button>Submit</button>
          <button onClick={this.handleClear}>Clear</button>
        </form>
      </div>
    );
  }
}
