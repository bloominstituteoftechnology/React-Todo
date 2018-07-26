import React from 'react';
import "./Todo.css";
import TodoForm from "./components/TodoComponents/TodoForm";




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: [],
      char: [],
      this: ''
    };

  }
 
  handleChange = event => {
    this.setState({ char: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const chars = this.state.chars.slice();
    chars.push(this.state.char);
    this.setState({ chars: chars });
  };

render() {
    return (
      <div classname="App">
        <header className="App-header">
            <h1> className="App-title">TODO List</h1>
        </header>    
        <TodoForm />
          <handleSubmit = {this.handleSubmit}/>
          <handleChange = {this.handleChange}/>
        />
      </div>
    );
  }
}


