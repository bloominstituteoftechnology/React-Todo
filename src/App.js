import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Cook Dinner',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Study',
    id: 1528817084369,
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      todos: todos
    }
  }
  
  toggleList = todoId =>{
    // loop through all todo,
    // toggle to the completed for the todo item
    this.setState({
      todos: this.state.todos.map(todo =>{
        if (todo.id === todoId){
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };
 
  handleClear = () =>{
    this.setState({
        todos: this.state.todos.filter(todo => 
          !todo.completed
      )
    })
}
  // create the function to add new todo todo
  addTodo = todoName => { 
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  
  render() {
  
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <div>
        <TodoForm addTodo={this.addTodo} handleClear={this.handleClear} />
        <TodoList 
        todos={this.state.todos}
        toggleList={this.toggleList}
        />
        </div>
        
      </div>
    );
  }
}

export default App;
