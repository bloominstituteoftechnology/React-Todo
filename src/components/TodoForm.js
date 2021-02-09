import React from "react";

class TodoForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      newItemName: '',
    }
  }

  handleChanges = evt => {
    this.setState({
      newItemName: evt.target.value,
    });
  };

 
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addItem(this.state.newItemName);
    this.setState({
        newItemName:''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      
        <input 
        type="text" 
        name="item"
        placeholder="new task"
        value={this.state.newItemName}
        onChange={this.handleChanges}
        />
        <button onSubmit={this.props.addItem}>Add ToDo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;