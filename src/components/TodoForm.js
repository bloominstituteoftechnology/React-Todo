import React from 'react'

class TodoForm extends React.Component {

  constructor(props) {
    // Constructor and state
    super(props);
    this.state = {
      todoName: ''
    };
  }

  // Class perperty to submit a state
  handleSubmit = (e) => {
    e.preventDefault();

    // Updating state with new todo
    this.props.addTodo(this.state.todoName);
    this.setState({ todoName: '' })
  }

  handleChanges = (e) => {
    // Update state on inputfield change
    this.setState({
      todoName: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* we control the input with state  */}
        <input
          type='text'
          name='todoName'
          onChange={this.handleChanges}
          value={this.state.todoName}
        />
        <button>ADD TODO</button>
      </form>
    )
  }
}

export default TodoForm;