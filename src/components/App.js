import React from 'react';
import Input from './input.js';
import List from './list.js';
import './app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [
        {
          id: 1,
          entry: 'Example Entry',
        },
      ],
      input: '',
      count: 1,
    };
  }

  handleInput = (event) => {
    this.setState({input: event.target.value});
  }

  addItem = (event) => {
    event.preventDefault();
    const temp = this.state.todo;
    let tempTwo = this.state.count;
    tempTwo += 1;
    temp.push({id: tempTwo, entry: this.state.input})
    this.setState({
      todo: temp,
      input: '',
      count: tempTwo,
    });
  }

  removeItem = (id) => {
    const temp = this.state.todos;
    temp.splice(id, 1);
    this.setState({todo: temp});
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <Input />
        <List />
      </div>
    );
  }
}

export default App;
