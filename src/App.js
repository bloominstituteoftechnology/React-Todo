import React from 'react';
import TodoList from './components/TodoList';
import "./styles.css"
import TodoForm from './components/TodoForm';

const taskList = [
  {
    task: 'Organize Garatge',
    id: '1',
    completed: false
  },
  {
    task: 'Organize House',
    id: '2',
    completed: false
  },
  {
    task: 'Organize Room',
    id: '3',
    completed: false
  }
]

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      taskList
    }
  }

  toggleTodo = todoId => {
    console.log(todoId)
    //in the todo array, find the todo that was clicked.
    //toggle the todo field on that todo
    // return all other todos untouched.
    this.setState({
      taskList: this.state.taskList.map(todo => {
          if (todoId === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
      })
    });
  };

  addTodo = (todo) => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskList: [...this.state.taskList, newTodo]
    })
  };

  clearTodo = e => {
    e.preventDefault();
    this.setState({
      taskList: this.state.taskList.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div className='App'>
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo}/>
        </div>
        <TodoList 
          taskList={this.state.taskList}
          toggleTodo={this.toggleTodo}
          clearTodo={this.clearTodo}
          />
      </div>
    );
  }
}

export default App;
