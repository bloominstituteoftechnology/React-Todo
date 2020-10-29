import React from 'react'

class TodoForm extends React.Component {


  // Constructor and state
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  // Class perperty to submit a state
  handleSubmit = event => {
    event.preventDefault();

    // Updating state with new todo
    this.setState({
      todo: ''
    });

    this.props.addTodo(event, this.state.todo);
  }


  changeHandler = event => {
    // Update state on input field change
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* we control the input with state  */}
        <input
          type='text'
          name='todo'
          placeholder='...todo'
          onChange={this.changeHandler}
          value={this.state.todo}
        />
        <button>ADD TODO</button>
      </form>
    )
  }
}

export default TodoForm;