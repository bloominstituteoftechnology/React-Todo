import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }
  render() {
    console.log("rendering form");
    return (
      <form>
        <input />
        <button></button>
      </form>
    );
  }
}
export default TodoForm;
