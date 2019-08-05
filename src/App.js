import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskData: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  addTodo = (newTodo) => {
    const newTask = {
      task: newTodo,
      id: Date.now(),
      completed: false
    }
    this.setState({
      taskData: [...this.state.taskData, newTask]
    })
  };

  clearCompleted = (item) => {
    this.setState({
      taskData: this.state.taskData.filter(i => !i.completed)
    })
  };

  toggleTask = (item) => {
    this.setState({
      taskData: this.state.taskData.map(i => {
        if (i.task === item) {
          return {
            ...i,
            completed: !i.completed
          }}
          else {
            return i;
          }
      })
    })
  };

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        <TodoList taskData={this.state.taskData} toggleTask={this.toggleTask} />
      </div>
    );
  }
}

export default App;
