// import React from 'react';

// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//       </div>
//     );
//   }
// }

// export default App;


import React from "react";
import { TodoList } from "./components/TodoComponents/TodoList";
import { TodoForm } from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";
import SimpleStorage from "react-simple-storage"; // https://github.com/ryanjyost/react-simple-storage Used for local storage



const todos = [
  { task: "MVP Wednesday" , id: 1528817077286, completed: false },
  { task: "MVP Thursday" , id: 1528817084358, completed: false },
  { task: "Stretch" , id: 1528817087286, completed: false }  
];

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      todos: todos,
      inputText: ""
    };
  }


  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        todos: [...this.state.todos, {task: this.state.inputText, id: Date.now(), completed: false}],
        inputText: ""
      });
    }
    localStorage.setItem('todos',JSON.stringify(todos));
    localStorage.setItem('task',"");
  };

  handleChanges = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
    localStorage.setItem(event.target.name,event.target.value);
  };

  completeTodo = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
         }
        return todo;
      }
    );
    this.setState({ todos });
  };

  clearTodo = event => {
    event.preventDefault();
    let todos = this.state.todos;
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };



  
  render() {
    return (
      <div>
        <h1>Todo</h1>
        <SimpleStorage parent={this} />
        <TodoList tasklist={this.state.todos} 
        handleComplete={this.completeTodo}
        />
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleChanges={this.handleChanges}
          handleClearTodos={this.clearTodo}
        />
      </div>
    );
  }
}


export default App;