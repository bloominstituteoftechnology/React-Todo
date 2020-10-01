import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todo = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo,
    };
  }

  addTodo = (taskName) => {
    const newTodo = {
      task: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todo: [...this.state.todo, newTodo],
    });
  };










  toggleTodo = taskId =>{
    this.setState({
      todo: this.state.todo.map(item=>{
        if(item.id === taskId){
          return{
            ...item,
            completed:!item.completed
          }
        }else{
          return item;
        }
      })
    })
  }
  
  










  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList toggleTodo={this.toggleTodo} items={this.state.todo} />
      </div>
    );
  }
}

export default App;
