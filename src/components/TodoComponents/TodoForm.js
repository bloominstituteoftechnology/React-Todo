import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: "Input Value"
    };
  }

  changeInputValue = event => {
    console.log(event.target.value);
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="toDoForm">
        <form action="">
          <input
            onChange={this.changeInputValue}
            value={this.state.inputValue}
          />
        </form>
      </div>
    );
  }
}

export default TodoForm;
