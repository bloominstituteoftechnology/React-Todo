import React, {Component} from "react";
import Input from './components/Input.js';
import Todo from './components/Todo.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      toDos: ["hello"]
    };
  }

  handleAddToDo = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (<div>
      <h2>Todo App</h2>
      <Input {...this.state} parent={this}/>
    </div>)
  }

};

export default App;
