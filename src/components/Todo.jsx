import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      todo: this.props.todo
    };
  }

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            textDecoration: this.state.clicked ? "line-through" : "none"
          }}
          onClick={e => this.setState({ clicked: !this.state.clicked })}
        >
          {this.state.todo}
        </div>
        <button
          value={this.props.todo}
          type="submit"
          onClick={e => this.props.onDelete(e.target.value)}
        >
          x
        </button>
      </React.Fragment>
    );
  }
}

export default Todo;
