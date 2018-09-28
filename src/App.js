import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

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

  removeTask = () =>{
    this.setState({ toDoList: this.state.toDoList.filter(item => !item.completed) })
  }
//toggle
  completedTask = target =>{
    this.setState({
      toDoList: this.state.toDoList.map(item=>{
        if(item.id === target){
          return{
            task: item.task,
            id: item.id,
            completed: !item.completed
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
      <TodoList info={this.state.toDoList} 
        click={this.completedTask}
        class='list-item'
      />
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
