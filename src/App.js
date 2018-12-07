import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      name: 'Billy`s List',
      placeholder: 'Add an item',
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Clean More',
          id: 1528817011158,
          completed: false
        }
      ],
      todo: "",
      completedList: []
    } 
  }

  addTodo = (text) => {

    const currentTodos = this.state.todos.slice();

    const newItem = {
      task: text,
      id: Date.now(),
      completed: false
    }

    if (newItem.task === '') {
      currentTodos.push();
    }
    else {
      currentTodos.push(newItem);
    }
    this.setState({todos: currentTodos});

  }

  markComplete = (todo) => {
    
    const htmlElementsArray = document.querySelectorAll('li');
    let todoID = Number(todo.id);

    if (todo.completed === true) {
      todo.completed = false;
    }
    else {
      todo.completed = true;
    }
    for (let i=0; i < htmlElementsArray.length; i++) {
      let htmlElementID = Number(htmlElementsArray[i].id);
      
      if (htmlElementID === todoID) {
        htmlElementsArray[i].classList.toggle('completed');
      }
    }
  }

  clear = () => {
    const cleared = this.state.todos.slice();
    const newArray = [];
    cleared.filter(clearItem => {
      if (clearItem.completed === false) {
          newArray.push(clearItem)
      }
      return newArray;
    })

    this.setState({todos: newArray});

  }

  render() {
    return (
      <div className="wrapper">
        <h1>{this.state.name}</h1>
        <TodoForm removeCompleted={this.clear} createTodo={this.addTodo}/>
        <TodoList checkTodo ={this.markComplete} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
