import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state ={
      todos : [
        {
          task : 'Organise Garage',
          id : 1528817077286,
          completed :false
        },
        {
          task : 'Bake Cookies',
          id : 1528817084358,
          completed : false
        }
      ],
      todo : ''
    }
  }
  changeTodo = (event) => this.setState({ [event.target.name] : event.target.value})

  addTodo = event =>{
    event.preventDefault();
    let todos = [...this.state.todos];
    todos.push({ task : this.state.todo, completed : false , id :Date.now()})
    this.setState({todos,todo : ''})
  }

  toggleTodoComplete = id => {
    let todos = [...this.state.todos]
    todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
        return todo
      }
      else {
        return todo
      }
    })
    this.setState({todos})

  }


  clearCompletedTodo = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed)
    this.setState({ todos })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
        changeTodo = {this.changeTodo}
        value = {this.state.todo}
        handleAddItemTodo = {this.addTodo}
        handleClearTodo = {this.clearCompletedTodo}
        />
        <TodoList
        todos ={this.state.todos}
        handleToggleComplete={this.toggleTodoComplete}
        />
      </div>
    );
  }
}

export default App;
