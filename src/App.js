import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoData: [
        {
          task: 'Test 1',
          id: Date.now(),
          isCompleted: false
        }
      ]
    }
  }

  addTask = (task)=>{
    const newTask = {
      task: task,
      id: Date.now(),
      isCompleted: false
    };

    this.setState({
      todoData: [...this.state.todoData, newTask]
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
    let todoData = this.state.todoData.filter((item)=>{
      return !item.isCompleted;
    })

    this.setState({todoData});
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todoData={this.state.todoData} completeTask={this.completeTask}/>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
