import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"

const todos = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos:todos
    }
  }

  toggleTask = (clickedTaskId) => {
    this.setState({
      todos: this.state.todos.map((task) => {
        if(task.id === clickedTaskId){
          console.log(clickedTaskId, "Toggle Task")
          return ({
            ...task,
            completed: !task.completed,
          });
        } else {
          return (task);
        }
      })
    })
  }

  addTask = (newTask) => {
    this.setState({
      todos: [...this.state.todos, {
        task: newTask,
        id: Date.now(),
        completed: false
      }]
    })
  }

  clearTask = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((task) => {
        return (  !task.completed  )
      })
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!!</h2>
        <TodoList todos={this.state.todos} toggleTask={this.toggleTask} clearTask={this.clearTask} />
        <TodoForm addTask={this.addTask} clearTask={this.clearTask}/>
      </div>
    );
  }
}

export default App;
