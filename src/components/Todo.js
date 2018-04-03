import React, { Component } from "react";
class Todo extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const strikeStyle = this.state.clicked
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };
    return (
      <div className="listline">
        <span style={strikeStyle} onClick={this.handleClick}>
          {this.props.thing}
        </span>
        <button
          className="delbutton"
          onClick={() => this.props.removeItem(this.props.index)}
        >
          X
        </button>
      </div>
    );
  }
}

export default Todo;
