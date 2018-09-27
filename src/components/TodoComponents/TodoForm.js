import React from "react";

class TodoForm extends React.Component {
  render() {

    return (
      <div>
        <input value={this.props.value} onChange={this.props.update} />
        <button onClick={this.props.submit}>Add todo</button>
        <button onClick={this.props.filter}>clear completed</button>
      </div>
    );
  }
}


export default TodoForm;