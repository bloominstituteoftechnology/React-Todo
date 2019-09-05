// tasks
// 1. add constructor with state that has itemName X
// 2. on input add a value attribute and pass new state property X
// 3. build a handleChanges action handler that will update the new state X
// 4. dont forget onChange X

import React from "react";

// Constructor with state
class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemTask: ""
    };
  }

  // update state with each keystroke
  handleChanges = e => {
    this.setState({ itemTask: e.target.value });
    console.log(this.state.itemTask);
  };

  // class property to submit form
  handleSubmit = e => {
    this.props.addItem(e, this.state.itemTask);
    this.setState({ itemTask: "" });
  };

  render() {
    console.log("form working");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          value={this.state.itemTask}
          onChange={this.handleChanges}
        />
        <button>Add Thing To Do</button>
      </form>
    );
  }
}

export default ListForm;
