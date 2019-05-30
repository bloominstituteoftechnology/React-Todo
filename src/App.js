import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.scss';

const todos = [
  {
    task: 'wat',
    id: Date.now(),
    completed: false
  },
  {
    task: 'lolnow',
    id: Date.now() + 1,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
      todoList: todos
    };
  }

  addTodo = event => {
    event.preventDefault();
    let newTodo = {task: this.state.newTask, id: Date.now(), completed: false};
    this.setState({
      newTask: '',
      todoList: [...this.state.todoList, newTodo]
    });
  }

  handleChanges = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }

  toggleComplete = (id) => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            }
          } else {
            return item;
          }
        })
      }
    })
  }

  render() {
    return (
      <div className='todo-app'> 
        <TodoList todoList={this.state.todoList} toggleComplete={this.toggleComplete} />

        <form onSubmit={this.addTodo} className='todo-form'>
          <input placeholder='Task' value={this.state.newTask} onChange={this.handleChanges} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
  /*
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
  */
}

export default App;
