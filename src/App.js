import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    todos: [
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
    currentInput: ""
  }

  saveInputHandler = event => {
    const inputValue = event.target.value;
    this.setState({currentInput: inputValue});
  }

  addTodoBtnHandler = event => {
    const todos = this.state.todos.slice();
    const text = this.state.currentInput;
    todos.push({
      task: text,
      id: Date.now(),
      completed: false
    });
    this.setState({todos: todos, currentInput: ""});

    //save state to local storage
    // localStorage.setItem("todos", JSON.stringify(todos));
    // localStorage.setItem("currentInput", "");
  }

  addTodoInputHandler = event => {
    const todos = this.state.todos.slice();
    const text = event.target.value;

    if(event.keyCode === 13) {
      todos.push({
        task: text,
        id: Date.now(),
        completed: false
      });
      this.setState({todos: todos, currentInput: ""});
    }
  }

  todoClickHandler = (event, id) => {
    const todoArr = this.state.todos.slice();
    const todo = todoArr.filter(td => td.id === id);
    
    todo[0].completed = !todo[0].completed;
    this.setState({todos: todoArr});
  }

  removeCompletedBtnHandler = (event) => {
    const todoArr = this.state.todos.slice();
    const notCompleted = todoArr.filter(td => !td.completed);
    this.setState({todos: notCompleted});
  }

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
          addFromBtn={this.addTodoBtnHandler} 
          addFromInput={this.addTodoInputHandler} 
          removeCompleted={this.removeCompletedBtnHandler} 
          saveInput={this.saveInputHandler}/>
      </div>
    );
  }
}

export default App;
