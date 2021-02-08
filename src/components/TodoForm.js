import React from "react";

class TodoForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      newItemName: '',
    }
  }

  handleChanges = evt => {
    this.setState = ({
      newItemName: evt.target.value,
    });
  };

 
  handleSubmit = (evt) => {
    //   evt.preventDefault();
    this.props.addItem(this.state.newItemName);
  }

  render() {
    return (
      <form>
      
        <input 
        type="text" 
        name="item"
        placeholder="new task"
        value= {this.newItemName}
        onChange= {this.handleChanges}
        />
        <button>Add ToDo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;