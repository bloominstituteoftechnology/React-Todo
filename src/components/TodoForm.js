import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });

  };


handleSubmit = e =>{
    e.preventDefault();
    this.props.addTask(this.state.item)
    this.setState({
        item:""
    })
}

  render() {
    return (
      <form onSubmit ={this.handleSubmit}>
        <input
          type="text"
          name="item"
          onChange={this.handleChange}
          value={this.state.item}
        />
        <button>Add</button>
      </form>
    );
  }
}
export default TodoForm;
