import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      list: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      list: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.list)
  
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="list"
            value={this.state.list}
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
