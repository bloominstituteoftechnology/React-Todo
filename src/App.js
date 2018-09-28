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

  completeOrNot = (element) => {
    let current = element.target;
    let todos = this.state.todos.map(todo => {
      if (Number(current.id) === todo.id) {
        current.classList.toggle('completed');
        todo.completed = !todo.completed;
        return todo;
      }
    })
  }


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