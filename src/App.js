import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      manyTodo: [],
      task: "",
      completed: false,
    };
  }

  inputHander = (event) => {
    const value = event.target.value;
    this.setState({
      task: value
    })
    //console.log(value)
  };

  submitHander = (event) => {
    event.preventDefault();
    const singleTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: this.state.completed,
    };
    this.setState({
      manyTodo:[...this.state.manyTodo, singleTodo,],
      task: ""
    });
    console.log("blank")
    console.log(event.target.value)
    
  }

  finishedHander = (todoId) =>{
    this.setState({
      manyTodo: this.state.manyTodo.map(todo => {
        if(todo.id === todoId){
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed
          } 
          }else {
            return todo
        }
      })
    })
  }

  clearHander = (event) =>{
    event.preventDefault();
    console.log(this.state.manyTodo)

  }

  render() {
    return (
      <div>
        <h2>Get Er' Done</h2>
        <TodoList finishedHander ={this.finishedHander} manyTodo={this.state.manyTodo} />
        <TodoForm inputHander={this.inputHander} submitHander ={this.submitHander} clearHander={this.clearHander} />
      </div>
    );
  }
}

export default App;

