import React from 'react';
import './App.css'
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import SearchForm from './components/TodoComponents/SearchForm.js';

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
      todoData: []
    }

    window.onbeforeunload = this.saveData;
  }

  componentDidMount(){
    const data = JSON.parse(localStorage.getItem("data"));

    let index = Number.parseInt(data.length / 3, 10);
    index = index >= this.headers.length ? this.headers.length - 1 : index;

    if(data !== null){
      this.setState({
        todoData: JSON.parse(localStorage.getItem("data")),
        headerText: this.headers[index]
      })
    }

    else{
      this.setState({
        headerText: this.headers[index]
      })
    }
  }

  saveData= ()=>{
    localStorage.setItem("data", JSON.stringify(this.state.todoData));
  }

  addTask = (task)=>{
    const newTask = {
      task: task,
      id: Date.now(),
      isCompleted: false,
      isHidden: false
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

  hideTask = (searchKey)=>{
    let data = this.state.todoData.map(element=>{
      if(element.task.includes(searchKey)){
        element.isHidden = false;
      }
      else{
        element.isHidden = true;
      }
      return element;
    });

    this.setState({
      todoData: data
    });
  }

  showAll = ()=>{
    let data = this.state.todoData.map(element=>{
      element.isHidden = false;
      return element;
    })

    this.setState({
      todoData: data
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="header">{this.state.headerText}</h1>
        <SearchForm hideTask={this.hideTask} showAll={this.showAll}/>
        <TodoList todoData={this.state.todoData} completeTask={this.completeTask}/>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
