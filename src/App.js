import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const init = [
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
];

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {};
    this.state.todos = init;
    this.addTodo = this.addTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
  };

  addTodo(e) {
    e.preventDefault();
    let id = Date.now();
    let completed = false;
    let task = document.getElementById('task').value;
    this.state.todos.push({task,id,completed});
    this.setState({todos:this.state.todos})
    //clear form
    document.getElementById('task').value = ""
  };

  clearTodos(e) {
    e.preventDefault();
    this.setState({todos : this.state.todos.filter(todo => todo.completed === false)});
  };

  toggleComplete(e) {
    e.preventDefault();
    let task = this.state.todos.find(el => el.id.toString() === e.target.id);
    task.completed = !task.completed;
    this.setState(this.state.todos);
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete}/>
        <TodoForm addTodo={this.addTodo} clearTodos={this.clearTodos}/>
      </div>
    );
  }
}

export default App;
