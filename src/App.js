import React, { Component } from 'react';
import List from './Components/List';


class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      newItem: '',
      strikeThrough: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const temp = this.state.list;
    temp.push(this.state.newItem);
    this.setState({list: temp});
    this.setState({newItem: ''});
    event.preventDefault();
    console.log(this.state.list);
  }

  handleChange(event) {
   this.setState({newItem: event.target.value});
   console.log(this.state.newItem);
   event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h1>Todo App</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              New Todo Item:
              <input type="text" value={this.state.newItem} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        <List items={this.state.list} />
      </div>
    );
  }
}  

export default App;
