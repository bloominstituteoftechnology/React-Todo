import React from "react";
import "./App.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todos = [
  {
    task: "Organize Life",
    id: 1,
    completed: false
  },
  {
    task: "Fix Everything",
    id: 2,
    completed: false
  }
];

const defaultState = {
  todos: todos,         // TodoList --> Todo
  task: "",             // Todo Form
  id: undefined,        // Todo Form
  completed: false      // Todo Gorm
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = defaultState;
  }

  markCompletedHandler = event => {
    console.log('click!');
    console.log(event.target.key);
    todos.forEach(todo => {
      if(todo.id === event.target.key) {
        todo.completed = !todo.completed;
        
      }
    })

    event.target.style.color = "red";

    this.setState({todos: todos})
  }

  changeHandler = event => {
    this.setState({task: event.target.value})
  }

  addTaskHandler = event => {
    event.preventDefault();

    let newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTask],
      task: "",
      id: undefined,
      complete: false
    });
  }

  render() {
    return (
      <div className="app-container">
        <TodoList 
          todos={this.state.todos} 
          markCompletedHandler={this.markCompletedHandler}  
          />
        <TodoForm 
          changeHandler={this.changeHandler}
          addTaskHandler={this.addTaskHandler}
      
          task={this.state.task}
        />
      </div>
    );
  }
}

export default App;
