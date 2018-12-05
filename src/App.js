import React, {Component} from 'react';
import './components/TodoComponents/Todo.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const list = [
  {
      todo: 'study code',
      key: Date.now(),
      id: 1,
      completed: false
    },
    {
      todo: 'Bake Cookies',
      key: Date.now(),
      id: 2,
      completed: false
    },
    {
        todo: 'play smash bros',
        key: Date.now(),
        id: 3,
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
    // const item = {
    //   todo: this.state.message, 
    //     completed: false,
    //     id: new Date()
    // }
    messages.push({     
       todo: this.state.message, 
      completed: false,
      id: new Date()}
    )
    this.setState({todo: messages, message: ''})
  }

  handleInputChange = (event) => {
    this.setState({ message: event.target.value})
  }


  render (){
      return(
          <div>
              <h1>MVP TODO List:</h1>
              <TodoList todo={this.state.todo} />
              <TodoForm 
                addTodoHandle={this.addTodoHandle} 
                message={this.state.message} 
                handleInputChange={this.handleInputChange} 
              />
            </div>
      );
  }
}

export default App;

