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
    searchInput: "" //keeps track of what is in the search input field
  }

  //function to handle pushing enter when done typing in add todo input field
  addTodoInputHandler = (event, text) => {
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

  //function to handle clicking on a todo
  todoClickHandler = (event, id) => {
    const todoArr = this.state.todos.slice();
    const todo = todoArr.filter(td => td.id === id);
    
    todo[0].completed = !todo[0].completed;
    this.setState({todos: todoArr});
  }

  //function to handle clicking on the button Clear Completed
  removeCompletedBtnHandler = event => {
    this.setState(prevState => {
      const notCompleted = prevState.todos.filter(td => !td.completed);
      return {todos: notCompleted};
    });
  }

  //function to keep track of the text in the search input field
  setSearchWordHandler = event => {
    const word = event.target.value;
    this.setState({searchInput:word});
  }

  //function to handle clicking on the button Search
  searchFromBtnHandler = event => {
    if(!this.state.searchInput) return;
    const todos = this.state.todos.slice();
    const result = todos.filter(todo => todo.task.toLowerCase().includes(this.state.searchInput.toLowerCase()));
    this.setState({todoSearch: result});
  }

  //function to handle pushing enter when done typing in search input field
  searchFromInputHandler = event => {
    if(!event.target.value) return;

    const todos = this.state.todos.slice();

    if(event.keyCode === 13) {
      const result = todos.filter(todo => todo.task.toLowerCase().includes(event.target.value.toLowerCase()));
      this.setState({todoSearch: result});
    }
  }

  //function to handle clicking on Clear Search button
  clearSearchHandler = () => {
    this.setState({
      todoSearch: [],
      searchInput: ""
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
          current={this.state.currentInput}
          addFromInput={this.addTodoInputHandler} 
          removeCompleted={this.removeCompletedBtnHandler} 
          saveInput={this.saveInputHandler}/>
        <ToDoSearchResult todos={this.state.todoSearch} todoClick={this.todoClickHandler}/>
        <TodoSearch 
          searchWord={this.state.searchInput}
          setSearchWord={this.setSearchWordHandler}
          searchBtn={this.searchFromBtnHandler}
          searchEnter={this.searchFromInputHandler}
          clearSearch={this.clearSearchHandler}
          />
      </div>
    );
  }
}

export default App;
