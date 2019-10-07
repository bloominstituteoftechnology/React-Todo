import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

const tasks = [
  {name: "", id: 1, completed: false}
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    }
  }
  toggleItem = (event, itemId) => {
    event.preventDefault();

    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === itemId) {
          return {
            ...item, 
            completed: !item.completed
          } 
        } else {
          return item
        }
      })
    })
  }

  completedTask = event => {
    event.preventDefault();

    this.setState({
      tasks: this.state.tasks.filter(item => {
        return !item.completed
      })
    })
  }

  addTask = (event, taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    }

    this.setState({
      tasks: [newTask, ...this.state.tasks]
    })
  }


  render() {
    return (
      <div className="container">
        <h2>Welcome to your Todo App!</h2>
        <div className="todo">
          <TodoForm 
            addTodo={this.addTask}
            tasks={this.state.tasks}
            />
        </div>
        <div className="todo-container">
            <TodoList
              tasks= {this.state.tasks}
              toggleItem= {this.toggleItem} 
              completedTask= {this.completedTask} 
            />
        </div>
      </div>
    );
  }
}

export default App;
