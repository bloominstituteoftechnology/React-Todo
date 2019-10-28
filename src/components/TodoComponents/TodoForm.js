import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super ();
    this.state = {
      newTask: '',
    }
  }

  handleChange = e => {
    this.setState({
      newTask: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newTask !== '') {
      this.props.addTask(this.state.newTask);
      this.setState({ newTask: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Task</label>
        <input
          type="text"
          name="task"
          id="task"
          value={this.state.newTask}
          onChange={this.handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    )
  }

} // End of TodoForm

export default TodoForm;