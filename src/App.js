import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todo: {},
      task: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }
  handleInputChange(event){
    this.setState({task: event.target.value});
    console.log('logging task', this.state.task)
  }
  handleSubmit (event){
    event.preventDefault();
    let task = this.state.task.slice();
    let todos = this.state.todos.slice();
    const todo = {
      id: Date.now(),
      task,
      complete: false
    }
    todos.push(todo);
    this.setState({todo, todos, task: ''})
    
  }
  clearTodos(){
    let newTodos = this.state.todos.slice();
    newTodos.filter((todo)=> todo.complete === true)
    this.setState({todos: newTodos})
    console.log('attempting to clear completed')
  }

  toggleTodo(id){
    let newTodos = this.state.todos.slice();
    newTodos = newTodos.map(todo => {
      if (todo.id === id){
        todo.complete = !todo.complete
        return todo;
      }else {
        return todo;
      }
    })
    this.setState({todos: newTodos})
  }

  render() {
    return (
      <div>       
         <TodoForm  value={this.state.task} onChange={this.handleInputChange} onSubmit={this.handleSubmit} onClick={this.clearTodos} />
         <TodoList onClick={this.toggleTodo} list={this.state.todos}/>
      </div>
    );
  }
}

export default App;
