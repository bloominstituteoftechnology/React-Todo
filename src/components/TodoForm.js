import React from "react";

// constuctor 
//  On the input, add a value attribute and pass in your new state property
// Build a handleChanges function to update state with each keystroke (onChange)

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    };
}

// updates the state 
handlechanges = e => {
    this.setState({ [e.target.name]: e.target.value});
};

// submit

submitItem = (e) => {
    e.preventDefault();
    this.setState({ task: ""});
    this.prompt.addTodo(event, this.state.task);
};

render() {
    return (
      <div className="todoform">
        <form onSubmit={this.submitItem}>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChanges}
          />
          <br />
          <button className="update-task">To-Do</button>
        </form>
        <br />
        <button className="clear-button" onClick={this.props.clearCompleted}>
          Clear Item
        </button>
      </div>
    );
  }





export default TodoForm;