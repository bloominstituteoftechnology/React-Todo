import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: "Input Value"
    };
  }

  changeInputValue = () => {
    console.log("changed");
  };

  render() {
    return (
      <div className="toDoForm">
        <form action="">
          <input
            value={this.state.inputValue}
            onChange={this.changeInputValue}
          />
        </form>
      </div>
    );
  }
}

export default TodoForm;
