import React from 'react';
import "./components/TodoComponents/Todo.css"
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
class App extends React.Component {
  constructor() {
    super();

    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state

    /*****Set the initial state**** */
    this.state = {
      todoList: [],
      inputText: ''
    };
  }

  /********* Add Todo Items to Array *****/
  addToList = event => {
    event.preventDefault();
    //grab the current state
    let newArr = this.state.todoList;
    let newTodo = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    };
    newArr.push(newTodo);
    //refresh the state
    this.setState({
      todoList: newArr,
      inputText: ''
    });
  };

  /******** Remove Completed Items *********/
  clearComplete = event => {
    event.preventDefault();
    let newTodoList = this.state.todoList.slice();
    newTodoList = newTodoList.filter(item => {
      return item.completed === false;
    });
    //refresh the state
    this.setState({
      todoList: newTodoList
    });
  };

  /******* Toggle Items Upon Completion *********/
  toggleComplete = id => {
    let tempTodos = this.state.todoList.slice();
    tempTodos.map(todo => {
      todo.id === id ? todo.completed = !todo.completed : "";
      return todo;
    });
    //refresh the state
    this.setState({ todoList: tempTodos });
  };

  /******* Update User Input   ********/
  updateUserInput = event => {
    //refresh the state
    this.setState({ inputText: event.target.value });
  };

  /****** Render to Screen (React DOM) *************/
  render() {
    return (
      <div>""
     <div className="h1Container"> <h1>To Do List</h1></div>
        <div className="todoContainer">
          <TodoList
            list={this.state.todoList}
            id={this.state.id}
            toggleComplete={this.toggleComplete}
          />
          <TodoForm
            addToList={this.addToList}
            userInput={this.state.inputText}
            updateUserInput={this.updateUserInput}
            inputText={this.state.inputText}
            clearComplete={this.clearComplete}
            id={this.state.id}
          />
        </div>
      </div>
    );
  }
}

export default App;