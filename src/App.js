import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {

  todoArray = [{}];

  constructor() {
    super();
    this.state = {
      name: '',
      todo: this.todoArray
    }

  }

  addTodo = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  rcompleted = event => {
    event.preventDefault()
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    })
  }

  toggle = itemID => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.itemID === itemID){
          return{
            ...item, 
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addTodo}/>
        <TodoList todo={this.state.todo} toggle = {this.toggle} rcompleted = {this.rcompleted}/>
      </div>
    );
  }
}

export default App;
