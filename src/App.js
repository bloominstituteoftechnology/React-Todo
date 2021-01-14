import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const list = 
[
  {
    task: 'break wood',
    id: 1234,
    completed: false
  },
  {
    task: 'make crafting table',
    id: 9876,
    completed: false
  },
  {
    task: 'craft pickaxe',
    id: 3857,
    completed: false
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: list
    }
  }

  addTask = taskName => {
    this.setState({
      list: [...this.state.list, { task: taskName, id: Date.now(), completed: false}]
    })
  }

  toggleList = taskId => {
    this.setState({
      list: this.state.list.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }
  clearCompleted = e => {
    this.setState({
      list: this.state.list.filter(task => {
        return !task.completed
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTask={this.addTask} />
        <TodoList clearCompleted={this.clearCompleted} toggleList={this.toggleList} list={this.state.list} />
      </div>
    );
  }
}

export default App;
