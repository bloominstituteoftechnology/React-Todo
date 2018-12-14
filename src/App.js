import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
 class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    
    super();
    
    this.state = {
      todos: []
    };
    
  }
   addTodo = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({task: this.state.todo, completed: this.state.completed, id: Date.now()});
    
    this.setState({todos, todo: ''});
  };

  changeTodo = event => {
  this.setState({[event.target.name]: event.target.value});
  }

  completeTodo = id => {
    let newTodos = this.state.todos.slice();
     newTodos = newTodos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({newTodos});
  }

   clearTodo = event => {
  event.preventDefault();
  let todos = this.state.todos.slice();
  todos = todos.filter(todo => !todo.completed);
  this.setState({todos});
  }




   render() {
    
    return (
      <div>

        <h2>Welcome to your Todo App!</h2>

      </div>
    );
  }
 }
 
 export default App;