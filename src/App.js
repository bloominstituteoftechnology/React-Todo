import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import Form from './components/TodoComponents/TodoForm'
import Todo from './components/TodoComponents/Todo'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoListArray: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Eat Food',
          id: 1528817084927,
          completed: false
        }
      ],
      newTasks: ""
    }
  }

  toggleCompletion = index => {
    this.setState({
      todoListArray: this.state.todoListArray.map((item, idx) => {
        if (index !== idx) {
          return item
        } else {
          return {
            ...item,
            completed: !item.completed
          }
        }
      })
    })
  }

  addTask = event => {
    event.preventDefault();
    this.setState({
      todoListArray: [
        ...this.state.todoListArray, 
        {task: this.state.newTasks, id: Math.floor(Math.random()*1000000), completed: false}], 
      newTasks: ""
    })
  }

  handleChangeEvent = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clearCompletedTasks = event => {
    console.log("clear tasks running")
    event.preventDefault();
    let remainingTodos = [...this.state.todoListArray]
    remainingTodos = remainingTodos.filter(item => !item.completed)
    this.setState({todoListArray: remainingTodos})
  }

  render() {
    return (
      <div>
        
        <TodoList 
          todoListArray={this.state.todoListArray} 
          toggleCompletion={this.toggleCompletion}
        />

        <Form 
          handleChangeEvent={this.handleChangeEvent}
          addTask={this.addTask}
          newTasks={this.state.newTasks}
          clearCompletedTasks={this.clearCompletedTasks}
        />

      </div>
    );
  }
}

export default App;
