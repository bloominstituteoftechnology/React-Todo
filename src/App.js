import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          task: 'Example Task 1',
          id: 1,
          completed: false
        }
      ]
    }
  }


  toggleCompleted = id => {
    console.log('Toggling item', id)
    this.setState({
      todoList: this.state.todoList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  }
  
  addTask = taskName => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  }

removeTask = id => {
  this.setState({
    todoList: this.state.todoList.filter(task => task.id !== id)
  });
}

removeCompleted = () => {
  this.setState({
    todoList: this.state.todoList.filter(task => task.completed === false)
  })
}


  render() {
    return (
      <div className='container'>
        <header>
          <h2>TO-DO LIST</h2>
        </header>
        <TodoForm addTask={this.addTask} />
       
        <TodoList removeTask={this.removeTask} toggleCompleted={this.toggleCompleted} todoList={this.state.todoList} />
        <button className='clearButton' onClick={this.removeCompleted} >Clear Completed</button>


      </div>
    );
  }
}

export default App;
