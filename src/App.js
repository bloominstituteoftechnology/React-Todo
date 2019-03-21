import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import "./components/TodoComponents/Todo.css";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todolist: todos,
      todo: ""
    };
  }
  clearCompleted = () => {
    this.setState(e => {
      return {
        todolist: e.todolist.filter(task => {
          return !task.completed;
        })
      };
    });
  };
  toggleTodo = id => {
    this.setState({
      todolist: this.state.todolist.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };
  changeTodo = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addTodo = e => {
    e.preventDefault();
    //  console.log('badass')
    const newtask = { task: this.state.todo, completed: false, id: Date.now() };
    console.log(newtask);

    // console.log(this.state.todolist)

    this.setState({
      todolist: [...this.state.todolist, newtask],
      todo: ""
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className = "App">
        <div className = "header">
          <h2>Darren's Todos</h2>

          <TodoForm
            value={this.state.todo}
            onChange={this.changeTodo}
            addTodo={this.addTodo}
          />
        </div>
      
      
        <div>
          <TodoList
            todolist={this.state.todolist}
            toggleTodo={this.toggleTodo}
          />
          <button onClick={this.clearCompleted}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
