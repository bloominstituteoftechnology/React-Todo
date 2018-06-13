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
    this.addTodo = this.addTodo.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
  }
  handleInputChange(event){
    this.setState({task: event.target.value});
    console.log('logging task', this.state.task)
  }
  handleSubmit (event){
    event.preventDefault();
    this.setState({
      todo: {
        id: Date.now(),
        task: this.state.task,
        completed: false,
    }
  })
    //this.addTodo(this.state.todo)
    let newTodos = this.state.todos;
    newTodos.push(this.state.todo)
    this.setState({todos: newTodos})
    this.setState({task: ''})
  }

  addTodo(item){
    let newTodos = this.state.todos;
    newTodos.push(item)
    this.setState({todos: newTodos})
    console.log('logging state', this.state)
  }
  clearTodos(){
    let newTodos = this.state.todos;
    newTodos.filter((todo)=>{
      return !todo.completed;
    })
    this.setState({todos: newTodos})
  }

  render() {
    return (
      <div>       
         <TodoForm  value={this.state.task} onChange={this.handleInputChange} onSubmit={this.handleSubmit} onClick={this.clearTodos} />
         <TodoList state={this.state} list={this.state.todos}/>
      </div>
    );
  }
}

export default App;
