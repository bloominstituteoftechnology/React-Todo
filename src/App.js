import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos : [
      {
        task: 'Why is this so hard?',
        id: 1234,
        completed: false
      },
      {
        task: 'Seriously Why?',
        id: 1234,
        completed: false
      },

    ]
  };
  }

  handleInput = (todoId) => {
     this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  handleSubmit = (event) => {
    let newTaskList = this.state.todos.concat({task: this.state.currentInputValue, id: Date.now(), completed: false})
    this.setState({todos: newTaskList});
  }
    
  render() {
    return (
      <div>
        <TodoList list={this.state.todos} />
        <TodoForm inputFunction={this.handleInput} submitFunction={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
