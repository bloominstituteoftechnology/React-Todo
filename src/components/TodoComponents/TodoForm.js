import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemText: ""
    };
  }

  changeHandler = event => {
    this.setState({ itemText: event.target.value });
    console.log(event.target.value);
  };

  submitHander = event => {
    event.preventDefault();
    this.props.addTodoItem(this.state.itemText);
    this.setState({itemText: ''})
  };

  render() {
    return (
      <form onSubmit={this.submitHander}>
        <input
          type="text"
          name="itemText"
          value={this.state.itemText}
          onChange={this.changeHandler}
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default TodoForm;
