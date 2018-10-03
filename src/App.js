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
          id: 1,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 2,
          completed: false
        },
        {
          task: 'Eat Food',
          id: 3,
          completed: false
        }
      ],
      newTasks: ""
    }
  }

  handleClickEvent = event => {
    this.setState({
      todoListArray: [this.state.todoListArray, {task: this.state.newTasks}], 
      newTasks: ""
    })
  }

  handleChangeEvent = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        
        <TodoList todoListArray={this.state.todoListArray} />

        <Form handleChangeEvent={this.handleChangeEvent} handleClickEvent={this.handleClickEvent} newTasks={this.state.newTasks} />

      </div>
    );
  }
}

export default App;
