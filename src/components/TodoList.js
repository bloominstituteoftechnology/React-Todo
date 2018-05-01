// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      char: "",
      list: [],
    };
    this.toggleFlag = this.toggleFlag.bind(this);
  }
  updateChar = event => {
    // console.log(event.target.name, event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmitTodo = () => {
    const list = this.state.list;
    list.push(this.state.char);
    this.setState({ list: list, char: "" })
  }
  enterKeyPress = event => { // can this be combined with this.updateChar? Hmm
    // console.log(event);
    // console.log("enterKeyPress: event.key is ",event.key);
    if (event.key === "Enter") {
      this.handleSubmitTodo();
    }
  }
  toggleFlag = () => {
    this.setState({
      condition: !this.state.condition
    })
  }
  render() {
    return (
      <div>
        <h3>Something need doing?</h3>
        <input type="text" 
          name="char" 
          onKeyPress={this.enterKeyPress} 
          onChange={this.updateChar} 
          value={this.state.char} 
          placeholder="What to do today?" 
        />
        <button onClick={this.handleSubmitTodo}>Update To-Do List</button>
        <Todo className={this.state.condition ? "complete" : "pending"} toggleClassName={this.toggleFlag} list={this.state.list} />
      </div>
    );
  }
}

export default TodoList; 