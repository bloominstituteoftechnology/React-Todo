import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos:[]
    };
  }

  submitFn = text => {
    if(text != ""){
      const newTodo = {
        task: text,
        id: Date.now(),
        completed: false
      };
      
      this.setState(prevsState => {
        let task = prevsState.todos.slice();
        task.push(newTodo);
        
        return{
          todos: task
        }
      })
    }
  };

  toggleTodo = id => {
    let task = this.state.todos.slice();
    task = task.map(todo => {
      if(id === todo.id ){
        todo.completed = !todo.completed
        return todo
      }
      else{
        return todo
      }
    })
    this.setState({
      todos: task
    })

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos = {this.state.todos} toggleTodo = {this.toggleTodo} />
        <TodoForm submitFn = {this.submitFn} />
      </div>
    );
  }
}

export default App;

