import React from "react";

class TodoForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      inputValue: ""
    }
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleItemAdd(this.state.inputValue);
    this.setState({
      inputValue:""
    });
  }
   handleClick = ()=> {
   this.props.handleItemCompleted(this.props.todos);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.inputValue} onChange={this.handleChange} type="text" name="item" />
        <button>Add Task</button>
        <button onClick={this.handleClick}>Clear</button>
      </form>
    );
  }
}

export default TodoForm;