import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'


const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {

  constructor(){

    super();
    this.state = {
      todos: todos,
    }
  }

  addTodo = newTask => {
    const newTodo = {
      task: newTask,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleTodos = task => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.task === task) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else{
          return todo;
        }
      })
    })

  }

  deleteCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
          return !todo.completed
        
      })
  })
  }

 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList
        todos = {this.state.todos}
        toggleTodos={this.toggleTodos}
        deleteCompleted={this.deleteCompleted}
        />

        <TodoForm
        addTodo ={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
