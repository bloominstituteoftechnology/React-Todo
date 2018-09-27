import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  state = { 
    todos: [
      {
        task: 'Graduate Lambda School',
        id: 1528817077286,
        completed: false,
      },
    {
      task: 'Rule the world',
      id: 1528817084358,
      completed: false,
    }
  ]
}

handleClick = (todoID) => { 
  this.setState({ 
    todos: this.state.todos.map(todo => {
      if (todo.id === todoID) { 
        return { 
          todo: todo.task,
          id: todo.id,
          completed: false,
        }
      } else { 
        return todo
      }
    })
  })
}

render() {
  return(
    <div className="ToDoList">
    <TodoList 
    todos={this.state.todos}
    handleClick={this.handleClick} />
    </div>
  )
} 


}

export default App;