import React from 'react';
import './components/TodoComponents/Todo.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const Todos = [
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
      Todos
      };
  };


toggleTodo = id => {
  this.setState({
   Todos: this.state.Todos.map(todo => {
    if(todo.id === id) {
      return {
        ...todo, //same as saying as below 
         // task: todo.task,
         // id: todo.id,
         // completed: todo.completed
         completed: !todo.completed
      }
    } 
    return todo;
   })
 });
    // loop over todos
    // find todo by given id
    // change flag to true
    // return updated list to state.
}



addTodo = todo => {
  const copiedTodos = this.state.Todos.slice();
  const newTodo = {
    task: todo,
    id: Date.now(),
    completed: false
  };
  copiedTodos.push(newTodo);
  // BUILD OUR TODO OBJECT
  this.setState({ Todos: copiedTodos });
};


  render() { 
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
         todos={this.state.Todos}
         toggleTodo={this.toggleTodo}
        />
         <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;


// this component is going to take care of state, and any change handlers you need to work with your state

//<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.

//All of your application data will be stored here on <App />.

//All of your handler functions should live here on <App />.

