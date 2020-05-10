import React from "react";

// tasks
// 1. add constructor with state that has itemName
// 2. on input add avalue attribute and pass new state property
// 3. build a handleChanges action handler that will update the new state
// 4. add onChange

class TodoForm extends React.Component {
  // constructor with state
  constructor() {
    super();
    this.state = {
      itemName: ""
    };
  }
  handleChanges = e => {
    // update state with eack keystroke
    this.setState({ itemName: e.target.value});
    console.log(this.state.itemName);
  };

  handleSubmit = e => {
    
  };

  render() {
    console.log("rendering form");
    return (
      <form>
        {/* This is an uncontrolled component and we want it to be controlled by state */}
        <input
        type="text"
        task="item"
        value={this.state.itemName}
        onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}


export default TodoForm;