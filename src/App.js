import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

const todos = [
  {
    task: 'Finish',
    id: 123,
    completed: false
  },
  {
    task: 'Test 2',
    id: 456,
    completed: false
  },
  {
    task: 'Test 3',
    id: 789,
    completed: true
  }

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
        todos: todos
      };
    }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTask]
    })
  }

  toggleComplete = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }else {
          return todo;
        }
      })
    })
  }
  // clearCompleted = () => {
  //   this.setState({
  //     todos: this.state.todos.filter( todo => {
  //       if (todo.completd === true) {

  //       }
  //     }

  //     )
  //   })
  // }
  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete}/>
        <TodoForm addTask={this.addTask}  />
      </div>
    );
  }
}

export default App;
