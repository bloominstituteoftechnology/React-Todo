import React from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputData: '',
      todoItems: [],
      title: 'My TODO LIST first ever React App!'
    };
  } 
  
  changeList = (event) => {
    event.preventDefault();
    this.setState({inputData: event.target.value})
  }

  addTask = () => {
    if (this.state.inputData === '') {
      return this.state.inputData;
    } 
    const todoItems = this.state.todoItems.slice();
    todoItems.push({
      "task": this.state.inputData,
      "id": Date.now(),
      "completed": false
    });
    this.setState({todoItems: todoItems, inputData: ''});
  }

  enterHandle = (event) => {
    if (event.which === 13 || event.keyCode === 13){
      event.preventDefault();
      this.addTask();
    }
  }

  idToggler = id => {
    let todoItems = this.state.todoItems.slice();
    
    todoItems = todoItems.map(todoItem => {
      if (todoItem.id === id) {
        todoItem.completed = !todoItem.completed;
        return todoItem;
      } else {
        return todoItem;
      }
    });
    this.setState({todoItems: todoItems});
  }

  removeItem = (event) => {
    event.preventDefault();

    let todoItems = this.state.todoItems.slice();
    todoItems = todoItems.filter(todoItem => !todoItem.completed);

    this.setState({todoItems: todoItems});
  }

  
  render() {
    return (
      <div className="wrap">
        <div className="title">{this.state.title}</div>
          <TodoForm addNewTaskOnEnter={this.enterHandle} removeItem={this.removeItem} inputEvent={this.changeList} inputValue={this.state.inputData} addNewTask={this.addTask}/>
          <TodoList  crossedText="crossedText" regularText="normalText" listItem={this.state.todoItems} toggleId={this.idToggler} />
      </div>
    );
  }
}

export default App;
