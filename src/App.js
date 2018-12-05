import React, {Component} from 'react';
import './components/TodoComponents/Todo.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends Component{
  constructor(){
      super();
      this.state = {
          todo: [],
          message: '',
      }
  }

  addTodoHandle = (event) => {
    event.preventDefault();
    const messages = this.state.todo.slice();
    messages.push(
      {task: this.state.message, 
      completed: false,
      id: new Date()
      }
    )
    this.setState({messages, message: ''})
  }

  handleInputChange = (event) => {
    this.setState({ message: event.target.value})
  }


  render (){
      return(
          <div>
              <h1>Hello: {this.state.message}</h1>
            <TodoList messages={this.state.message} />
            <TodoForm 
           <input className="inputForm" onChange={this.handleInputChange} placeholder="add todo item!" onChange={this.handleInputChange} />
           <button className="addTodo" onClick={this.addTodoHandle}>Add Todo</button>
           <button className="clearCompleted">Clear Completed</button>
          </div>
      )
  }
}

export default App;
