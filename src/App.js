import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/ToDo.css';

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

  removeTask = e =>{
    const { toDoList } = this.state;
    const listCopy = todoList;
    listCopy.fliter(item =>{
      
    })
  }

  completedTask = e =>{
    const { completed } = this.state;
    e.target.classList.toggle('completed')
  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <TodoList info={this.state.toDoList} click={this.completedTask}/>
      <TodoForm 
      change={this.formInput}
      value={this.state.task}
      clickIn={this.addTask}
      clickOut={this.removeTask}
      />
      </div>
    );
  }
}

export default App;
