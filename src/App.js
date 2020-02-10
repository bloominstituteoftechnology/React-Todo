import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const data = [
  {
    task: 'Break my code',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Ignore 20 minute rule',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Remember 40 minute rule',
    id: 1528817084359,
    completed: false
  }

]

class App extends React.Component {
  state = {
    todos: data
  }

toggleComplete = taskID => {
  this.setState({
    todos: this.state.todos.map(todo => {
      if(todo.id === taskID) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
  })
}

clearCompleted = () => {
  this.setState({
    todos: this.state.todos.filter(todo => {
      return !todo.complete;
    })
  })
}

addTodo = todoName => {
  this.setState({
    todos: [
      ...this.state.todos,
      {
        task: todoName,
        id: Date.now(),
        complete: false
      }
    ]
  })
}

render() {
  return(
    <div>
      <div>
        <h1>Todo List:</h1>
        <TodoForm 
          addTodo={this.addTodo} />
      </div>
      <TodoList
        todos={this.state.todos}
        toggleComplete={this.toggleComplete}
        clearCompleted={this.clearCompleted}
        />
    </div>
  )
}

}

export default App;