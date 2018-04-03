import React, {Component} from "react";
import Input from './components/Input.js';
import Todo from './components/Todo.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      toDos: []
    };
  }

  render() {
    return (<div>
      <h2>Todo App</h2>
      <Input {...this.state} parent={this}/>
      <Todo {...this.state} />
    </div>)
  }

};

export default App;

