import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const data = [
  {
    todo: 'Vacuum',
    id: 1,
    completed: false
  },
  {
    todo: 'Get Groceries',
    id: 2,
    completed: false
  },
  {
    todo: 'Wash Car',
    id: 3,
    completed: false
  },
  {
    todo: 'Pay Bills',
    id: 4,
    completed: false
  },
];


class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todos: data,
    }
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleCompleted(todoId) {

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  }

  render() {
    console.log('rendering...')
    return (
      <div className='App'>
        <div className='header'>
          <h1>Todo List</h1>
          <TodoForm /> 
        </div>
        <TodoList 
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        
      </div>
    );
  }
}

export default App;


