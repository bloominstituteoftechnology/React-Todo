import React from "react";

class TodoForm extends React.Component {
   constructor() {
    super();
    this.state = {
      newTask: ''
    };
  }
  handleChanges = (e) => {
    // update state with each keystroke
    // e.preventDefault();
    // console.log(e.target.value);
    console.log(e.target.value);
    this.setState({
      ...this.state,
      newTask: e.target.value
    })
    
  };

  // class method to submit form
  submitTask = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.addTask(e, this.state.newTask);
    this.state.newTask ='';
  }

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input value={this.state.newTask}
        onChange={this.handleChanges}
         type="text" name="Task" />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
