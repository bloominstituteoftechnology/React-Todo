import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css'

//CCR: Class Constructor Render
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

  // CHANGE HANDLERS -----------------------

  // ADD TODO -  <button onClick={props.handleAddTodo}>Add Todo</button>
  addTodo = event => {
    // prevent page from refreshing
    event.preventDefault();
    // here we are making a new todos array
    const todos = this.state.todos.slice();
    console.log(todos)
    // pushing new todo onto sliced todos array
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    // 
    this.setState({ todos, todo: '' });
  };

  // UPDATE INPUT on change - see TodoForm.js ...onChange={props.handleInputChange} 
  updateInput = event => this.setState({ [event.target.name]: event.target.value });

 // TOGGLE COMPLETED - takes a id as a para, then slice the the todos array
 toggleCompleted = id => {
   let todos = this.state.todos.slice();
   //map over the todos array of objects
   todos = todos.map(todo => {
     if(todo.id === id) {
       todo.completed = !todo.completed
       return todo;
     } else {
       return todo;
     }
   })
   this.setState({ todos })
 }  
  // CLEAR COMPLETED TODOS - <button onClick={props.handleClearCompleted}>Add Todo</button> .....@render handleClearCompleted={this.clearCompleted}




// RENDER -----------------------------------
 // the this keyword gives you access to the constructor
// when there are updates to state render gets called again
  render() {
    return (
      <div className="flex">
      <TodoList
        todos={this.state.todos}
        handleToggleCompleted={this.toggleCompleted}
       />
       <TodoForm
        value={this.state.todo}
        handleAddTodo={this.addTodo}
        handleInputChange={this.updateInput}
        handleClearCompleted={this.clearCompleted}
      />
      </div>
    );
  }
}

export default App;
