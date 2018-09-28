import React, {Component} from 'react';
import Form from './components/TodoComponents/TodoForm'
import List from './components/TodoComponents/TodoList'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      input: '',
     
      todolist: [
        {
          task: 'graduate lambda school',
          id: 1,
          completed: false,
        }

      ],
     
    };
  }

  handleInput = (event) => {
    const {value} = event.target;
    this.setState({
      input: value,
    });
  };

  handleClick = (id) => {
    let list = this.state.todolist.slice();
    let todo = list.findIndex(todo => todo.id === id);
    list[todo].completed = true
    this.setState({list: list});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      task: this.state.input,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todolist: [...this.state.todolist, obj],
      input: '',
    })
  };

  render() {
    return (
      <div> 
        <h2>Oh god it's another todo app</h2>
        <List todolist={this.state.todolist} handleClick={(id) => this.handleClick(id)} />
        <Form 
          input={this.state.input} 
          handleSubmit={this.handleSubmit} 
          handleInput={this.handleInput} 
          completeOrNot={this.completeOrNot}
          // figure out how react handles if statements
        />
      </div>
    );
  }
}

export default App;