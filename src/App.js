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
    todos: [ //list of all todos
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: true
      }
    ],
    todoSearch: [], //list of search result todos
  }

  //function for adding todo
  addTodoHandler = (event, text) => {
    if(!text) return;
    const newTodo = {
      task: text,
      id: Date.now(),
      completed: false
    }
    this.setState(prevState => {
      prevState.todos.push(newTodo);
      return {todos: prevState.todos};
    });
  }

  //function to handle clicking on a todo (completed or not completed)
  todoClickHandler = (event, id) => {
    const todoArr = this.state.todos.slice();
    const todo = todoArr.filter(td => td.id === id);
    
    todo[0].completed = !todo[0].completed;
    this.setState({todos: todoArr});
  }

  //function that clears completed todos
  removeCompletedBtnHandler = event => {
    this.setState(prevState => {
      const notCompleted = prevState.todos.filter(td => !td.completed);
      const searchNotCompleted = prevState.todoSearch.filter(td => !td.completed);
      return {todos: notCompleted,
              todoSearch: searchNotCompleted
             };
    });
  }

  //Function to search the todos for a specified string
  searchTodoHandler = (event, text) => {
    if(!text) return;
    if(this.state.todos === []) return;
    this.setState(prevState => {
      const searchResult = prevState.todos.filter(todo => todo.task.toLowerCase().includes(text.toLowerCase()));
      if(searchResult.length === 0) alert("Sorry, no todos found with text " + text);
      return {todoSearch: searchResult};
    });
  }

  //function to clear search 
  clearSearchHandler = () => {
    this.setState({
      todoSearch: []
    });
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
          addFromInput={this.addTodoHandler} 
          removeCompleted={this.removeCompletedBtnHandler} />
        <ToDoSearchResult todos={this.state.todoSearch} todoClick={this.todoClickHandler}/>
        <TodoSearch 
          searchTodo={this.searchTodoHandler}
          clearSearch={this.clearSearchHandler}
          />
      </div>
    );
  }
}

export default App;
