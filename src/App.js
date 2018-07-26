import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
        todos: [
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
        ],
        tasks: '',
      }
    }

    handleTaskChange = e => {
      this.setState({ task: e.target.value });
    };

    handleAddSubmit = e => {
      e.preventDefault();
      const todos = this.state.todos.slice();
      todos.push({ task: this.state.task, id: Date.now(), completed: false })
      this.setState({ todos: todos });
    };

   
  toggleComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
        });
    this.setState({ todos }); 
   };

    clearCompleted = e => {
      e.preventDefault();
      let todos = this.state.todos.slice();
      todos = todos.filter(todo => !todo.completed);
      this.setState({ todos });
    };

  render() {
    // console.log(this.state);
    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <ToDoList 
        handleToggleComplete={this.toggleComplete}
        todos={this.state.todos}
         />
        <ToDoForm 
        handleAddTodo={this.handleAddSubmit}
        handleTask={this.handleTaskChange}
        handleClearTodos={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;