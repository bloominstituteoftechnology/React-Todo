import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css'



// design `App` to be the parent component of your application
class App extends React.Component {
  // state store
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Placeholder Todo 1',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Placeholder Todo 2',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    }
  }

  // CHANGE HANDLERS
  // ADD TODO
  addTodo = event => {
    event.preventDefault();
    // here we are making a new todos array
    const todos = this.state.todos.slice();
    console.log(todos)
    // pushing new todo onto sliced todos array
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };
  // HANDLE INPUT CHANGES 
  updateInput = event => this.setState({ [event.target.name]: event.target.value });


 // the this keyword gives you access to the constructor
// when there are updates to state render gets called again
// RENDER METHOD
  render() {
    return (
      <div className="flex">
      <TodoList
        todos={this.state.todos}
       />
       <TodoForm
        value={this.state.todo}
        handleAddTodo={this.addTodo}
        handleInputChange={this.updateInput}
      />
      </div>
    );
  }
}

export default App;
