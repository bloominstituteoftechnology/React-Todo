import React, {Component} from 'react';
import './components/TodoComponents/Todo.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const list = [
  {
      todo: 'study code',
      // key: Date.now(),
      id: 535353534,
      completed: false
    },
    {
      todo: 'Bake Cookies',
   // key: Date.now(),
      id: 3534543535345,
      completed: false
    },
    {
        todo: 'play smash bros',
       // key: Date.now(),
        id: Date.now(),
        completed: false
    }
];

class App extends Component{
  constructor(){
      super();
      this.state = {
          todo: list,
          message: '',
      }
  }

  addTodoHandle = (event) => {
    event.preventDefault();
    const messages = this.state.todo.slice();
    messages.push({     
      todo: this.state.message, 
      completed: false,
      id: Date.now()}
    )
    this.setState({todo: messages, message: ''})
  }

  handleInputChange = (event) => {
    this.setState({ message: event.target.value})
  }

  toggleTask = (id) => {
    let todos = this.state.todo.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({todos});
    console.log(todos)
  };

  completeTodoHandle = (event) => {
    // event.preventDefault();
    let completedMessage = this.state.todo.slice();
    completedMessage = completedMessage.filter(
      todo => !todo.completed);
  this.setState({ todo: completedMessage });
  console.log("Elements left", completedMessage)
  }; 


  render (){
      return(
          <div>
              <h1>MVP TODO List:</h1>
              <TodoList 
                todo={this.state.todo} 
                handleToggleTask={this.toggleTask}
              />
              <TodoForm 
                addTodoHandle={this.addTodoHandle} 
                message={this.state.message} 
                handleInputChange={this.handleInputChange} 
                completeTodoHandle={this.completeTodoHandle}
              />
            </div>
      );
  }
}

export default App;

