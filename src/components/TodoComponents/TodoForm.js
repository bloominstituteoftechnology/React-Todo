import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoName: ""
    };
  }

  handleChanges = event => {
    this.setState({
      todoName: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.todoName !== "") {
      console.log(this.state.todoName)
      this.state.addTodo(this.state.todoName);
      this.state({
        itemName: ""
      })
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange ={this.handleChanges}
          type='text' 
          name='task' 
          value={this.state.todoName}
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <button onClick={clearList}>Clear Todo</button>
      </form>
    );
  }
}
export default TodoForm;