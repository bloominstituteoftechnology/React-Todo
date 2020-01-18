import React from 'react';
import ReactDOM from 'react-dom'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';






const todos= [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       todoList: todos
    };
  }
  addNewItem = newItemName => {
    const newState = { 
      ...this.state, 
      todoList:[
        ...this.state.todoList, 
      {task: newItemName, completed: false, id: Date.now()}
     ]
    }
    this.setState(newState);
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleCompleted = id => {
    console.log('App.js: App: toggleCompleted');
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    }
    this.setState(newState);
  }
  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(item => {
        return !item.completed;
      })
    }
    this.setState(newState);
  }
  
  render() {
    return (
      <div className= 'App'>
        <div className= 'header'>
          <h2>Welcome to your To-Do App!</h2>
          
          <TodoForm addNewItem= {this.addNewItem}/>
        </div>
        <TodoList 
          todos= {this.state.todoList} 
          toggleCompleted= {this.toggleCompleted}
          clearCompleted= {this.clearCompleted}
        />
      </div>

    );
  }
}

export default App;
