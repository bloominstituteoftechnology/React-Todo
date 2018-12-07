import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoSearch from './components/TodoComponents/TodoSearch';
import ToDoSearchResult from './components/TodoComponents/TodoSearchResult';

import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    todos: [], // list of todos
    todoSearch: [], //list of search result todos
  }

  //Function to update the todos state
  updateTodosHandler = (event, todos) => {
    this.setState({ todos: todos });
  }

  //Function to Update the search result todos state 
  updateSearchHandler = (event, searchTodos) => {
    this.setState({ todoSearch: searchTodos });
  }

  //function to clear search 
  clearSearchHandler = () => {
    this.setState({
      todoSearch: []
    });
  }
 
  //function to handle clicking on a todo (completed or not completed)
  todoClickHandler = (event, id) => {
    const todoArr = this.state.todos.slice();
    const todo = todoArr.filter(td => td.id === id);
    
    todo[0].completed = !todo[0].completed;
    this.setState({todos: todoArr});
  }
  
  //Local storage saving functions
  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  //hydrate state when the page loads
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  render() {
    return (
      <div className="container">
        <h1>TODO APP</h1>
        <TodoList todos={this.state.todos} todoClick={this.todoClickHandler}/>
        <TodoForm 
          todos={this.state.todos}
          todoSearch={this.state.todoSearch}
          updateTodos={this.updateTodosHandler}
          updateSearch={this.updateSearchHandler} />
        <ToDoSearchResult todos={this.state.todoSearch} todoClick={this.todoClickHandler}/>
        <TodoSearch 
          todos={this.state.todos}
          updateSearch={this.updateSearchHandler}
          clearSearch={this.clearSearchHandler}
          />
      </div>
    );
  }
}

export default App;
