import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm"
import './App.css'
let list = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: list,
    };
  }

  addTodo = todo => {
    let newTodo = {
      task: todo,
      id: Date.now(),
      completed:false
    }
    this.setState({
      todos:[...this.state.todos ,newTodo]
    })
  }

  handleCompleteToggle = todoId => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
    
  }

  handleClearCompleted = () =>{
      this.setState({
        todos: this.state.todos.filter((todo)=>{
          return !todo.completed
        })
      })
  }

  render() {

    return (
      <div className="container">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList 
          list={this.state.todos}
          handleCompleteToggle={this.handleCompleteToggle}
          handleClearCompleted={this.handleClearCompleted}
         />
      </div>
    );
  }
}

export default App;
