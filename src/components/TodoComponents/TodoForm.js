import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText : ""
    }
  }

  //function to keep track of the text in the todo input field
  saveInputHandler = (event) => {
    this.setState({inputText: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    const text = this.state.inputText.slice();
    this.props.addFromInput(event, text);
    this.setState({inputText: ""});
  }

  removeCompleted = event => {
    event.preventDefault();
    this.props.removeCompleted();
  }

  render() {
    return (
      <form className="form" onSubmit={this.addTodo}>
        <input type="text" placeholder="...todo" onChange={this.saveInputHandler} value={this.state.inputText}/>
        <button type="submit">Add Todo</button>
        <button onClick={this.removeCompleted}>Clear Completed</button>
      </form>
    );
  }
};

export default TodoForm;