import "./components/TodoComponents/Todo.css";
import React from "react";
//import ReactDOM from "react-dom";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {

      tasks: TodoList

    }
  }
      
  toggleTask = (event, itemId) => {
    event.preventDefault()

    this.setState({

tasks: this.state.tasks.map(item => {
  if (item.id === itemId) {
    return {

      ...item,

      completed: !item.completed
    }
  } else {
    return item
  }
})
    })
  }

  clearCompleted = event => {
    event.preventDefault()

    this.setState({
    
      tasks: this.state.tasks.filter(item => {

        return !item.completed
      })
    })
  }

  addItem = (event, itemName) => {
    const newItem = {
      
      task: itemName,
      id: Date.now(),
      Completed: false
    }

    this.setState({
    
      tasks: [newItem, ...this.state.tasks]
    })
  }


      render() {
        return (
        <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>

        <div className="todo-list">
          {this.state.tasks.map(item => (
            <Todo
              key={item.id}
              item={item}
              onClick={(e) => this.toggleTask(e, item.id)}
            />
          ))}

          <button className="clear-btn" onClick={this.clearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    );
  }
}

export default App;