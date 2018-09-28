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
      id: Date.now()
    };
  }

  handleInput = (event) => {
    const {value} = event.target;
    this.setState({
      input: value,
    });
  };

  crossTodo = (e) => {
    let list = this.state.todolist.slice();
    if (list[0].id !== 2049) {
      let crossItem = list.filter(item => item.task === e.target.textContent);
      if (crossItem[0].completed === true) {
        crossItem.forEach(item => item.completed = false);
      } else if (crossItem[0].completed === false) {
        crossItem.forEach(item => item.completed = true);
      }
    }
    this.setState({ list: list });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      task: this.state.input,
      id: Date.now(),
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
        <List todolist={this.state.todolist} />
        <Form 
          input={this.state.input} 
          handleSubmit={this.handleSubmit} 
          handleInput={this.handleInput} 
          completeOrNot={this.completeOrNot}
        />
      </div>
    );
  }
}

export default App;