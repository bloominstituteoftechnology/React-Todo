import React, {Component} from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: "" 
    };
  }

 listChangeHandler = (e) => {
    this.setState({ listItem: e.target.value });
  };

  addtoListHandler = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.listItem);
    this.setState({ listItem: "" });
  };

  render() {
    return (
      <form onSubmit={this.addtoListHandler}>
        <input
          type="text"
          name="todoItem"
          value={this.state.todoItem}
          onChange={this.listChangeHandler}
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default TodoForm;