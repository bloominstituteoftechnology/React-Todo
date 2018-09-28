import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: [
        {task: 'Organize Garage', id: 1528817077286, completed: false},
        {task: 'Bake Cookies',id: 1528817084358,completed: false},
      ]
    }
  }


  addTodo = (task) =>{
    //create new id
    const id = Date.now();
    const newTodo = {task: task, id: id, completed: false};
    let newTodos = [...this.state.todos, newTodo];
    this.setState({
      todos: newTodos
    })
  }

  clearCompleted = (todos) =>{
    let todoList = todos.filter(todo =>{
      return todo.completed !== true
    });
    this.setState({
      todos: todoList
    })

  }


  render() {
    return (
      <div className="container">
        <h1>Todo List: MVP</h1>
        <div>
          <TodoList todos={this.state.todos}/>
        </div>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
