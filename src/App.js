import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const todosList = [
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
];

class App extends React.Component {
  constructor() {
      super();
      this.state = {
          todos: todosList,
          newTask: ''
      }
  }
  handleChanges = event => {
      this.setState({ [event.target.name]: event.target.value })
  }
  addTodo = event => {
      event.preventDefault();
      this.setState({
          todos: [
              ...this.state.todos,
              {
                  task: this.state.newTask,
                  id: Date.now(),
                  completed: false
              }
          ],
          newTask: ''
      });
  };

  toggleComplete = id => {
      this.setState({
          todos: this.state.todos.map(todo => {
              if (todo.id === id) {
                  return {
                        ...todo,
                      completed: !todo.completed
                  };
              }
              return todo;
          })
      });
  };
  clearComplete = event => {
      event.preventDefault();
      this.setState({
          todos: this.state.todos.filter(todo => todo.completed === false)
      });
  };
  render() {
    return (
        <div>
            <h2>Welcome to your Todo App!</h2>
            <TodoList
                toggleComplete={this.toggleComplete}
                todos={this.state.todos}
            />
            <TodoForm
                addTodo={this.addTodo}
                handleChanges={this.handleChanges}
                newTask={this.state.newTask}
                clearComplete={this.clearComplete}
            />
        </div>
    );
  }
}
export default App;