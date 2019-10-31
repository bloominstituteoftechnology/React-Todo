import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("rendering form");
    return (
        <button>Add Job</button>
    );
  }
}

export default TodoForm;
