import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoList: []
    }
  }

  toggleTodo = clickedId => {
    console.log("this is clickedId", clickedId)
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === clickedId) {
        return { ...item, completed: !item.completed }
      }
      else {
        return item
      }
    })

    this.setState({
      todoList: newTodoList
    })
  }

  addTodo = todoText => {
    const newItem = {
      name: todoText,
      id: Date.now(),
      completed: false
    }
    console.log("exected addTodo", newItem)

    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }

  remTodo = () => {
    const newTodoList = this.state.todoList.filter(todo => !todo.completed)

    this.setState({
      todoList: newTodoList
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm
          addTodo={this.addTodo}
          remTodo={this.remTodo}
        />
        <TodoList
          todoList={this.state.todoList}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
