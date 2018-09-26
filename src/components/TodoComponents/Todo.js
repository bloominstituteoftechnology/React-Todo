import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.task}</div>;
  }
}

export default Todo;
