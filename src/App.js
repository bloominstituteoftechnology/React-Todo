import React from 'react';
import './App.css';

const todoList = [
  {
    task: 'Get train to Sheffield',
    id: 0,
    completed: false 
  },
  {
    task: 'Drink a coffee',
    id: 1,
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props)
    this.state = {
      todos: todoList,
      todoText: ""
    }
  }

  addTodo = (event) => {
    event.preventDefault()
    this.setState(currentState => {
      return {
        todos: currentState.todos.concat({task: this.state.todoText, id: Date.now(), completed: false}),
        todoText: ""
      }
    })
  }

  setTodo = (event) => {
    this.setState({
      todoText: event.target.value
    });
  }

  checkTodo = (id, event) => {
    const thisText = event.target.innerText;
    console.log(id)
    this.setState(currentState => {
      return {
        todos: currentState.todos.map(todo => {
          if (todo.id !== id) return todo;
          return {id: todo.id, task: todo.task, completed: true}
        })
      }
    })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div>
        <h2>Todo App</h2>
        <form>
          <input type="text" placeholder="Enter Todos" onChange={(event) => this.setTodo(event)}/>
          <button onClick={(event) => this.addTodo(event)}>Add</button>
        </form>
        <div className ="todos-container">
           {this.state.todos.map(todo => (
            <h2 key={todo.id} onClick={(event) => this.checkTodo(todo.id, event)}>{todo.task}</h2>
          ))}
        </div> 
      </div>
    );
  }
}

export default App;
