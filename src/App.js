import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import SearchBar from './components/SearchComponents/SearchBar';
import SearchList from './components/SearchComponents/SearchList'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todo: {},
      task: '',
      term: '',
      searchResults: [],
    }

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }
  handleInputChange(event){
    this.setState({task: event.target.value});
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
    newTodos = newTodos.filter((todo)=> todo.complete === false)
    this.setState({todos: newTodos})
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

  handleSearchInput(event){
    this.setState({term: event.target.value});
  }

  handleSearchSubmit(event){
    event.preventDefault();

    let searchArray = this.state.todos.slice();
    console.log('logging searchArray', searchArray)
    let term = this.state.term.slice();
    console.log('Logging Search term', term);
    searchArray = searchArray.filter(todo=>{
      return todo.task.includes(term);
    })
    console.log('new search array', searchArray);
    this.setState({searchResults: searchArray, term: ''})
  }
  render() {
    return (
      <div>       
         <TodoForm  value={this.state.task} onChange={this.handleInputChange} onSubmit={this.handleSubmit} onClick={this.clearTodos} />
         <TodoList onClick={this.toggleTodo} list={this.state.todos}/>
         <SearchBar value={this.state.term} onSubmit={this.handleSearchSubmit} onChange={this.handleSearchInput}/>
         <SearchList list={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
