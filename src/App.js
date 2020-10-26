import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const initialListState = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
        todoList: initialListState
    }
  }

  addTodo = (todo) => {
      this.setState({
        todoList: [...this.state.todoList, 
        {
          name: todo,
          id: Math.random(),
          completed: false
          }
        ]
      })
  }

  finishTodo = todoId => {
    this.setState({
      todoList:this.state.todoList.map(item=>{
        if(item.id === todoId) {
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

  clearTodos = () => {
    this.setState({
      todoList:this.state.todoList.filter(item =>(!item.completed))
    })
  }

  render() {
    return (
      <div className='todos-container'>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm addTodo={this.addTodo} todos={this.state.todoList} clearTodos={this.clearTodos}/>
        <TodoList finishTodo={this.finishTodo} todoList={this.state.todoList} clearTodos={this.clearTodos}/>
      </div>
    );
  }
}

export default App;
