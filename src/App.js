import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"
import Todo from "./components/TodoComponents/Todo"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [{
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ]
    }
  }
  addTodo = (text) => {
    const newTodos = {
      task: text,
      id: Date.now(),
      completed: false
    }
    const todos = this.state.todos.slice ()
   todos.push(newTodos)
    this.setState({todos: todos})
  }
  crossOut = (event) => {
    event.currentTarget.classList.toggle('crossout');
  }

  


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}
                  crossOut = {this.crossOut}

        />
        
        <TodoForm addTodo = {this.addTodo}/> 
        
      </div>
    );
  }
}

export default App;
