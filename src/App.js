import React from 'react';
import './App.css'
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  constructor(){
    super();
    this.headers = [
      'Lazy Day Todo\'s',
      'Gettin\' Busy',
      'Full Day, Now You\'ve Gone And Done It',
      'Well There\'s Always Tomorrow'
    ]
    this.state = {
      headerText: this.headers[0],
      todoData: JSON.parse(localStorage.getItem("data"))
    }

    window.onbeforeunload = this.saveData;
  }

  saveData= ()=>{
    localStorage.setItem("data", JSON.stringify(this.state.todoData));
  }

  addTask = (task)=>{
    const newTask = {
      task: task,
      id: Date.now(),
      isCompleted: false
    };

    let index = Number.parseInt(this.state.todoData.length / 3, 10);
    index = index >= this.headers.length ? this.headers.length - 1 : index;

    this.setState({
      todoData: [...this.state.todoData, newTask],
      headerText: this.headers[index]
    })
  }

  completeTask = (id)=>{
    let index;
    for(let i = 0; i < this.state.todoData.length; ++i){
      if(this.state.todoData[i].id === id){
        index = i;
      }
    }
    let todoData = [...this.state.todoData];
    todoData[index].isCompleted = !todoData[index].isCompleted;
    this.setState({todoData});
  }

  clearCompleted = ()=>{
    let data = this.state.todoData.filter((item)=>{
      return !item.isCompleted;
    })

    let index = Number.parseInt(data.length / 3 - 1, 10);
    if(index >= this.headers.length){
      index = this.headers.length - 1;
    }
    else if(index < 0){
      index = 0;
    }

    this.setState({
      todoData: data,
      headerText: this.headers[index]
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="header">{this.state.headerText}</h1>
        <TodoList todoData={this.state.todoData} completeTask={this.completeTask}/>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
