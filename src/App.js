import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from "./components/TodoComponents/TodoForm"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Study Class Components',
          id: 1,
          completed: false
        },
        {
          task: 'Eat Dinner',
          id: 2,
          completed: false
        },
        {
          task: 'Sleep',
          id: 3,
          completed: false
        }
      ],
      todo: ''
    }
  }

  handleAdd = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now()}
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  handleComplete = id => {
    const complete = this.state.todos.map(todo => {
      console.log(id)
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo
      } else {
        return todo
      }
    })
    this.setState({complete}) 
  }

  handleDelete = (e) =>{
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(e =>{
        return e.completed === false
      })
    })
  }

  render() {
    return (
      <div>
        <h1>YOUR TODO LIST</h1>
        <TodoList todos={this.state.todos} handleComplete={this.handleComplete}/>
        <TodoForm 
          value={this.state.todo} 
          handleAdd={this.handleAdd} 
          handleChange={this.handleChange}
          handleDelete ={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;