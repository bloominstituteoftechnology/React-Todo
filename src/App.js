import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = ({
      toDoList: [
    //     {
    //     task: "first task",
    //     id: Date.now(),
    //     completed: false
    // }
  ],
      task: ""
    })
  }

  formInput = e => {
    const { value } = e.target;
    console.log("input");
    this.setState({
      task: value
    })
  };


  addTask = (e)=>{
    e.preventDefault();
    const obj = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      toDoList:[...this.state.toDoList, obj],
      task: ''
    })
    console.log(this.state.task);
  };
  removeTask
  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <TodoList info={this.state.toDoList} />
      <TodoForm 
      change={this.formInput}
      value={this.state.task}
      clickIn={this.addTask}
      // clickOut={this.???}
      />
      </div>
    );
  }
}

export default App;
