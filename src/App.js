import React from 'react';
import './app.css';

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
      todoText: "",
      searchText: ""
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

  setSearchText = (event) => {
    this.setState({
      searchText: event.target.value
    });
  }

  checkTodo = (id, event) => {
    this.setState(currentState => {
      return {
        todos: currentState.todos.map(todo => {
          if (todo.id !== id) return todo;
          return {id: todo.id, task: todo.task, completed: true}
        })
      }
    })
  }

  filterTodos = (event) => {
    event.preventDefault();
    this.setState(currentState => {
      return {
        todos: currentState.todos.filter(todo => todo.task.includes(currentState.searchText))
      }
    })
  }

  clearTodo = (id, event) => {
    this.setState(currentState => {
      return {
        todos: currentState.todos.filter(todo => todo.id !== id)
      }
    })
  }


  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <form>
          <input type="text" placeholder="Search Todos" onChange={(event) => this.setSearchText(event)}/>
          <button onClick={(event) => this.filterTodos(event)}>Search</button>
          <br></br><br></br>
        </form>
        <form>
          <input type="text" placeholder="Enter Todos" onChange={(event) => this.setTodo(event)}/>
          <button onClick={(event) => this.addTodo(event)}>Add</button>
        </form>
        <div className ="todos-container">
           {this.state.todos.map(todo => (
             <>
            <h2 className={todo.completed ? "todo-checked" : "todo-unchecked"} key={todo.id} onClick={(event) => this.checkTodo(todo.id, event)}>{todo.task}</h2>
            <button onClick={(event) => this.clearTodo(todo.id, event)}>Clear</button>
            </>
          ))}
        </div> 
      </div>
    );
  }
}

export default App;
