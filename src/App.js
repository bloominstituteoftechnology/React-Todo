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

};

export default App;

