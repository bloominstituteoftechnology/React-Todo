import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoSearch from './components/TodoComponents/TodoSearch';

import './components/TodoComponents/Todo.css';

let todoData = {}

const myLastStorage  = localStorage.getItem("lsTodoData");

if (!myLastStorage){
  todoData = {todos: [
    {
      task: 'Organize Crime',
      id: 1528817077286,
      completed: false,
      display: true
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: true,
      display: true
    },
    {
      task: 'Eat salad',
      id: 1528817084558,
      completed: false,
      display: true
    },
    {
      task: 'Throw up from stress (a little)',
      id: 1528817484358,
      completed: true,
      display: true
    },
    {
      task: 'Fluff Pillows',
      id: 1528817224358,
      completed: false,
      display: true
    }
  ], 
  inputText: '',
  searchText: '',
  };

  localStorage.setItem("lsTodoData", JSON.stringify(todoData));

} else {
  todoData = JSON.parse(localStorage.getItem("lsTodoData"));
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = todoData;
  }
  
  componentDidUpdate() {
    localStorage.setItem("lsTodoData", JSON.stringify(this.state));
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = ev => {
    ev.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { task: this.state.inputText, 
          id: Date.now(), 
          completed: false,
          display: true }
      ],
      inputText: ''
    });
  };

  removeTodo = ev => {
    ev.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos.filter(item =>
          item.completed === false
        )       
      ],
      inputText: ''
    });
  };

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id){
          return {...todo, completed: todo.completed ? false : true};
        } else {
          return todo;
        }
      })
    });
  }

  search = event => {
    this.setState({
      //change the input
      [event.target.name]: event.target.value,
    }, 
    //set the state of the displayed list AFTER the change input is adjusted
    ()=> {this.setState({
      //change the display property only if the search string is included in the task name
      todos: this.state.todos.map(item => {
        if(!item.task.toLowerCase().includes(this.state.searchText.toLowerCase())){
          return {...item, display: false};
        } else {
          return {...item, display: true};
        }
      })
    })})
  }

  render() {
    return (
      <div className='container'>
        <h1> To Do </h1>
        <TodoForm 
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          removeTodo={this.removeTodo}
        />
        <TodoSearch 
          search={this.search}
          searchText={this.state.searchText}
          handleChange={this.handleChange}
        />
        <TodoList 
          handleClick={this.handleClick}
          toggleCompleted={this.toggleCompleted}
          todos={this.state.todos} 
        />
      </div>
    );
  }
}

export default App;
