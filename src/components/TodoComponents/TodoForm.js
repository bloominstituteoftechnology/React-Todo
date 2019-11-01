import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: ""
    };
  }

  handleChange = e => {
    this.setState({
      todoName: e.target.value
    });
  };

  //To submit form
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todoName !== "");
    this.props.addTodo(this.state.todoName);
    this.setState({
      todoName: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          name='task' 
          value={this.state.todoName}
        />
        <button>Add Todo</button>
        <button>Clear Todo</button>
      </form>
    );
  }
}

export default TodoForm;