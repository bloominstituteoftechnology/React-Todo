import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputData: '',
      todoItems: [],
      title: 'My ToDo List first ever React App!'
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
      <div>
          <TodoList  crossedText="crossedText" regularText="normalText" listItem={this.state.todoItems} toggleId={this.idToggler} />
          <TodoForm removeItem={this.removeItem} inputEvent={this.changeList} inputValue={this.state.inputData} addNewTask={this.addTask}/>
          
      </div>
    );
  }
}

export default App;
