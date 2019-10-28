import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super ();
    this.state = {
      newItem: '',
    }
  }

  handleChange = e => {
    this.setState({
      newItem: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitting!");
  }

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Task</label>
        <input
          type="text"
          name="task"
          id="task"
          value={this.state.newItem}
          onChange={this.handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    )
  }

} // End of TodoForm




export default TodoForm;