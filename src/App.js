import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
// import './Todo.css';
//class component cuz we have state
class App extends React.Component {
  constructor() {
    super();
    this.state = { //within our state object we have todos and todo, this is where data is stored
      todos: [],
      todo: ''
    };
  }

  toggleCompleted = id => { 
    let newTodo = [...this.state.todos];
    newTodo = newTodo.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    })
    this.setState({todos: newTodo});
  }

  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = [...this.state.todos];
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  handleInput = e => {
      this.setState({
        todo: e.target.value
      });
  }

  addTodo = e => {
    e.preventDefault();
    if (this.state.todo === '') {
      return;
    }
    const task = this.state.todo;
    const newTodo = {task: task, id: Date.now(), completed: false};
    const newarr = [...this.state.todos];
    newarr.push(newTodo);
      this.setState({todos: newarr, todo: ''});
        
  };
  render() {  
    return (
      <div>    
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <TodoForm 
          handleClearTodos={this.clearCompletedTodos}
          addTodo={this.addTodo}
          todo={this.state.todo}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
