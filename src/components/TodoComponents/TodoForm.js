import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input onChange={this.props.update} />
        <button onClick={this.props.submit}>Add todo</button>
        <button>clear completed</button>
      </div>
    );
  }
}

export default TodoForm;