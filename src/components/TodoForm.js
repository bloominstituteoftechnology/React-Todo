import React from "react";

/*
    1. add a constructor that creates state (itemName)
    2. on the input component add a 'value' property that gets it's value from the newly created state
    3. build out handleChanges to update the state with each keystroke
    4. don't forget to use the onChange property on the input component
*/

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      itemName: null
    };
  }
  handleChanges = (e) => {
    // update state with each keystroke
    this.setState({
      itemName: e.target.value
    });
  };

  // class property to submit form

  render() {
    return (
      <form>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" />
        <button onClick={this.handleChanges}>Add</button>
      </form>
    );
  }
}

export default TodoForm;
