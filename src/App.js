import React from 'react';
import Form from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      todolist: [],
      input: ''
    }
  }

  handleInput = (event) => {
    const {value} = event.target;
    this.setState({
      input: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.input) {
      const obj ={
        task: this.state.input,
        id: Date.now(),
        completed: false
      }
    this.setState({
      todolist: [...this.state.todolist, obj],
      input: ''
    })
    }
  }

  crossout = (elementID) => {
    this.setState({
      todolist: this.state.todolist.map( items=>{
        if(items.id === elementID) {
          return {
            task: items.task,
            id: items.id,
            completed: !items.completed,
          }
        } else {
          return items;
        }
      })
    })
  }

  clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
      todolist: this.state.todolist.filter(item => item.completed === false)
    })
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todolist={this.state.todolist} 
          crossout={this.crossout} 
        />
        <Form 
          input={this.state.input}
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          clearCompleted={this.clearCompleted}

        />
      </div>
    );
  }
}

export default App;
