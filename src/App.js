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

// is the input section
  handleAddToDo = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

// the actual submit button
  handleSubmitToDo = () => {
    const {toDos} = this.state;
    toDos.push(this.state.textInput);
    this.setState({toDos, textInput: ""});
  };

// shows everything
  render() {
    return (<div>
      <h2>Todo App</h2>
      <Input {...this.state} parent={this}/>
      <Todo {...this.state} />
    </div>)
  }

};

export default App;
