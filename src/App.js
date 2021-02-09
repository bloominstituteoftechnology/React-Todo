import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todo: todo
    }
  }

  handleToggle = (itemId) => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemId){
          return {
            ...item,
            completed: !item.completed
          }
        }
        return(item)
      })
    })
  }

  AddTodo = (todoTask) => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false,
    };
    const recentTodo = [...this.state.todo, newTodo];
    this.setState({
      todo: recentTodo
    })
  }

  handleCompleted = () => {
    const newTask = this.state.todo.filter(item => {
      return(!item.completed)
    })
    this.setState({
      todo: newTask
    })
  }

  render() {
    return (
      <div>
        <h2>ToDo: </h2>
        <TodoList todo={this.state.todo} handleToggle={this.handleToggle} handleCompleted={this.handleCompleted} />
        <TodoForm AddTodo={this.AddTodo}/>
      </div>
    );
  }
}

export default App;

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state