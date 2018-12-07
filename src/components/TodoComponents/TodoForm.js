import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  inputHandler = event => {
    this.setState({userInput: event.target.value})
  }

  submitHandler = event => {
    event.preventDefault();
    if (this.state.userInput.length === 0) return;
    this.props.addEntry(this.state.userInput);
    this.setState({userInput: ""});
  }

  render(){
  return (
    <form>
      <label>
        Add task:
      <input onChange={this.inputHandler} type="text" value={this.state.userInput} placeholder="What do you want to do?" />
      </label>
      <div className="button-container">
      <button onClick={this.submitHandler} type="submit">Submit</button>
      <button onClick={this.props.clearCompleted}>Clear completed</button>
      </div>
    </form>
  )
}
}


export default TodoForm
