import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import './components/css/App.css'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todolist: [{
        task: 'Bake Chocolate Chip Cookies',
        id: Date.now(),
        completed: false
        }],
      task: ""
    }
  }

  handleTaskChange = event => {
    this.setState({
      task: event.target.value
    })
  }

  handleAddToSubmit = event => {
    event.preventDefault();
    const todolist = this.state.todolist.slice();

    todolist.push({
      task: this.state.task, 
      id: Date.now(), 
      completed: false
    });

    this.setState({
      todolist: todolist, 
      task: ""
    })
  }

  toggleComplete = id => {
    let todolist = this.state.todolist.slice();
    todolist = todolist.map(todolist => {
      if (todolist.id === id) {
        todolist.completed = !todolist.completed;
        return todolist;
      } else {
        return todolist;
      }
    });
    this.setState({todolist});
  }


  clearComplete = event => {
    event.preventDefault();
    let todolist = this.state.todolist.slice();
    todolist = todolist.filter(todolist => !todolist.completed);
    this.setState({todolist})
  }

  render() {
    return (
      <div className = 'pageContainer'>
      <div className = 'card'>
        <h1 className = 'title'>YOUR TO-DO LIST</h1>
        
        <TodoList
         tasks={this.state.todolist} 
         handleToggleComplete={this.toggleComplete}
         />
        <TodoForm 
        addTask={this.handleAddToSubmit} 
        handleChange={this.handleTaskChange}
        value={this.state.task}
        handleClearTodos={this.clearComplete}/>
      </div>
      </div>
    )
  }
}


export default App;