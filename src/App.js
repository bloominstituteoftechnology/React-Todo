import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputData: '',
      todoItems: []
    };
  } 
  
  changeList = (event) => {
    event.preventDefault();
    this.setState({inputData: event.target.value})
  }

  addTask = () => {
    const todoItems = this.state.todoItems.slice();
    todoItems.push({
      "task": this.state.inputData,
      "id": Date.now(),
      "completed": false
    });
    this.setState({todoItems: todoItems, inputData: ''});
  }
  
  render() {
    return (
      <div>
          <TodoList listItem={this.state.todoItems} />
          <TodoForm inputEvent={this.changeList} inputValue={this.state.inputData} addNewTask={this.addTask}/>
          
      </div>
    );
  }
}

export default App;
