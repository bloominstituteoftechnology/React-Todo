import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// import './App.css';


let todos = [
  {
    task: 'Go to Doctors appt.',
    id: 1235665321,
    completed: false,
    
  },
  {
    task: 'Fold laundry',
    id: 653211234,
    completed: false,
    
  },
  {
    task: 'Organize closet',
    id: 1528818473621,
    completed: false,
    
  },
  {
    task: 'Wash Dishes',
    id: 1528818498456,
    completed: false,
    
  },
  {
    task: 'Brush fat cat',
    id: 1528819873625,
    completed: false,
    
  }
];

class App extends React.Component {
//If you do a constructor you MUST DO super
  constructor(){
    super();
    this.state = {
      TodoList: todos, //takes the array we made above (toDo)
      todo: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //handlers go in here
  addTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
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

  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
