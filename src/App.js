import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  state = {
    todos: [
      {task: 'Organize Garage', id: 1528817077286, completed: false},
      {task: 'Bake Cookies', id: 1528817084358, completed: false}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todos => {
      return todos.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className='App container'>
        <h1 className='center blue-text'>Todo's</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo}/>
      </div>
      
    );
  }
}

export default App;
