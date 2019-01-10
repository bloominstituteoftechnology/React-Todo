import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

import TodoForm from './components/TodoComponents/TodoForm'




const todos = [
  {
    task: "Take dog for walk",
    id: 12,
    completed: false
  },
  {
    task: "Grocery shopping",
    id: 13,
    completed: false
  },
  {
    task: "Clean closet",
    id: 14,
    completed: false
  },
  {
    task: "Make dinner",
    id: 15,
    completed: false
  },
  {
    task: "Learn React",
    id: 16,
    completed: false
  }

]

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todos,
      task: "",
      completed: false
    };
  }
  handleChanges = ev =>{
    this.setState({[ev.target.name]: ev.target.value});
  };

  addNewTodo = ev => {
    ev.preventDefault();
    this.setState({
      todos: [
        
        {
          task: this.state.newTodoText, 
          id: Date.now(),
          completed: false},
        ...this.state.todos

      ], newTodoText: ""

    })
  }


    toggleCompleted = id => {
     this.setState({
       todos: this.state.todos.map(todo => {
         if(todo.id === id) {
           return {
             ...todo,
             completed: !todo.completed
           };
         }
         return todo;
       })

     });
      
    };

    clearComplete = e => {
     e.preventDefault();
      this.setState ({
        todos: this.state.todos.filter(todo => !todo.completed)
      });
    };
  

  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
      <h2>Welcome to your Todo App</h2>
      <div className = 'todo-list'>
        <TodoForm addNewTodo={this.addNewTodo} 
                clearComplete={this.clearComplete}
                  handleChanges={this.handleChanges}
                  newTodoText={this.state.newTodoText}
                  
                  />
        <TodoList todos={this.state.todos}
                  isChecked={this.state.isChecked}
                  toggleCompleted={this.toggleCompleted} 
                  />
        </div>
      </div>
    );
  }
}

export default App;
