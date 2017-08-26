/*eslint linebreak-style: ["error", "windows"]*/
import React, { Component } from 'react';
import TodoList from './todoList';
import Index from "./index.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  removeItem = (event) => {
    let items = [...this.state.items];
   items.splice(event.target.index,1);
    console.log(event.target.id);
    this.setState(() => { return {items}});
    
  }

  render() {
    return (
      <div className='div-class'>
      <h1 className = "hOne">To Do List</h1>
      
        <form    className="App" onSubmit={this.onSubmit}>
          <input className="Form-Class" value={this.state.term} onChange={this.onChange} />
          <button className="button-One">+</button>
          
        </form>
        <TodoList items={this.state.items} removeItem={this.removeItem}/>
      </div>
    );
  }
}

export default App;