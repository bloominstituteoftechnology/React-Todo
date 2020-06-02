import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const todo = [

  {
    task: 'Container',
    id: 1,
    completed: false
  },

]
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  addTask = taskItem => {
    const newTask = {
      task: taskItem,
      id: new Date(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  toggleTask = taskId => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === taskId) {
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

  deleteItem = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div>
        <h2>Gardening To Do List</h2>
        <TodoForm
          deleteItem={this.deleteItem}
          addTask={this.addTask}
        />
        <TodoList
          toggleTask={this.toggleTask}
          todo={this.state.todo}

        />
      </div>
    );
  }
}

export default App;
