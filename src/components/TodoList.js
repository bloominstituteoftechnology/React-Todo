// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      char: "",
      list: [],
    };
  }
  updateChar = event => {
    console.log(event.target.name, event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmitTodo = () => {
    const list = this.state.list;
    list.push(this.state.char);
    this.setState({ list: list, char: "" })
  }
  render() {
    return (
      <div>
        <h3>Something need doing?</h3>
        <input type="text" name="char" onChange={this.updateChar} value={this.state.char} placeholder="What to do today?" />
        <button onClick={this.handleSubmitTodo}>Update To-Do List</button>
      </div>
    );
  }
}

export default TodoList; 