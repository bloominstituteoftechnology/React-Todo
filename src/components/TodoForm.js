import React from "react";

class TodoForm extends React.Component {
  // Creating a constructor state
  constructor() {
    super();
    this.state = {
      todoText: "",
    };
  }

  render() {
    return (
      <form>
        <input type="text" name="todoText" value={this.state.todoText} />
        <button>+Add</button>
      </form>
    );
  }
}
export default TodoForm;
